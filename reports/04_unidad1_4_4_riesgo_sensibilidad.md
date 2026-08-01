# 4.4. Medidas de riesgo

## 1. Enfoque del análisis de riesgo

El análisis de riesgo evaluará la posibilidad de que los resultados reales de la instalación fotovoltaica sean diferentes de los proyectados. Un proyecto puede presentar un VAN positivo en el escenario base y, al mismo tiempo, tener una probabilidad importante de pérdida si la generación disminuye, la inversión aumenta o el costo de financiamiento resulta mayor.

Se aplicarán cuatro herramientas:

1. Identificación y clasificación de riesgos.
2. Análisis de sensibilidad.
3. Escenarios optimista, base y pesimista.
4. Matriz de probabilidad e impacto.

Adicionalmente, cuando se incorporen los datos verificables, se realizará una simulación Monte Carlo mediante TypeScript.

## 2. Riesgos económicos

Los riesgos económicos comprenden cambios externos que pueden afectar los ahorros y costos del proyecto:

* Variación de la tarifa eléctrica aplicable al establecimiento.
* Inflación superior o inferior a la proyectada.
* Incremento de precios de equipos, repuestos y mantenimiento.
* Cambios en costos de importación.
* Variaciones en la demanda y actividad comercial del establecimiento.
* Cambios regulatorios relacionados con generación distribuida.
* Diferencias entre la inflación general y la evolución de costos técnicos.

El pliego tarifario de ARCONEL permite verificar las tarifas vigentes, pero no garantiza que permanecerán constantes durante todo el horizonte. Por ello, el modelo deberá permitir modificar la tarifa evitada.

## 3. Riesgos financieros

Los principales riesgos financieros son:

* Aumento de la tasa de interés del crédito.
* Diferencias entre la tasa nominal y el costo efectivo.
* Comisiones, seguros o gastos no incluidos inicialmente.
* Plazo de financiamiento menor que la vida económica del activo.
* Reducción de la capacidad de pago.
* Mayor participación de deuda y aumento del riesgo financiero.
* WACC superior al estimado.
* Imposibilidad de utilizar completamente los beneficios tributarios.
* Falta de liquidez para reposiciones o mantenimiento.

Las alternativas de financiamiento deberán compararse utilizando ofertas vigentes. Una tasa histórica del Banco Central del Ecuador no sustituirá una propuesta bancaria.

## 4. Riesgos operativos y técnicos

Se identifican los siguientes riesgos:

* Generación real inferior a la simulada.
* Sombras, suciedad o condiciones climáticas no consideradas.
* Degradación superior a la garantía.
* Falla o reposición anticipada de inversores.
* Daño de módulos, cableado o protecciones.
* Interrupciones prolongadas por mantenimiento.
* Errores de instalación.
* Daño estructural o filtraciones en el techo.
* Indisponibilidad del sistema de monitoreo.
* Incendio, granizo, viento fuerte, actividad volcánica u otros eventos naturales.
* Pérdidas por temperatura, orientación o inclinación inadecuadas.
* Diferencias entre el perfil de generación y el consumo del local.

El Departamento de Energía de Estados Unidos señala que el desempeño fotovoltaico depende del recurso solar, la edad de los módulos, la degradación, el clima y la disponibilidad del sistema. El mantenimiento preventivo y el monitoreo permiten detectar desviaciones y reducir tiempos de inactividad.

## 5. Riesgos regulatorios y administrativos

Los riesgos regulatorios y administrativos incluyen:

* Incumplimiento de requisitos de generación distribuida.
* Retrasos en permisos o interconexión.
* Clasificación incorrecta del consumidor.
* Falta de autorización para utilizar el techo.
* Cambios en el tratamiento de excedentes.
* Ausencia de responsables de supervisión.
* Pérdida o alteración de documentos.
* Uso de facturas o cotizaciones vencidas.
* Dependencia excesiva de un solo proveedor.
* Errores producidos por inteligencia artificial no detectados por el estudiante.

La regulación ARCONEL-005/24 se utilizará para verificar el procedimiento aplicable. La situación real del suministro deberá confirmarse con la factura y la empresa distribuidora.

## 6. Análisis de sensibilidad

El análisis de sensibilidad medirá el efecto de modificar una variable mientras las demás permanecen constantes.

Las variables evaluadas serán:

* Inversión inicial.
* Generación eléctrica.
* Porcentaje de autoconsumo.
* Tarifa eléctrica evitada.
* Costos de operación y mantenimiento.
* Degradación.
* Reposición de inversores.
* Horizonte.
* Valor residual.
* WACC.

Para cada cambio se recalcularán:

* VAN.
* TIR.
* Relación beneficio-costo.
* Periodo de recuperación.
* Periodo de recuperación descontado.

Como prueba exploratoria, antes de obtener series históricas completas, se podrán aplicar las siguientes variaciones simuladas:

