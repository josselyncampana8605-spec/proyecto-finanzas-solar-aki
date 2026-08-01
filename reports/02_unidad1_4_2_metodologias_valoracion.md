# 4.2. Metodologías de valoración

## 1. Valor del dinero en el tiempo

El valor del dinero en el tiempo establece que una cantidad disponible en la actualidad no tiene el mismo valor que esa misma cantidad recibida en el futuro. Esta diferencia se explica por la posibilidad de invertir los recursos, la inflación, el riesgo y el costo de oportunidad. Por ello, los ingresos, ahorros, costos e inversiones del sistema fotovoltaico deben compararse en una misma fecha de valoración.

En este proyecto, la inversión inicial se realizaría al comienzo del horizonte de evaluación, mientras que los posibles ahorros por autogeneración de energía eléctrica se producirían durante varios años. No sería correcto comparar directamente la inversión inicial con la suma nominal de los ahorros futuros. Los flujos deberán actualizarse mediante una tasa de descuento consistente con el riesgo y la estructura de financiamiento del proyecto.

El horizonte de evaluación se determinará posteriormente con base en la vida útil documentada de los equipos, las garantías de los proveedores, el periodo de funcionamiento esperado y las necesidades de reposición. No se asigna todavía una vida útil específica porque no se dispone de cotizaciones técnicas verificadas.

## 2. Valor futuro

El valor futuro representa el monto que alcanzaría un valor presente después de un número determinado de periodos, considerando una tasa de crecimiento o rendimiento compuesto. Su expresión es:

$$
VF = VP(1+i)^n
$$

Donde:

* $VF$ es el valor futuro.
* $VP$ es el valor presente.
* $i$ es la tasa efectiva correspondiente a cada periodo.
* $n$ es el número de periodos.

En el proyecto, el valor futuro puede utilizarse para proyectar determinadas variables cuando exista una tasa documentada, como costos de operación, mantenimiento, reposición de equipos o tarifas energéticas. Cada variable deberá proyectarse mediante su propio supuesto y fuente, evitando aplicar automáticamente la inflación general a conceptos que tengan un comportamiento diferente.

La fórmula no será utilizada hasta seleccionar una tasa y un periodo verificables. Las tasas históricas del Banco Central del Ecuador y la inflación publicada por el Instituto Nacional de Estadística y Censos servirán como información de contexto, pero no serán asumidas automáticamente como tasas futuras.

## 3. Valor presente

El valor presente permite determinar cuánto vale actualmente una cantidad que se recibiría o pagaría en el futuro. Se calcula mediante:

$$
VP = \frac{VF}{(1+i)^n}
$$

Para una sucesión de flujos de caja, el valor presente total se obtiene descontando individualmente cada flujo:

$$
VP_{\text{flujos}} = \sum_{t=1}^{n}\frac{FC_t}{(1+k)^t}
$$

Donde:

* $FC_t$ es el flujo de caja correspondiente al periodo $t$.
* $k$ es la tasa de descuento aplicable.
* $t$ identifica el periodo en el que ocurre el flujo.
* $n$ es el horizonte total de evaluación.

El valor presente será fundamental para comparar la inversión inicial del sistema fotovoltaico con los beneficios económicos futuros atribuibles al proyecto. Solo se reconocerán como beneficios los ahorros o ingresos incrementales que puedan demostrarse mediante facturas, registros de consumo, tarifa aplicable, estimaciones técnicas de generación y cotizaciones verificables.

## 4. Tasas nominales y efectivas

Una tasa nominal es una tasa anual declarada que puede capitalizarse varias veces dentro del año. Por sí sola no muestra necesariamente el costo o rendimiento anual completo. Cuando la capitalización ocurre más de una vez al año, debe calcularse la tasa efectiva anual.

La conversión de una tasa nominal anual $j$, capitalizable $m$ veces al año, a una tasa efectiva anual se realizará mediante:

$$
TEA = \left(1+\frac{j}{m}\right)^m-1
$$

Donde:

* $TEA$ es la tasa efectiva anual.
* $j$ es la tasa nominal anual.
* $m$ es el número de capitalizaciones por año.

Esta conversión será necesaria para comparar correctamente las alternativas de financiamiento. No bastará con revisar la tasa nominal informada por una institución financiera. También deberán considerarse la frecuencia de pago, las comisiones, seguros, gastos, garantías y cualquier otro costo obligatorio.

