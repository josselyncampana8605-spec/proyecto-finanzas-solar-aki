"use client";

import { useMemo, useState } from "react";
import { corporateValues, financialRatios, risks, sources } from "@/data/projectData";
import {
  BASE_ASSUMPTIONS,
  BASE_RESULT,
  CashFlowRow,
  SCENARIOS,
  evaluateProject,
  formatMoney,
  formatNumber,
} from "@/models/finance";

function MetricCard({ label, value, note, tone = "neutral" }: { label: string; value: string; note: string; tone?: "good" | "bad" | "neutral" }) {
  return (
    <article className={`metric-card ${tone}`}>
      <p>{label}</p>
      <strong>{value}</strong>
      <small>{note}</small>
    </article>
  );
}

function CashFlowChart({ rows }: { rows: CashFlowRow[] }) {
  const values = rows.map((row) => row.cumulativeDiscountedCashFlow);
  const min = Math.min(...values);
  const max = Math.max(...values, 0);
  const width = 760;
  const height = 270;
  const padding = 28;
  const range = Math.max(max - min, 1);
  const points = values.map((value, index) => {
    const x = padding + index * ((width - padding * 2) / (values.length - 1));
    const y = padding + (max - value) * ((height - padding * 2) / range);
    return `${x},${y}`;
  }).join(" ");
  const zeroY = padding + max * ((height - padding * 2) / range);

  return (
    <div className="chart-shell" aria-label="Flujo acumulado descontado durante 25 años">
      <svg viewBox={`0 0 ${width} ${height}`} role="img">
        <title>Flujo de caja acumulado descontado</title>
        <line x1={padding} x2={width - padding} y1={zeroY} y2={zeroY} className="zero-line" />
        <polyline points={points} className="cash-line" />
        <circle cx={padding} cy={padding + (max - values[0]) * ((height - padding * 2) / range)} r="5" className="chart-dot" />
        <circle cx={width - padding} cy={padding + (max - values.at(-1)!) * ((height - padding * 2) / range)} r="5" className="chart-dot" />
      </svg>
      <div className="chart-axis"><span>Año 0</span><span>Año 5</span><span>Año 10</span><span>Año 15</span><span>Año 20</span><span>Año 25</span></div>
    </div>
  );
}

