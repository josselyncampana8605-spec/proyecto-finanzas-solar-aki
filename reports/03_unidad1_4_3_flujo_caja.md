# 4.3. Flujo de caja

## 1. Enfoque del flujo de caja

La evaluación financiera de la instalación fotovoltaica en AKÍ Latacunga Norte se realizará mediante un flujo de caja libre incremental. Este enfoque reconocerá únicamente los ingresos, ahorros, costos, inversiones e impuestos que cambien como consecuencia de ejecutar el proyecto.

Se compararán dos situaciones:

* **Escenario sin proyecto:** el establecimiento continúa comprando toda la energía requerida a la empresa distribuidora.
* **Escenario con proyecto:** una parte del consumo eléctrico es cubierta por el sistema fotovoltaico y se incorporan la inversión, mantenimiento, reposiciones y demás efectos atribuibles al proyecto.

El flujo incremental de cada periodo se determinará mediante:

$$
FC_{\text{incremental},t}
=========================

## FC_{\text{con proyecto},t}

FC_{\text{sin proyecto},t}
$$

No se incluirán como beneficios las ventas, utilidades o flujos consolidados de Corporación Favorita, porque no corresponden exclusivamente al establecimiento ni son generados por la inversión analizada.

## 2. Inversión inicial

La inversión inicial deberá representar todos los desembolsos necesarios para que el sistema se encuentre instalado, conectado y en condiciones de funcionamiento:

$$
I_0 =
C_{\text{equipos}}
+
C_{\text{instalación}}
+
C_{\text{ingeniería}}
+
C_{\text{permisos}}
+
C_{\text{adecuaciones}}
+
CT_0
$$

La inversión podrá incluir:

* Paneles fotovoltaicos.
* Inversores.
* Estructuras de soporte.
* Cableado, protecciones y tableros.
* Sistema de medición y monitoreo.
* Transporte e instalación.
* Estudios eléctricos y estructurales.
* Trámites y permisos.
* Adecuaciones del techo y de la conexión.
* Seguros o garantías iniciales.
* Capital de trabajo incremental, cuando corresponda.

El valor definitivo se obtendrá mediante al menos tres cotizaciones comparables. Cada cotización deberá identificar proveedor, fecha, vigencia, potencia instalada, marcas, garantías, impuestos, alcance y condiciones de pago.

No se incorporará un valor de inversión hasta disponer de las cotizaciones. Cualquier valor utilizado antes de obtenerlas deberá etiquetarse expresamente como “supuesto simulado provisional”.

## 3. Ingresos o ahorros del proyecto

El proyecto no generaría necesariamente una venta nueva. Su beneficio principal sería el costo de energía eléctrica que el establecimiento dejaría de comprar a la red.

El ahorro bruto anual se calculará mediante:

$$
Ahorro_t =
E_{\text{autoconsumida},t}
\times
Tarifa_{\text{evitada},t}
$$

Donde:

* $E_{\text{autoconsumida},t}$ es la energía fotovoltaica utilizada directamente por el local.
* $Tarifa_{\text{evitada},t}$ es el costo variable efectivamente evitado por cada kWh.

La energía autoconsumida se determinará mediante:

$$
E_{\text{autoconsumida},t}
==========================

E_{\text{generada},t}
\times
PA_t
$$

Donde $PA_t$ es el porcentaje de generación que coincide con el consumo del establecimiento.

No se considerará que toda la energía generada produce el mismo ahorro. Primero deberá compararse el perfil horario de generación con el perfil de consumo y revisarse el tratamiento regulatorio de eventuales excedentes conforme a la Regulación ARCONEL-005/24.

La tarifa evitada se obtendrá de la factura eléctrica real y de la categoría tarifaria confirmada. El pliego tarifario de 2026 publicado por ARCONEL será utilizado para verificarla, pero no se seleccionará una categoría sin la factura del establecimiento.

## 4. Generación eléctrica proyectada

La generación del primer año deberá sustentarse mediante las coordenadas verificadas del establecimiento, los datos de irradiación, la potencia instalada y una simulación técnica.

La proyección se expresará como:

$$
E_{\text{generada},t}
=====================

E_{\text{generada},1}
(1-d)^{t-1}
$$

Donde:

* $E_{\text{generada},1}$ es la generación estimada del primer año.
* $d$ es la degradación anual documentada.
* $t$ es el año evaluado.

Global Solar Atlas se utilizará como fuente preliminar de irradiación y potencial fotovoltaico. Su resultado deberá descargarse y conservarse en `data/raw/`, indicando coordenadas, fecha de consulta, inclinación, orientación, pérdidas y configuración seleccionada.

La información del Atlas no reemplazará el estudio técnico del proveedor. El Departamento de Energía de Estados Unidos señala que el desempeño depende de la disponibilidad solar del lugar, el clima, la edad de los módulos y su degradación. Como referencia técnica para una prueba de sensibilidad puede utilizarse una degradación de 0,5 % anual; no obstante, el escenario definitivo empleará la garantía del equipo cotizado.

## 5. Costos fijos y variables

Los costos de operación deberán clasificarse de la siguiente manera:

### Costos fijos

* Contrato anual de mantenimiento preventivo.
* Monitoreo.
* Seguro.
* Inspecciones técnicas.
* Costos administrativos incrementales demostrables.

### Costos variables

* Limpieza relacionada con la frecuencia o condiciones del sitio.
* Reparaciones.
* Repuestos.
* Costos asociados con la energía generada, cuando existan.
* Disposición o reciclaje de componentes.

Los costos solo se incluirán cuando sean incrementales. Los gastos que el establecimiento ya tendría aunque no se ejecutara la inversión no deberán cargarse al proyecto.

Las buenas prácticas del National Renewable Energy Laboratory indican que los costos de operación y mantenimiento dependen del tipo de sistema, las condiciones del sitio y el alcance del contrato. Por ello, no se adoptará automáticamente un porcentaje general; se solicitará una cotización de mantenimiento.

## 6. Capital de trabajo

El capital de trabajo incremental se calculará mediante:

$$
CT_t =
Cuentas\ por\ cobrar_t
+
Inventarios_t
-------------

Cuentas\ por\ pagar_t
$$

La variación utilizada en el flujo será:

$$
\Delta CT_t = CT_t-CT_{t-1}
$$

Debido a que el proyecto busca reducir un costo y no crear una nueva actividad comercial, se plantea provisionalmente un capital de trabajo incremental igual a cero. Este supuesto deberá revisarse si los contratos requieren anticipos para mantenimiento, inventario de repuestos, depósitos, seguros prepagados u otros recursos operativos adicionales.

Al finalizar el horizonte de evaluación deberá recuperarse el capital de trabajo que efectivamente sea recuperable.

## 7. Depreciación

La depreciación no constituye una salida de efectivo, pero puede modificar el impuesto y, por tanto, el flujo de caja.

Si corresponde aplicar el método lineal:

$$
Dep_t =
\frac{Base_{\text{depreciable}}-Valor_{\text{residual}}}
{Vida\ útil}
$$

El Servicio de Rentas Internas establece que el costo histórico de una propiedad, planta y equipo puede reconocerse mediante depreciación utilizando una vida útil apropiada de acuerdo con la técnica contable.

La vida útil y el tratamiento fiscal del sistema deberán confirmarse mediante:

* Facturas y documentos de adquisición.
* Política contable de la empresa.
* Garantías y fichas técnicas.
* Normativa tributaria vigente.
* Revisión de un responsable contable autorizado.

No se establecerá todavía una tasa de depreciación porque no se dispone de la clasificación contable aprobada para el activo.

## 8. Impuestos

El impuesto del proyecto se calculará sobre el efecto incremental que produzca en la base imponible de la empresa. La expresión metodológica será:

$$
EBIT_t =
Ahorro_t
--------

## Costos_t

Dep_t
$$

$$
Impuesto_t =
EBIT_t \times T
$$

La aplicación de esta expresión dependerá de que la empresa pueda utilizar los efectos tributarios incrementales. La tasa $T$ será confirmada con la normativa vigente y la información tributaria correspondiente a Corporación Favorita.

No se utilizará automáticamente una tarifa general sin revisar posibles diferencias, incentivos, gastos deducibles, participación laboral o conciliación tributaria.

## 9. Valor residual

El valor residual corresponderá al monto recuperable de los equipos o componentes al final del horizonte de evaluación, descontando los costos de retiro, transporte, disposición o reciclaje.

$$
VR_n =
Valor_{\text{recuperable}}
--------------------------

Costos_{\text{retiro}}
$$

Mientras no exista evidencia técnica o comercial, el escenario base utilizará un valor residual igual a cero como supuesto conservador. Si posteriormente se incorpora un valor distinto, deberá respaldarse mediante cotización, política contable o estimación técnica.

## 10. Flujo de caja libre

El flujo de caja libre del proyecto se calculará mediante:

$$
FCL_t =
EBIT_t(1-T)
+
Dep_t
-----

## CAPEX_t

\Delta CT_t
+
VR_t
$$

En el año cero:

$$
FCL_0 = -I_0
$$

La estructura reproducible será:

| Concepto                        |         Año 0 |         Año 1 |         Año 2 | ... |         Año n |
| ------------------------------- | ------------: | ------------: | ------------: | --: | ------------: |
| Generación fotovoltaica         |             0 |     Pendiente |     Pendiente | ... |     Pendiente |
| Energía autoconsumida           |             0 |     Pendiente |     Pendiente | ... |     Pendiente |
| Ahorro eléctrico                |             0 |     Pendiente |     Pendiente | ... |     Pendiente |
| Costos operativos               |             0 |     Pendiente |     Pendiente | ... |     Pendiente |
| Depreciación                    |             0 |     Pendiente |     Pendiente | ... |     Pendiente |
| EBIT incremental                |             0 |     Pendiente |     Pendiente | ... |     Pendiente |
| Impuesto incremental            |             0 |     Pendiente |     Pendiente | ... |     Pendiente |
| Depreciación sumada nuevamente  |             0 |     Pendiente |     Pendiente | ... |     Pendiente |
| Inversión y reposiciones        |     Pendiente |             0 |             0 | ... |     Pendiente |
| Variación de capital de trabajo |     Pendiente |     Pendiente |     Pendiente | ... |     Pendiente |
| Valor residual                  |             0 |             0 |             0 | ... |     Pendiente |
| **Flujo de caja libre**         | **Pendiente** | **Pendiente** | **Pendiente** | ... | **Pendiente** |