Las tasas de interés publicadas por el Banco Central del Ecuador se utilizarán como referencias del entorno financiero. Sin embargo, no representan una oferta de crédito específica para Corporación Favorita ni para el establecimiento AKÍ Latacunga Norte. La selección del financiamiento deberá basarse en ofertas formales, vigentes y comparables.

## 5. Tasa de descuento

La tasa de descuento representa el rendimiento mínimo requerido por quienes aportan recursos y el riesgo asociado con los flujos esperados. No es necesariamente igual a la tasa de un crédito bancario.

Para evaluar el proyecto mediante flujo de caja libre para la empresa se utilizará posteriormente el Costo Promedio Ponderado de Capital o WACC:

$$
WACC = w_d k_d(1-T)+w_e k_e
$$

Donde:

* $w_d$ es la proporción de deuda.
* $k_d$ es el costo efectivo de la deuda antes de impuestos.
* $T$ es la tasa impositiva aplicable.
* $w_e$ es la proporción de patrimonio.
* $k_e$ es el costo del patrimonio.

El WACC se calculará en el apartado correspondiente cuando estén disponibles la estructura de financiamiento, el costo efectivo de las alternativas de deuda, la tasa impositiva aplicable y la información necesaria para estimar el costo del patrimonio. No se utilizará una tasa arbitraria.

Los flujos y la tasa de descuento deberán mantener coherencia:

* Los flujos nominales, que incorporan inflación, se descontarán con una tasa nominal.
* Los flujos reales, expresados en precios constantes, se descontarán con una tasa real.
* Los flujos en dólares se descontarán con una tasa expresada en la misma moneda.
* El periodo de la tasa deberá coincidir con la periodicidad de los flujos.

Cuando resulte necesario convertir una tasa nominal en una tasa real se aplicará:

$$
k_{\text{real}}=\frac{1+k_{\text{nominal}}}{1+\pi}-1
$$

Donde $\pi$ representa la inflación esperada sustentada en una fuente y un supuesto explícito.

## 6. Método de valoración seleccionado

El método principal será el **flujo de caja libre incremental descontado**, porque el objetivo es determinar si la instalación fotovoltaica generaría valor adicional frente a la alternativa de mantener la operación sin el proyecto.

Se compararán dos situaciones:

1. Escenario sin proyecto: funcionamiento del establecimiento sin la inversión fotovoltaica.
2. Escenario con proyecto: funcionamiento del establecimiento incorporando la inversión, los costos y los beneficios atribuibles al sistema.

El flujo incremental se determinará mediante la diferencia:

$$
FC_{\text{incremental},t}
=========================

## FC_{\text{con proyecto},t}

FC_{\text{sin proyecto},t}
$$

Posteriormente, el Valor Actual Neto se calculará mediante:

$$
VAN=-I_0+\sum_{t=1}^{n}\frac{FCL_t}{(1+WACC)^t}
$$

Donde:

* $I_0$ es la inversión inicial.
* $FCL_t$ es el flujo de caja libre incremental del periodo.
* $WACC$ es la tasa de descuento.
* $n$ es el horizonte de evaluación.

La regla de decisión será:

* Si el VAN es mayor que cero, el proyecto generaría valor bajo los supuestos analizados.
* Si el VAN es igual a cero, el proyecto cubriría exactamente el rendimiento requerido.
* Si el VAN es menor que cero, el proyecto destruiría valor bajo esos supuestos y debería rechazarse o modificarse.

En el flujo de caja libre del proyecto no se incorporarán el desembolso del préstamo, las cuotas ni los intereses, porque el efecto de la deuda estará representado en el WACC. Las alternativas de financiamiento se compararán por separado para evitar contar dos veces su efecto.

Como método de contraste se propone el **valor contable ajustado del activo fotovoltaico**, considerando el costo documentado de adquisición e instalación, la depreciación acumulada, las reposiciones y el valor residual técnicamente sustentado. Este método no sustituirá al flujo descontado, porque no incorpora de manera completa la capacidad del proyecto para generar ahorros futuros, pero permitirá contrastar la valoración y detectar resultados poco razonables.

No se seleccionan los múltiplos comparables como método principal debido a que todavía no se dispone de proyectos suficientemente similares en tamaño, ubicación, consumo, tarifa, tecnología y condiciones operativas.

## 7. Inductores de valor

Los principales inductores que pueden aumentar o reducir el valor del proyecto son:

| Inductor                              | Efecto esperado                                                                 | Evidencia requerida                                 |
| ------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------- |
| Inversión inicial                     | Una inversión mayor reduce el VAN, si los demás factores permanecen constantes. | Cotizaciones comparables y alcance técnico.         |
| Generación eléctrica                  | Una mayor generación utilizable puede aumentar el ahorro.                       | Estudio técnico, irradiación y diseño del sistema.  |
| Porcentaje de autoconsumo             | Determina cuánta energía generada puede sustituir compras a la red.             | Perfil horario de consumo y simulación técnica.     |
| Tarifa eléctrica evitada              | Una tarifa aplicable mayor puede incrementar el ahorro económico.               | Facturas y categoría tarifaria confirmada.          |
| Degradación de los paneles            | Reduce gradualmente la generación futura.                                       | Ficha técnica y garantía del fabricante.            |
| Costos de operación y mantenimiento   | Costos mayores reducen el flujo de caja libre.                                  | Contratos, cotizaciones y plan de mantenimiento.    |
| Reposición de equipos                 | La sustitución de inversores u otros componentes genera egresos futuros.        | Vida útil, garantía y cotización del proveedor.     |
| Tratamiento tributario y depreciación | Puede modificar impuestos y flujos, cuando corresponda.                         | Normativa tributaria y política contable aplicable. |
| Valor residual                        | Incrementa el flujo del último periodo si puede demostrarse.                    | Estimación técnica y comercial documentada.         |
| Horizonte de evaluación               | Afecta la cantidad de flujos reconocidos.                                       | Vida útil y garantías documentadas.                 |
| WACC                                  | Una tasa de descuento mayor reduce el valor presente de los flujos futuros.     | Estructura de capital y costos verificables.        |
| Riesgo técnico y regulatorio          | Puede afectar costos, plazos, generación y continuidad del proyecto.            | Regulación, permisos, inspección y contratos.       |

La generación anual no se estimará únicamente con información regional. Deberán identificarse las coordenadas del establecimiento, consultar una fuente técnica reconocida como Global Solar Atlas y contrastar el resultado con una simulación o estudio elaborado por el proveedor.

## 8. Datos necesarios para aplicar la metodología

Antes de ejecutar la valoración deberán obtenerse y validarse:

1. Facturas eléctricas o historial autorizado de consumo del local.
2. Categoría tarifaria y cargos efectivamente aplicables.
3. Perfil mensual y, de ser posible, horario de consumo.
4. Dimensiones, orientación, inclinación, sombras y condición estructural del techo.
5. Estimación técnica de generación y pérdidas del sistema.
6. Al menos tres cotizaciones comparables.
7. Costos de operación, mantenimiento, seguros y reposiciones.
8. Vida útil, degradación y garantías de los equipos.
9. Tratamiento contable, tributario y depreciación aplicable.
10. Ofertas de financiamiento con tasa, plazo, cuotas, comisiones y garantías.
11. Estructura de capital y variables necesarias para calcular el WACC.
12. Valor residual técnicamente sustentado.

Mientras estos datos permanezcan pendientes, las fórmulas anteriores constituyen la metodología que se aplicará posteriormente y no resultados financieros definitivos.

## Referencias

Agencia de Regulación y Control de Electricidad. (2024). *Regulación Nro. ARCONEL-005/24 (codificada): Marco normativo de la generación distribuida para el autoabastecimiento de consumidores regulados de energía eléctrica*. https://arconel.gob.ec/wp-content/uploads/downloads/2024/10/Regulacion-005_24-Codificada-signed-1.pdf

Banco Central del Ecuador. (s. f.). *Tasas de interés efectivas vigentes: Datos históricos*. Recuperado el 31 de julio de 2026, de https://contenido.bce.fin.ec/documentos/Estadisticas/SectorMonFin/TasasInteres/TasasHistorico.htm

Dahlquist, J., & Knight, R. (2022). *Principles of finance*. OpenStax, Rice University. https://openstax.org/details/books/principles-finance

Instituto Nacional de Estadística y Censos. (s. f.). *Índice de precios al consumidor*. Recuperado el 31 de julio de 2026, de https://www.ecuadorencifras.gob.ec/indice-de-precios-al-consumidor/

World Bank Group, Energy Sector Management Assistance Program, & Solargis. (s. f.). *Global Solar Atlas*. Recuperado el 31 de julio de 2026, de https://globalsolaratlas.info/
