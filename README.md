# AKÍ Solar Lab: evaluación económica y financiera de un sistema fotovoltaico

Dashboard interactivo y proyecto integrador para analizar la prefactibilidad de instalar un sistema fotovoltaico en **AKÍ Latacunga Norte**, Ecuador. El trabajo integra economía, finanzas corporativas, ingeniería económica, valoración, riesgo y control corporativo mediante una arquitectura multiagente verificable.

## Enlaces públicos

- **Dashboard en producción:** https://proyecto-finanzas-solar-aki.vercel.app
- **Repositorio de GitHub:** https://github.com/josselyncampana8605-spec/proyecto-finanzas-solar-aki

## Pregunta del proyecto

¿Es económica y financieramente viable instalar un sistema fotovoltaico para el autoabastecimiento de AKÍ Latacunga Norte bajo una estructura combinada de recursos propios y financiamiento bancario?

## Resultado ejecutivo

El escenario base se clasifica como **MODIFICAR**, no como aprobación definitiva. Con los supuestos documentados de prefactibilidad, el VAN es negativo y la TIR no supera el WACC. Por tanto, la inversión debe redimensionarse y recalcularse cuando se obtengan la factura eléctrica, el levantamiento del techo, cotizaciones formales y ofertas reales de crédito.

| Indicador | Escenario base |
|---|---:|
| Capacidad simulada | 100 kWp |
| Generación anual estimada | 145.536,17 kWh |
| Inversión inicial simulada | USD 90.000,00 |
| VAN | USD -1.853,76 |
| TIR | 10,46 % |
| WACC | 10,767 % |
| Relación beneficio/costo | 0,9808 |
| Recuperación simple | 8,05 años |
| Recuperación descontada | No se alcanza en 25 años |
| VAE | USD -216,38 |

Los valores de capacidad, inversión y costos operativos son **supuestos de prefactibilidad**, no datos observados del local. El dashboard los identifica expresamente para evitar presentarlos como información real.

## Fuentes verificables principales

- Banco Central del Ecuador: tasas de interés vigentes.
- ARCONEL: pliegos tarifarios y regulación de generación distribuida.
- Servicio de Rentas Internas: impuesto a la renta.
- Superintendencia de Compañías: información societaria y financiera pública.
- Corporación Favorita: Informe Anual 2025.
- PVGIS de la Comisión Europea: estimación de generación fotovoltaica.
- Supermercados AKÍ: identificación pública del establecimiento.

Las referencias completas y las fechas de consulta se encuentran en `docs/`, `reports/`, `data/` y en el apartado **Fuentes** del dashboard.

## Escenarios evaluados

| Escenario | VAN | TIR | Interpretación |
|---|---:|---:|---|
| Pesimista | USD -22.055,09 | 7,29 % | Rechazar o rediseñar |
| Base | USD -1.853,76 | 10,46 % | Modificar |
| Optimista | USD 19.043,37 | 14,12 % | Aceptable si se validan los datos |

El simulador permite modificar inversión, tarifa evitada, generación y costo del patrimonio. Los cambios recalculan el VAN, la TIR, la relación beneficio/costo y la decisión del proyecto.

## Arquitectura multiagente

El proyecto utiliza ocho roles documentados:

1. Coordinador.
2. Investigador económico.
3. Analista de datos.
4. Analista financiero.
5. Analista de ingeniería económica.
6. Analista de valoración.
7. Auditor de riesgos.
8. Analista de visualización.

Las responsabilidades, entradas, productos, reglas de validación y decisiones humanas se documentan en `AGENTS.md`, `agents/`, `prompts/` y `evidence/`.

## Tecnologías

- Next.js 16.
- React.
- TypeScript.
- Tailwind CSS.
- Node.js y npm.
- Git y GitHub.
- Vercel.

No se utilizó Python. Los cálculos reproducibles se implementan en TypeScript.

## Instalación local

### Requisitos

- Node.js 20 o superior.
- npm.
- Git.

### Reproducción

```bash
git clone https://github.com/josselyncampana8605-spec/proyecto-finanzas-solar-aki.git
cd proyecto-finanzas-solar-aki
npm install
npm run dev
```

Después, abrir http://localhost:3000 en el navegador.

### Validación de producción

```bash
npm run build
npm run start
```

La compilación debe terminar sin errores antes de realizar un nuevo despliegue.

## Estructura principal

```text
proyecto-finanzas-solar-aki/
├── agents/          # Instrucciones de los agentes
├── data/            # Datos, supuestos y diccionario
├── docs/            # Fuentes y documentación
├── evidence/        # Evidencias de IA y validación humana
├── notebooks/       # Carpeta requerida; no usa Python
├── prompts/         # Prompts principales
├── reports/         # Apartados técnicos 4.1 a 4.11
├── src/             # Dashboard y modelo financiero TypeScript
├── tests/           # Validaciones del modelo
├── AGENTS.md        # Arquitectura multiagente
├── package.json     # Dependencias y comandos
└── README.md        # Guía de reproducción
```

## Reproducibilidad y control

- Los supuestos del modelo están documentados en `data/processed/`.
- El diccionario diferencia datos oficiales, calculados, simulados y pendientes.
- Los cálculos financieros se centralizan en `src/models/finance.ts`.
- Las comprobaciones se documentan en `tests/` y `evidence/`.
- GitHub conserva el historial de commits realizados durante el desarrollo.
- Vercel realiza la compilación desde la rama principal del repositorio.

## Limitaciones

No se dispone de factura eléctrica, historial autorizado de consumo, dimensiones y condición estructural del techo, cotizaciones formales ni ofertas vigentes de financiamiento del establecimiento. En consecuencia, el resultado es una **prefactibilidad condicionada** y no una autorización de inversión.

## Autora y responsabilidad académica

**Josselyn Campaña** revisó la estructura, las fuentes, los supuestos, las correcciones y las decisiones incorporadas. La inteligencia artificial se utilizó como apoyo verificable; la responsabilidad final de los resultados corresponde a la estudiante.

## Actualización

Última actualización: **31 de julio de 2026**.

