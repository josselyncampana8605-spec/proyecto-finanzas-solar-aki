# Evidencia 12: revisión humana de los apartados 4.7 y 4.8

## Actividad realizada

Se evaluó un escenario de prefactibilidad para instalar un sistema fotovoltaico de 100 kWp en AKÍ Latacunga Norte. También se analizó una estructura referencial de financiamiento compuesta por patrimonio y deuda.

## Herramienta de inteligencia artificial

Se utilizó Codex para organizar los supuestos, aplicar las fórmulas financieras, calcular los indicadores de inversión y revisar la coherencia entre inversión y financiamiento.

## Agentes participantes

* Agente coordinador.
* Agente financiero.
* Agente de ingeniería económica.
* Agente de datos.
* Agente de riesgo y auditoría.
* Estudiante responsable de la revisión y decisión final.

## Información real verificada

* Ubicación pública de AKÍ Latacunga Norte.
* Producción solar estimada mediante PVGIS.
* Pliego tarifario de ARCONEL para Cotopaxi en 2026.
* Tasa máxima Productivo Corporativo publicada por el BCE para julio de 2026.
* Tarifa general de impuesto a la renta publicada por el SRI.

## Datos simulados identificados

Debido a que no existe información pública del local, se identificaron como supuestos:

* Capacidad de 100 kWp.
* Inversión de USD 90.000.
* Distribución de 60 % patrimonio y 40 % deuda.
* Costo del patrimonio de 14 %.
* Costos de mantenimiento.
* Degradación anual.
* Depreciación.
* Valor residual.
* Plazo de financiamiento.

Estos valores no se presentan como datos reales ni como una cotización aprobada.

## Validación de resultados

Se verificaron los siguientes resultados:

* Producción inicial: 145.536,17 kWh anuales.
* Ahorro bruto del primer año: USD 13.098,26.
* Flujo libre del primer año: USD 11.398,69.
* WACC: 10,767 %.
* VAN: –USD 1.853,76.
* TIR: 10,46 %.
* Beneficio-costo: 0,981.
* Recuperación simple: 8,05 años.
* Recuperación descontada: no alcanzada en 25 años.
* Valor anual equivalente: –USD 216,38.
* Cuota anual referencial: USD 6.888,61.

Los cálculos se comprobaron mediante JavaScript y Node.js. No se utilizó Python.

## Revisión del auditor

El auditor comprobó que:

1. La capacidad y la inversión fueran presentadas como supuestos.
2. La tarifa eléctrica procediera de ARCONEL.
3. La generación procediera de PVGIS.
4. El WACC no mezclara las cuotas del préstamo con el flujo libre del proyecto.
5. No se incluyeran ahorros por demanda sin una factura.
6. La recomendación fuera coherente con el VAN negativo.
7. El escenario optimista no se presentara como resultado garantizado.

## Decisión del estudiante

Se decidió no recomendar la aprobación inmediata del proyecto base porque el VAN es negativo, la TIR es inferior al WACC y la relación beneficio-costo es menor que uno.

La alternativa deberá modificarse y recalcularse cuando se obtengan:

* Factura eléctrica.
* Medición del techo.
* Estudio técnico.
* Dos cotizaciones.
* Oferta bancaria formal.

El proyecto podrá reconsiderarse si la inversión es menor a USD 87.991,75 o si el ahorro efectivo supera USD 0,09205/kWh, manteniendo los demás supuestos.

**Responsable:** Josselyn Campaña
**Fecha:** 31 de julio de 2026