| Variable                | Variaciones provisionales                 |
| ----------------------- | ----------------------------------------- |
| Inversión inicial       | -10 %, -5 %, base, +5 %, +10 %            |
| Generación eléctrica    | -10 %, -5 %, base, +5 %, +10 %            |
| Tarifa evitada          | -10 %, -5 %, base, +5 %, +10 %            |
| Costos de mantenimiento | -20 %, -10 %, base, +10 %, +20 %          |
| WACC                    | -2, -1, base, +1 y +2 puntos porcentuales |
| Autoconsumo             | -10 %, -5 %, base, +5 %, +10 %            |

Estos porcentajes no representan datos observados del local. Son variaciones de estrés provisional que deberán sustituirse o validarse mediante cotizaciones, facturas, garantías y dispersión histórica.

Los resultados se presentarán mediante una tabla y un gráfico de tornado que ordene las variables según su impacto en el VAN.

## 7. Escenarios

### Escenario base

El escenario base utilizará:

* Inversión resultante de cotizaciones comparables.
* Consumo histórico autorizado.
* Tarifa confirmada en la factura.
* Generación estimada por Global Solar Atlas y proveedor.
* Degradación indicada por el fabricante.
* Costos de mantenimiento cotizados.
* WACC calculado con la estructura de financiamiento seleccionada.
* Valor residual cero mientras no exista evidencia diferente.

### Escenario optimista

El escenario optimista podrá considerar:

* Inversión 5 % menor que el escenario base.
* Generación 10 % superior.
* Tarifa evitada 5 % superior.
* Costos de mantenimiento 10 % inferiores.
* WACC un punto porcentual menor.
* Menor tiempo de indisponibilidad.

### Escenario pesimista

El escenario pesimista podrá considerar:

* Inversión 10 % superior.
* Generación 10 % inferior.
* Tarifa evitada 5 % inferior.
* Costos de mantenimiento 20 % superiores.
* WACC dos puntos porcentuales mayor.
* Reposición anticipada del inversor.
* Retrasos regulatorios o de instalación.

Los porcentajes optimistas y pesimistas son supuestos simulados provisionales. El informe final los justificará con datos y documentos.

La tabla de resultados será:

| Indicador         | Optimista |      Base | Pesimista |
| ----------------- | --------: | --------: | --------: |
| Inversión inicial | Pendiente | Pendiente | Pendiente |
| Generación anual  | Pendiente | Pendiente | Pendiente |
| WACC              | Pendiente | Pendiente | Pendiente |
| VAN               | Pendiente | Pendiente | Pendiente |
| TIR               | Pendiente | Pendiente | Pendiente |
| Beneficio-costo   | Pendiente | Pendiente | Pendiente |
| Recuperación      | Pendiente | Pendiente | Pendiente |
| Decisión          | Pendiente | Pendiente | Pendiente |

## 8. Punto de equilibrio

El punto de equilibrio operativo indicará la cantidad mínima de energía autoconsumida necesaria para cubrir los costos operativos:

$$
E_{PE}
======

\frac{Costos\ fijos}
{Tarifa\ evitada-Costo\ variable\ por\ kWh}
$$

También se calculará un punto de equilibrio financiero mediante la búsqueda del nivel de generación, tarifa o inversión que haga que el VAN sea igual a cero:

$$
VAN = 0
$$

Se determinarán:

* Generación anual mínima.
* Tarifa evitada mínima.
* Porcentaje de autoconsumo mínimo.
* Inversión máxima aceptable.
* WACC máximo soportable.

Estos resultados permitirán establecer límites concretos para aceptar, modificar o rechazar la inversión.

## 9. Efecto de los cambios en las variables

### Precio de la energía

Un aumento de la tarifa evitada incrementaría el ahorro y el VAN. Una reducción tendría el efecto contrario. Solo se reconocerá el componente de la tarifa que realmente pueda evitarse.

### Ventas del establecimiento

El proyecto no obtiene directamente ingresos de las ventas del supermercado. Sin embargo, cambios en las ventas pueden modificar horarios, refrigeración, iluminación y consumo eléctrico. Ese efecto solo se incorporará si se demuestra una relación entre actividad comercial y demanda energética.

### Generación y autoconsumo

Una reducción de generación o autoconsumo disminuye los beneficios. El efecto es especialmente importante si una parte significativa de la generación no coincide con el consumo del local.

### Costos

Un aumento de inversión, mantenimiento, seguro o reposiciones reduce el VAN y puede extender la recuperación.

### Tasa de descuento

Un WACC mayor reduce el valor presente de los flujos futuros. Los proyectos con beneficios alejados en el tiempo son especialmente sensibles a esta variable.

## 10. Matriz de riesgos

La probabilidad y el impacto se calificarán de 1 a 5:

* 1: muy bajo.
* 2: bajo.
* 3: medio.
* 4: alto.
* 5: muy alto.

$$
Nivel\ de\ riesgo = Probabilidad \times Impacto
$$

Los niveles serán:

* 1 a 4: bajo.
* 5 a 9: medio.
* 10 a 16: alto.
* 17 a 25: crítico.

La valoración inicial es provisional:

| Riesgo                            | Tipo        | Prob. | Impacto |      Nivel | Respuesta propuesta                              |
| --------------------------------- | ----------- | ----: | ------: | ---------: | ------------------------------------------------ |
| Falta de facturas y consumo real  | Datos       |     5 |       5 | 25 crítico | Solicitar autorización e historial.              |
| Condición inadecuada del techo    | Operativo   |     3 |       5 |    15 alto | Realizar estudio estructural.                    |
| Inversión superior a la prevista  | Financiero  |     3 |       4 |    12 alto | Comparar tres cotizaciones y fijar alcance.      |
| Generación inferior a la estimada | Técnico     |     3 |       4 |    12 alto | Contrastar Atlas, proveedor y garantías.         |
| Autoconsumo inferior              | Operativo   |     3 |       4 |    12 alto | Obtener perfil horario de consumo.               |
| Aumento del costo financiero      | Financiero  |     3 |       4 |    12 alto | Comparar tasa efectiva y negociar tasa fija.     |
| Retrasos regulatorios             | Regulatorio |     3 |       4 |    12 alto | Verificar requisitos antes de contratar.         |
| Falla anticipada del inversor     | Técnico     |     3 |       3 |    9 medio | Garantía, mantenimiento y reserva de reposición. |
| Cambio de tarifa eléctrica        | Económico   |     2 |       4 |    8 medio | Sensibilidad y actualización anual.              |
| Daño por clima o evento natural   | Operativo   |     2 |       5 |    10 alto | Diseño estructural, seguro y plan de emergencia. |
| Error de cálculo o fuente         | Auditoría   |     3 |       5 |    15 alto | Pruebas automáticas y revisión humana.           |
| Dependencia de un proveedor       | Gestión     |     3 |       3 |    9 medio | Comparar ofertas y evaluar solvencia.            |

La matriz deberá actualizarse cuando se obtengan los estudios, facturas y cotizaciones.

## 11. Simulación Monte Carlo

La simulación Monte Carlo se realizará mediante TypeScript. Se propone ejecutar 10.000 iteraciones con una semilla documentada para que el resultado sea reproducible.

Las variables aleatorias podrán incluir:

* Inversión inicial.
* Generación.
* Autoconsumo.
* Tarifa evitada.
* Mantenimiento.
* Degradación.
* WACC.

Cuando no exista una distribución estadística suficiente se podrá utilizar una distribución triangular definida por un valor mínimo, probable y máximo, todos documentados.

La simulación presentará:

* Probabilidad de que el VAN sea positivo.
* VAN promedio.
* Mediana del VAN.
* Percentiles 5, 50 y 95.
* Probabilidad de que la TIR supere el WACC.
* Histograma de resultados.
* Variables con mayor influencia.

No se ejecutará la simulación hasta disponer de un escenario base cuantificado y límites justificables.

## 12. Criterio de decisión

La inversión podrá recomendarse cuando:

* El VAN base sea positivo.
* La TIR supere el WACC.
* La relación beneficio-costo sea mayor que uno.
* La recuperación sea compatible con el horizonte.
* El escenario pesimista no produzca una pérdida inaceptable.
* La probabilidad de VAN positivo sea suficiente.
* Los riesgos críticos tengan medidas de control.

Si no se cumplen estas condiciones, la recomendación será rechazar, redimensionar, renegociar o posponer la inversión.

## Referencias

Agencia de Regulación y Control de Electricidad. (2024). *Regulación Nro. ARCONEL-005/24 (codificada)*. https://arconel.gob.ec/wp-content/uploads/downloads/2024/10/Regulacion-005_24-Codificada-signed-1.pdf

Dahlquist, J., & Knight, R. (2022). *Principles of finance*. OpenStax, Rice University. https://openstax.org/details/books/principles-finance

U.S. Department of Energy. (2026). *Life cycle of photovoltaic systems: Operate and maintain an existing photovoltaic system*. https://www.energy.gov/cmei/femp/life-cycle-photovoltaic-systems-operate-and-maintain-existing-photovoltaic-system

U.S. Department of Energy. (s. f.). *Optimizing solar photovoltaic performance for longevity*. Recuperado el 31 de julio de 2026, de https://www.energy.gov/cmei/femp/optimizing-solar-photovoltaic-performance-longevity

Walker, H. A., et al. (2018). *Best practices for operation and maintenance of photovoltaic and energy storage systems* (3.ª ed.). National Renewable Energy Laboratory. https://www.osti.gov/biblio/1489002