Las celdas pendientes serán calculadas mediante TypeScript a partir de los datos documentados. No se utilizará Python.

## 11. Horizonte de evaluación

El horizonte deberá relacionarse con la vida útil económica del sistema, las garantías, las reposiciones y el plazo de financiamiento.

No se fija todavía un horizonte definitivo. Se revisarán las cotizaciones y garantías para seleccionar un periodo técnicamente consistente. Si se utiliza provisionalmente un horizonte de 20 o 25 años, se identificará expresamente como supuesto simulado y se analizará su efecto mediante sensibilidad.

## 12. Escenario base y supuestos de crecimiento

Hasta disponer de datos específicos, el escenario base aplicará los siguientes criterios conservadores:

| Variable           | Criterio provisional                                                                                |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| Consumo eléctrico  | Sin crecimiento real hasta revisar el historial de facturas.                                        |
| Tarifa evitada     | Valor de la factura y categoría confirmada; sin crecimiento real en el escenario base.              |
| Generación inicial | Resultado de Global Solar Atlas contrastado con la simulación del proveedor.                        |
| Degradación        | Garantía del fabricante; 0,5 % solo como referencia provisional de sensibilidad.                    |
| Mantenimiento      | Cotización formal, sin porcentaje arbitrario.                                                       |
| Capital de trabajo | Cero, sujeto a revisión contractual.                                                                |
| Valor residual     | Cero como supuesto conservador hasta contar con evidencia.                                          |
| Inflación          | No se mezclará con flujos reales; si se proyectan flujos nominales se documentará la tasa empleada. |
| Impuesto           | Tasa aplicable confirmada mediante normativa y revisión contable.                                   |
| Horizonte          | Vida útil y garantías documentadas.                                                                 |

Estos criterios no son resultados reales del establecimiento. Son reglas metodológicas provisionales que permiten construir el modelo sin presentar información simulada como observada.

## 13. Datos pendientes y responsables

| Dato                       | Fuente requerida                | Estado    |
| -------------------------- | ------------------------------- | --------- |
| Consumo mensual y tarifa   | Facturas autorizadas del local  | Pendiente |
| Perfil horario de consumo  | Medidor o empresa distribuidora | Pendiente |
| Área y condición del techo | Levantamiento técnico           | Pendiente |
| Inversión inicial          | Tres cotizaciones               | Pendiente |
| Producción fotovoltaica    | Global Solar Atlas y proveedor  | Pendiente |
| Mantenimiento              | Cotización o contrato           | Pendiente |
| Depreciación e impuestos   | Área contable y normativa SRI   | Pendiente |
| Financiamiento             | Ofertas bancarias formales      | Pendiente |
| Valor residual             | Proveedor o tasación técnica    | Pendiente |

El flujo de caja deberá actualizarse cuando se obtengan estos documentos. Hasta entonces, no corresponde publicar valores de VAN, TIR, beneficio-costo o recuperación como resultados definitivos.

## Referencias

Agencia de Regulación y Control de Electricidad. (2024). *Regulación Nro. ARCONEL-005/24 (codificada): Marco normativo de la generación distribuida para el autoabastecimiento de consumidores regulados de energía eléctrica*. https://arconel.gob.ec/wp-content/uploads/downloads/2024/10/Regulacion-005_24-Codificada-signed-1.pdf

Agencia de Regulación y Control de Electricidad. (2025). *Resolución Nro. ARCONEL-029/25 y Pliego Tarifario del Servicio Público de Energía Eléctrica para 2026*. https://arconel.gob.ec/wp-content/uploads/downloads/2026/01/Resolucion-ARCONEL-029-25_Pliegos-Tarifarios-SPEE-SAPG-SCVE-2026.pdf

Dahlquist, J., & Knight, R. (2022). *Principles of finance*. OpenStax, Rice University. https://openstax.org/details/books/principles-finance

Energy Sector Management Assistance Program. (2019). *Global Solar Atlas 2.0: Technical report*. World Bank. https://documents1.worldbank.org/curated/en/529431592893043403/pdf/Global-Solar-Atlas-2-0-Technical-Report.pdf

Servicio de Rentas Internas. (s. f.). *Guía del contribuyente: Formulario 101*. https://www.sri.gob.ec/o/sri-portlet-biblioteca-alfresco-internet/descargar/b1fcb20c-44d4-4bd1-b968-2b042b3c2443/GUIA%2BDEL%2BCONTRIBUYENTE%2BFORMULARIO%2B101.pdf

Walker, H. A., et al. (2018). *Best practices for operation and maintenance of photovoltaic and energy storage systems* (3.ª ed.). National Renewable Energy Laboratory. https://www.osti.gov/biblio/1489002