function RatioBars({ values, unit }: { values: number[]; unit: string }) {
  const maximum = Math.max(...values) * 1.12;
  return (
    <div className="ratio-bars">
      {values.map((value, index) => (
        <div key={`${value}-${index}`} className="ratio-column">
          <span>{formatNumber(value, 2)}{unit === "%" ? "%" : ""}</span>
          <div style={{ height: `${Math.max(12, (value / maximum) * 72)}px` }} />
          <small>{2023 + index}</small>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [investment, setInvestment] = useState(BASE_ASSUMPTIONS.initialInvestment);
  const [tariff, setTariff] = useState(BASE_ASSUMPTIONS.tariffPerKwh);
  const [generation, setGeneration] = useState(BASE_ASSUMPTIONS.annualGenerationKwh);
  const [costEquity, setCostEquity] = useState(BASE_ASSUMPTIONS.costEquity);

  const result = useMemo(() => evaluateProject({
    initialInvestment: investment,
    tariffPerKwh: tariff,
    annualGenerationKwh: generation,
    costEquity,
  }), [investment, tariff, generation, costEquity]);

  const recommendation = result.npv >= 0 ? "Aceptable bajo estos supuestos" : "Modificar antes de invertir";

  return (
    <main>
      <header className="hero" id="inicio">
        <nav>
          <a className="brand" href="#inicio"><span>AKÍ</span> Solar Lab</a>
          <div>
            <a href="#diagnostico">Diagnóstico</a>
            <a href="#inversion">Inversión</a>
            <a href="#sensibilidad">Simulador</a>
            <a href="#fuentes">Fuentes</a>
          </div>
        </nav>
        <div className="hero-grid">
          <section>
            <div className="eyebrow">Proyecto integrador · Finanzas e ingeniería económica</div>
            <h1>¿Conviene instalar energía solar en <em>AKÍ Latacunga Norte?</em></h1>
            <p className="hero-copy">Dashboard de prefactibilidad con datos oficiales, supuestos identificados y un modelo reproducible de 25 años.</p>
            <div className="hero-actions">
              <a className="button primary" href="#sensibilidad">Probar escenarios</a>
              <a className="button secondary" href="#metodologia">Ver metodología</a>
            </div>
          </section>
          <aside className="decision-card">
            <span className="decision-label">Decisión del escenario base</span>
            <strong>MODIFICAR</strong>
            <p>El VAN es negativo y la TIR no supera el WACC.</p>
            <div><span>VAN base</span><b>{formatMoney(BASE_RESULT.npv, 2)}</b></div>
            <div><span>TIR</span><b>{formatNumber(BASE_RESULT.irr * 100, 2)}%</b></div>
            <div><span>WACC</span><b>{formatNumber(BASE_RESULT.wacc * 100, 3)}%</b></div>
          </aside>
        </div>
        <div className="data-warning"><b>Alcance:</b> no existe factura ni cotización del local. Capacidad, inversión y costos operativos son supuestos de prefactibilidad; PVGIS, ARCONEL, BCE, SRI y SCVS son fuentes verificables.</div>
      </header>

      <section className="section" id="diagnostico">
        <div className="section-heading">
          <div><span className="section-number">01</span><h2>Desafío y contexto</h2></div>
          <p>Evaluar si un sistema de 100 kWp crea valor, sin presentar estimaciones como datos observados del establecimiento.</p>
        </div>
        <div className="context-grid">
          <article className="context-card"><span>⌖</span><div><b>Ubicación</b><p>Av. Amazonas y Benjamín Terán, Latacunga.</p></div></article>
          <article className="context-card"><span>☀</span><div><b>Generación PVGIS</b><p>145.536 kWh durante el primer año.</p></div></article>
          <article className="context-card"><span>¢</span><div><b>Tarifa evitada</b><p>USD 0,090/kWh, comercial con demanda.</p></div></article>
          <article className="context-card"><span>↗</span><div><b>Tasa de deuda</b><p>7,89 % máxima Productivo Corporativo.</p></div></article>
        </div>
      </section>

      <section className="section alt" id="inversion">
        <div className="section-heading">
          <div><span className="section-number">02</span><h2>Ingeniería económica</h2></div>
          <p>Indicadores calculados sobre flujos después de impuestos y descontados al WACC.</p>
        </div>
        <div className="metric-grid">
          <MetricCard label="Valor actual neto" value={formatMoney(BASE_RESULT.npv, 2)} note="Debe ser mayor que cero" tone="bad" />
          <MetricCard label="Tasa interna de retorno" value={`${formatNumber(BASE_RESULT.irr * 100, 2)}%`} note="Inferior al WACC" tone="bad" />
          <MetricCard label="Beneficio / costo" value={formatNumber(BASE_RESULT.benefitCost, 3)} note="Debe superar 1,000" tone="bad" />
          <MetricCard label="Recuperación simple" value={`${formatNumber(BASE_RESULT.simplePayback!, 2)} años`} note="No incorpora descuento" />
          <MetricCard label="Recuperación descontada" value="No alcanzada" note="Dentro de 25 años" tone="bad" />
          <MetricCard label="Valor presente del proyecto" value={formatMoney(BASE_RESULT.presentValueOfFlows, 2)} note="Frente a USD 90.000 de inversión" />
        </div>
        <div className="panel-grid two">
          <article className="panel">
            <div className="panel-title"><div><small>FLUJO DESCONTADO</small><h3>La inversión casi alcanza el equilibrio</h3></div><span className="status bad">Brecha: {formatMoney(Math.abs(BASE_RESULT.npv), 0)}</span></div>
            <CashFlowChart rows={BASE_RESULT.rows} />
            <p className="interpretation">La línea permanece bajo cero al finalizar el año 25. El proyecto recupera el desembolso nominal, pero no el rendimiento exigido por el capital.</p>
          </article>
          <article className="panel funding-panel">
            <small>ESTRUCTURA PROPUESTA</small>
            <h3>Financiamiento 60 / 40</h3>
            <div className="funding-visual">
              <div className="donut"><span><b>10,767%</b>WACC</span></div>
              <div className="funding-legend">
                <p><i className="equity" />Patrimonio <b>60%</b><small>{formatMoney(54_000)}</small></p>
                <p><i className="debt" />Deuda <b>40%</b><small>{formatMoney(36_000)}</small></p>
              </div>
            </div>
            <div className="funding-note"><b>Cuota anual referencial:</b> {formatMoney(6_888.61, 2)} durante siete años. No representa una oferta bancaria.</div>
          </article>
        </div>
      </section>

      <section className="section" id="sensibilidad">
        <div className="section-heading">
          <div><span className="section-number">03</span><h2>Simulador de sensibilidad</h2></div>
          <p>Ajusta los supuestos y observa cómo cambia la decisión. Los controles no transforman las estimaciones en datos reales.</p>
        </div>
        <div className="simulator">
          <div className="controls">
            <label><span>Inversión inicial <b>{formatMoney(investment)}</b></span><input type="range" min="75000" max="110000" step="1000" value={investment} onChange={(event) => setInvestment(Number(event.target.value))} /></label>
            <label><span>Tarifa evitada <b>${tariff.toFixed(3)}/kWh</b></span><input type="range" min="0.070" max="0.120" step="0.001" value={tariff} onChange={(event) => setTariff(Number(event.target.value))} /></label>
            <label><span>Generación año 1 <b>{formatNumber(generation, 0)} kWh</b></span><input type="range" min="130000" max="160000" step="1000" value={generation} onChange={(event) => setGeneration(Number(event.target.value))} /></label>
            <label><span>Costo del patrimonio <b>{formatNumber(costEquity * 100, 1)}%</b></span><input type="range" min="0.10" max="0.18" step="0.005" value={costEquity} onChange={(event) => setCostEquity(Number(event.target.value))} /></label>
            <button onClick={() => { setInvestment(90_000); setTariff(0.09); setGeneration(145_536.17); setCostEquity(0.14); }}>Restablecer escenario base</button>
          </div>
          <div className={`simulation-result ${result.npv >= 0 ? "positive" : "negative"}`}>
            <small>RESULTADO DINÁMICO</small>
            <h3>{recommendation}</h3>
            <strong>{formatMoney(result.npv, 2)}</strong>
            <div className="result-pills">
              <span>TIR <b>{formatNumber(result.irr * 100, 2)}%</b></span>
              <span>WACC <b>{formatNumber(result.wacc * 100, 3)}%</b></span>
              <span>B/C <b>{formatNumber(result.benefitCost, 3)}</b></span>
            </div>
            <p>{result.npv >= 0 ? "Con estos supuestos, el valor presente de los ahorros supera la inversión." : "Se necesita menor inversión, mayor ahorro comprobado o menor costo de capital."}</p>
          </div>
        </div>
        <div className="scenario-grid">
          {SCENARIOS.map(({ name, result: scenario }) => (
            <article key={name} className={`scenario ${name.toLowerCase()}`}>
              <span>{name}</span><strong>{formatMoney(scenario.npv, 0)}</strong><p>TIR {formatNumber(scenario.irr * 100, 2)}%</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt" id="corporativo">
        <div className="section-heading">
          <div><span className="section-number">04</span><h2>Diagnóstico corporativo</h2></div>
          <p>Indicadores de Corporación Favorita C.A.; no corresponden exclusivamente a AKÍ Latacunga Norte.</p>
        </div>
        <div className="ratio-grid">
          {financialRatios.map((ratio) => (
            <article className="ratio-card" key={ratio.indicator}>
              <div><h3>{ratio.indicator}</h3><p>{ratio.interpretation}</p></div>
              <RatioBars values={ratio.values} unit={ratio.unit} />
            </article>
          ))}
        </div>
        <div className="valuation-grid">
          <article><small>MODELO DE DIVIDENDOS</small><strong>{formatMoney(corporateValues.dividendModelValue / 1_000_000, 1)} M</strong><span>USD 0,891 por acción</span></article>
          <article><small>VALOR CONTABLE</small><strong>{formatMoney(corporateValues.bookValue / 1_000_000, 1)} M</strong><span>USD 2,169 por acción</span></article>
          <article><small>VALOR DE MERCADO ESTIMADO</small><strong>{formatMoney(corporateValues.estimatedMarketValue / 1_000_000, 1)} M</strong><span>USD 2,03 por acción</span></article>
          <article><small>POLÍTICA DE DIVIDENDOS</small><strong>42,72%</strong><span>Payout; retención 57,28%</span></article>
        </div>
        <p className="interpretation wide">El modelo de dividendos arroja un valor menor porque considera solo distribuciones y es sensible al costo patrimonial. El valor contable funciona como contraste, no como precio garantizado.</p>
      </section>

      <section className="section" id="riesgos">
        <div className="section-heading">
          <div><span className="section-number">05</span><h2>Riesgos y control</h2></div>
          <p>La principal fuente de incertidumbre es la ausencia de información operativa del establecimiento.</p>
        </div>
        <div className="risk-table">
          <div className="risk-header"><span>Riesgo</span><span>Prob.</span><span>Impacto</span><span>Respuesta</span></div>
          {risks.map((item) => <div className="risk-row" key={item.risk}><b>{item.risk}</b><span className={`risk-tag ${item.probability.toLowerCase()}`}>{item.probability}</span><span className={`risk-tag ${item.impact.toLowerCase()}`}>{item.impact}</span><p>{item.response}</p></div>)}
        </div>
        <div className="governance">
          <h3>Puertas de control antes de contratar</h3>
          <ol>
            <li><span>1</span><div><b>Datos reales</b><p>Doce facturas y levantamiento del techo.</p></div></li>
            <li><span>2</span><div><b>Competencia</b><p>Dos cotizaciones comparables y conflictos declarados.</p></div></li>
            <li><span>3</span><div><b>Auditoría</b><p>Revisión técnica y financiera independiente.</p></div></li>
            <li><span>4</span><div><b>Aprobación</b><p>VAN positivo y autorización corporativa.</p></div></li>
            <li><span>5</span><div><b>Seguimiento</b><p>Generación y ahorro real frente al presupuesto.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section methodology" id="metodologia">
        <div className="section-heading">
          <div><span className="section-number">06</span><h2>Metodología y reproducibilidad</h2></div>
          <p>Los resultados se calculan en el navegador con el mismo modelo TypeScript incluido en el repositorio.</p>
        </div>
        <div className="method-grid">
          <article><span>1</span><h3>Recolectar</h3><p>Datos oficiales y supuestos etiquetados.</p></article>
          <article><span>2</span><h3>Modelar</h3><p>Flujo libre, WACC, VAN, TIR y B/C.</p></article>
          <article><span>3</span><h3>Auditar</h3><p>Coherencia de fórmulas y rechazo de inconsistencias.</p></article>
          <article><span>4</span><h3>Decidir</h3><p>Modificar el proyecto base antes de invertir.</p></article>
        </div>
      </section>

      <section className="section sources" id="fuentes">
        <div className="section-heading">
          <div><span className="section-number">07</span><h2>Fuentes verificables</h2></div>
          <p>Consulta directa a instituciones oficiales, empresa analizada y organismo internacional.</p>
        </div>
        <div className="source-list">
          {sources.map((source) => <a key={source.name} href={source.url} target="_blank" rel="noreferrer"><div><b>{source.name}</b><span>{source.use}</span></div><strong>↗</strong></a>)}
        </div>
      </section>

      <footer>
        <div><b>Proyecto de Josselyn Campaña</b><span>Actualizado: 31 de julio de 2026</span></div>
        <p>Prefactibilidad académica. No constituye recomendación de inversión ni cotización técnica.</p>
      </footer>
    </main>
  );
}
