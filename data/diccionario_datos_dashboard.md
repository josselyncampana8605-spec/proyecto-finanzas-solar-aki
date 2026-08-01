# Diccionario de datos del dashboard

| Variable | Definición | Unidad | Naturaleza |
|---|---|---|---|
| `capacity_kw` | Potencia nominal del escenario fotovoltaico | kWp | Simulada |
| `annual_generation` | Energía estimada durante el primer año | kWh/año | Estimada por PVGIS |
| `tariff` | Cargo de energía comercial evitado | USD/kWh | Oficial |
| `initial_investment` | Desembolso inicial del sistema | USD | Simulado |
| `annual_degradation` | Reducción anual de la generación | Decimal | Simulada |
| `om_rate` | Mantenimiento del primer año como proporción del CAPEX | Decimal | Simulada |
| `income_tax` | Tarifa general de impuesto a la renta | Decimal | Oficial |
| `cost_debt` | Tasa máxima usada como referencia de deuda | Decimal | Referencia oficial |
| `cost_equity` | Rendimiento mínimo exigido por accionistas | Decimal | Simulado |
| `wacc` | Costo promedio ponderado de capital | Decimal | Calculado |
| `npv` | Valor actual neto de los flujos | USD | Calculado |
| `irr` | Tasa interna de retorno | Decimal | Calculado |
| `benefit_cost` | Valor presente de beneficios dividido para costos | Veces | Calculado |
| `simple_payback` | Tiempo de recuperación sin descuento | Años | Calculado |
| `discounted_payback` | Tiempo de recuperación con descuento | Años | Calculado |
| `current_ratio` | Activo corriente dividido para pasivo corriente | Veces | Oficial SCVS |
| `quick_ratio` | Liquidez sin inventarios | Veces | Oficial SCVS |
| `roa` | Utilidad neta dividida para activos | Porcentaje | Recalculado |
| `roe` | Utilidad neta dividida para patrimonio | Porcentaje | Recalculado |

## Reglas de trazabilidad

- Los datos simulados nunca se muestran como observados.
- Toda cifra oficial conserva institución, periodo y enlace.
- Las razones recalculadas utilizan variables del mismo expediente y periodo.
- La cobertura de intereses se recalculó porque el campo descargado de la SCVS era inconsistente.
- Los datos corporativos no se atribuyen al local AKÍ Latacunga Norte.
