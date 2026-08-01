export const financialRatios = [
  { indicator: "Liquidez corriente", unit: "veces", values: [1.27, 1.31, 1.35], interpretation: "Mejora gradual de la cobertura corriente." },
  { indicator: "Prueba ácida", unit: "veces", values: [0.61, 0.66, 0.75], interpretation: "Mejora, aunque permanece por debajo de uno." },
  { indicator: "Endeudamiento", unit: "%", values: [30.35, 30.68, 30.21], interpretation: "Estructura estable y mayoritariamente patrimonial." },
  { indicator: "Margen neto", unit: "%", values: [6.65, 6.20, 6.09], interpretation: "Desciende frente a 2023; requiere proteger márgenes." },
  { indicator: "ROA", unit: "%", values: [6.44, 5.86, 5.88], interpretation: "Se estabiliza en 2025, por debajo de 2023." },
  { indicator: "ROE", unit: "%", values: [9.25, 8.45, 8.42], interpretation: "La caída se explica principalmente por el margen neto." },
];

export const corporateValues = {
  revenue2025: 2_690_137_857.78,
  assets2025: 2_788_469_579.72,
  equity2025: 1_946_118_211.59,
  netIncome2025: 163_876_842.69,
  dividend2025: 70_000_000,
  payout: 0.4272,
  retainedEarnings: 93_876_842.69,
  dividendModelValue: 799_640_990.86,
  bookValue: 1_946_118_211.59,
  estimatedMarketValue: 1_821_794_871.79,
};

export const risks = [
  { risk: "Consumo eléctrico no verificado", probability: "Alta", impact: "Alto", response: "Obtener 12 facturas antes de aprobar." },
  { risk: "Techo insuficiente o con refuerzo", probability: "Media", impact: "Alto", response: "Levantamiento y estudio estructural." },
  { risk: "Inversión superior al supuesto", probability: "Alta", impact: "Alto", response: "Dos cotizaciones y precio máximo de aceptación." },
  { risk: "Generación menor que PVGIS", probability: "Media", impact: "Medio", response: "Estudio de sombras y garantía de desempeño." },
  { risk: "Cambio tarifario", probability: "Media", impact: "Medio", response: "Actualizar el modelo con cada pliego ARCONEL." },
  { risk: "Fallas y mantenimiento", probability: "Media", impact: "Medio", response: "Contrato O&M, monitoreo y garantías." },
];

export const sources = [
  { name: "SCVS — Ranking de compañías", url: "https://appscvsmovil.supercias.gob.ec/ranking/reporte.html", use: "Estados financieros y razones 2023–2025" },
  { name: "Corporación Favorita — Informe Anual 2025", url: "https://www.corporacionfavorita.com/pdf/informe-anual-cf-2025.pdf", use: "Empresa, gobierno y sostenibilidad" },
  { name: "ARCONEL — Pliego tarifario 2026", url: "https://arconel.gob.ec/wp-content/uploads/downloads/2026/01/Resolucion-ARCONEL-029-25_Pliegos-Tarifarios-SPEE-SAPG-SCVE-2026.pdf", use: "Tarifa comercial Cotopaxi" },
  { name: "BCE — Tasas julio 2026", url: "https://contenido.bce.fin.ec/documentos/Estadisticas/SectorMonFin/TasasInteres/TasasVigentes072026.htm", use: "Costo referencial de deuda" },
  { name: "Comisión Europea — PVGIS", url: "https://joint-research-centre.ec.europa.eu/photovoltaic-geographical-information-system-pvgis_en", use: "Producción solar estimada" },
  { name: "SRI — Impuesto a la renta", url: "https://www.sri.gob.ec/impuesto-renta", use: "Tarifa general de sociedades" },
  { name: "AKÍ — Locales", url: "https://www.aki.com.ec/locales-aki/", use: "Identificación del establecimiento" },
];
