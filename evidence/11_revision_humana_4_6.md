# Evidencia 11: revisión humana del apartado 4.6

## Actividad realizada

Se elaboró el apartado 4.6, correspondiente al análisis de las razones financieras de Corporación Favorita C.A. para los años 2023, 2024 y 2025.

## Herramienta de inteligencia artificial utilizada

Se utilizó Codex como apoyo para organizar la información, aplicar las fórmulas financieras, interpretar la evolución de los indicadores y revisar la consistencia de los resultados.

## Agentes participantes

* **Agente coordinador:** delimitó el análisis y organizó las tareas.
* **Agente financiero:** calculó e interpretó las razones financieras.
* **Agente de datos:** verificó la procedencia y consistencia de las variables.
* **Agente de riesgo y auditoría:** revisó las fórmulas, resultados y posibles inconsistencias.
* **Estudiante:** revisó las fuentes, aceptó los cálculos sustentados y rechazó los indicadores que no pudieron validarse.

## Fuentes verificadas

La fuente principal fue el Ranking de Compañías de la Superintendencia de Compañías, Valores y Seguros. Se utilizó el expediente 384, correspondiente a Corporación Favorita C.A.

Variables utilizadas:

* Ingresos por ventas.
* Activos.
* Patrimonio.
* Utilidad antes de impuestos.
* Utilidad neta.
* Gastos financieros.
* Liquidez corriente.
* Prueba ácida.
* Margen bruto.
* Rotación del activo fijo.

El Informe Anual 2025 de Corporación Favorita se utilizó únicamente como fuente de contraste, porque contiene información corporativa y consolidada que puede tener un alcance diferente al registro individual de la compañía.

## Validación de los cálculos

Se comprobaron las siguientes fórmulas:

[
\text{Pasivo total}=\text{Activo total}-\text{Patrimonio}
]

[
\text{Endeudamiento del activo}=
\frac{\text{Pasivo total}}{\text{Activo total}}
]

[
\text{Margen neto}=
\frac{\text{Utilidad neta}}{\text{Ingresos por ventas}}
]

[
\text{ROA}=
\frac{\text{Utilidad neta}}{\text{Activos totales}}
]

[
\text{ROE}=
\frac{\text{Utilidad neta}}{\text{Patrimonio}}
]

[
\text{Cobertura de intereses}=
\frac{\text{Utilidad antes de impuestos}+\text{Gastos financieros}}
{\text{Gastos financieros}}
]

[
\text{ROE DuPont}=
\text{Margen neto}
\times
\text{Rotación de activos}
\times
\text{Multiplicador del patrimonio}
]

Los cálculos fueron comprobados con JavaScript y Node.js. No se utilizó Python.

## Respuesta corregida o rechazada

El campo de cobertura de intereses del archivo descargable de la SCVS presentó valores negativos que no eran coherentes con la utilidad antes de impuestos y los gastos financieros positivos registrados.

El estudiante decidió no aceptar automáticamente ese resultado. La cobertura fue recalculada con las cuentas originales y una fórmula financiera documentada, obteniendo:

* 2023: 8,53 veces.
* 2024: 9,01 veces.
* 2025: 9,10 veces.

También se rechazó calcular rotaciones de inventarios, cartera y proveedores porque no se encontraron todos los saldos detallados necesarios para reproducirlas de manera independiente.

## Decisiones tomadas por el estudiante

1. Utilizar únicamente información oficial de la SCVS para calcular las razones financieras.
2. Mantener todos los numeradores y denominadores dentro del mismo alcance empresarial.
3. No asignar los indicadores corporativos a AKÍ Latacunga Norte.
4. Recalcular la cobertura de intereses por la inconsistencia encontrada.
5. No inventar cuentas financieras faltantes.
6. Aceptar el apartado como diagnóstico corporativo preliminar.
7. Mantener pendiente la aprobación del sistema fotovoltaico hasta contar con el flujo de caja, VAN, TIR, cotizaciones y datos eléctricos del establecimiento.

## Resultado de la revisión humana

Se verificó que las fórmulas utilizadas fueran identificables y reproducibles. Se comprobó que los resultados se presentaran como indicadores de Corporación Favorita C.A. y no como estados financieros independientes de AKÍ Latacunga Norte.

La revisión concluyó que la compañía presentó una mejora gradual de liquidez y un endeudamiento estable, pero también una reducción del margen neto, ROA y ROE frente a 2023. Estos resultados permiten continuar el estudio, pero no demuestran todavía la viabilidad del proyecto fotovoltaico.

**Responsable de la revisión:** Josselyn Campaña
**Fecha de revisión:** 31 de julio de 2026
