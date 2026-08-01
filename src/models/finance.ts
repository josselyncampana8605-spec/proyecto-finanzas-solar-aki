export type ProjectAssumptions = {
  capacityKw: number;
  annualGenerationKwh: number;
  tariffPerKwh: number;
  initialInvestment: number;
  annualDegradation: number;
  omRate: number;
  omGrowth: number;
  taxRate: number;
  depreciationYears: number;
  residualRate: number;
  lifeYears: number;
  equityWeight: number;
  debtWeight: number;
  costEquity: number;
  costDebt: number;
};

export type CashFlowRow = {
  year: number;
  generationKwh: number;
  grossSavings: number;
  maintenance: number;
  depreciation: number;
  taxes: number;
  freeCashFlow: number;
  discountedCashFlow: number;
  cumulativeCashFlow: number;
  cumulativeDiscountedCashFlow: number;
};

export const BASE_ASSUMPTIONS: ProjectAssumptions = {
  capacityKw: 100,
  annualGenerationKwh: 145_536.17,
  tariffPerKwh: 0.09,
  initialInvestment: 90_000,
  annualDegradation: 0.005,
  omRate: 0.01,
  omGrowth: 0.02,
  taxRate: 0.25,
  depreciationYears: 10,
  residualRate: 0.05,
  lifeYears: 25,
  equityWeight: 0.6,
  debtWeight: 0.4,
  costEquity: 0.14,
  costDebt: 0.0789,
};

export function calculateWacc(a: ProjectAssumptions) {
  return a.equityWeight * a.costEquity + a.debtWeight * a.costDebt * (1 - a.taxRate);
}

export function calculateNpv(rate: number, cashFlows: number[]) {
  return cashFlows.reduce((total, flow, year) => total + flow / (1 + rate) ** year, 0);
}

export function calculateIrr(cashFlows: number[]) {
  let low = -0.99;
  let high = 1;
  for (let iteration = 0; iteration < 300; iteration += 1) {
    const midpoint = (low + high) / 2;
    if (calculateNpv(midpoint, cashFlows) > 0) low = midpoint;
    else high = midpoint;
  }
  return (low + high) / 2;
}

function interpolatedPayback(values: number[]) {
  let cumulative = 0;
  for (let year = 0; year < values.length; year += 1) {
    const previous = cumulative;
    cumulative += values[year];
    if (cumulative >= 0 && year > 0) return year - 1 + -previous / values[year];
  }
  return null;
}

export function evaluateProject(overrides: Partial<ProjectAssumptions> = {}) {
  const assumptions = { ...BASE_ASSUMPTIONS, ...overrides };
  const wacc = calculateWacc(assumptions);
  const depreciation = assumptions.initialInvestment / assumptions.depreciationYears;
  const rows: CashFlowRow[] = [];
  const cashFlows = [-assumptions.initialInvestment];
  const benefitFlows = [0];
  const costFlows = [assumptions.initialInvestment];
  let cumulative = -assumptions.initialInvestment;
  let cumulativeDiscounted = -assumptions.initialInvestment;

  rows.push({
    year: 0,
    generationKwh: 0,
    grossSavings: 0,
    maintenance: 0,
    depreciation: 0,
    taxes: 0,
    freeCashFlow: -assumptions.initialInvestment,
    discountedCashFlow: -assumptions.initialInvestment,
    cumulativeCashFlow: cumulative,
    cumulativeDiscountedCashFlow: cumulativeDiscounted,
  });

  for (let year = 1; year <= assumptions.lifeYears; year += 1) {
    const generationKwh = assumptions.annualGenerationKwh * (1 - assumptions.annualDegradation) ** (year - 1);
    const grossSavings = generationKwh * assumptions.tariffPerKwh;
    const maintenance = assumptions.initialInvestment * assumptions.omRate * (1 + assumptions.omGrowth) ** (year - 1);
    const annualDepreciation = year <= assumptions.depreciationYears ? depreciation : 0;
    const ebit = grossSavings - maintenance - annualDepreciation;
    const taxes = Math.max(0, ebit * assumptions.taxRate);
    const afterTaxResidual = year === assumptions.lifeYears
      ? assumptions.initialInvestment * assumptions.residualRate * (1 - assumptions.taxRate)
      : 0;
    const freeCashFlow = ebit - taxes + annualDepreciation + afterTaxResidual;
    const discountedCashFlow = freeCashFlow / (1 + wacc) ** year;

    cashFlows.push(freeCashFlow);
    benefitFlows.push(grossSavings * (1 - assumptions.taxRate) + annualDepreciation * assumptions.taxRate + afterTaxResidual);
    costFlows.push(maintenance * (1 - assumptions.taxRate));
    cumulative += freeCashFlow;
    cumulativeDiscounted += discountedCashFlow;

    rows.push({
      year,
      generationKwh,
      grossSavings,
      maintenance,
      depreciation: annualDepreciation,
      taxes,
      freeCashFlow,
      discountedCashFlow,
      cumulativeCashFlow: cumulative,
      cumulativeDiscountedCashFlow: cumulativeDiscounted,
    });
  }

  const npv = calculateNpv(wacc, cashFlows);
  const irr = calculateIrr(cashFlows);
  const simplePayback = interpolatedPayback(cashFlows);
  const discountedPayback = interpolatedPayback(cashFlows.map((flow, year) => flow / (1 + wacc) ** year));
  const benefitCost = calculateNpv(wacc, benefitFlows) / calculateNpv(wacc, costFlows);
  const capitalRecoveryFactor = wacc * (1 + wacc) ** assumptions.lifeYears / ((1 + wacc) ** assumptions.lifeYears - 1);

  return {
    assumptions,
    rows,
    cashFlows,
    wacc,
    npv,
    irr,
    benefitCost,
    simplePayback,
    discountedPayback,
    annualEquivalentValue: npv * capitalRecoveryFactor,
    presentValueOfFlows: assumptions.initialInvestment + npv,
  };
}

export const BASE_RESULT = evaluateProject();

export const SCENARIOS = [
  { name: "Pesimista", result: evaluateProject({ initialInvestment: 99_000, tariffPerKwh: 0.081, annualGenerationKwh: 138_259.36 }) },
  { name: "Base", result: BASE_RESULT },
  { name: "Optimista", result: evaluateProject({ initialInvestment: 81_000, tariffPerKwh: 0.099, annualGenerationKwh: 152_812.98 }) },
];

export function formatMoney(value: number, digits = 0) {
  return new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

export function formatNumber(value: number, digits = 2) {
  return new Intl.NumberFormat("es-EC", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}
