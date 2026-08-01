# Revisión humana del apartado 4.4

## Apartado revisado

4.4. Medidas de riesgo.

## Revisión realizada por la estudiante

Revisé que el apartado incluya:

* Riesgos económicos, financieros, operativos y regulatorios.
* Análisis de sensibilidad.
* Escenarios optimista, base y pesimista.
* Punto de equilibrio.
* Efectos de cambios en precios, ventas, costos y tasa de descuento.
* Matriz de riesgos.
* Propuesta de simulación Monte Carlo.

## Decisiones tomadas

Se aceptaron variaciones porcentuales provisionales para construir los escenarios y realizar pruebas de estrés. Estos porcentajes fueron identificados como supuestos simulados y no como datos observados.

Se decidió que los escenarios definitivos deberán actualizarse mediante facturas, cotizaciones, garantías, ofertas bancarias y estudios técnicos.

También se decidió:

* Calcular el punto de equilibrio operativo y financiero.
* Ejecutar posteriormente 10.000 simulaciones mediante TypeScript.
* Mantener una semilla documentada para reproducir Monte Carlo.
* No utilizar Python.
* No presentar probabilidades ni resultados financieros hasta contar con datos cuantificados.
* Actualizar la matriz cuando se obtenga información real del establecimiento.

## Validación

Se comprobó que la matriz utiliza una escala de probabilidad e impacto de 1 a 5 y que propone medidas de respuesta para cada riesgo.

Se verificó que el análisis explica el efecto esperado de la inversión, generación, autoconsumo, tarifa, costos y WACC sobre el VAN.

Las referencias técnicas y regulatorias utilizadas proceden de ARCONEL, OpenStax, el Departamento de Energía de Estados Unidos y NREL.

## Resultado

El apartado 4.4 fue aceptado como metodología inicial de riesgos. Sus resultados cuantitativos permanecerán pendientes hasta incorporar los datos del escenario base.

**Responsable:** Josselyn Campaña
**Fecha de revisión:** 31 de julio de 2026
