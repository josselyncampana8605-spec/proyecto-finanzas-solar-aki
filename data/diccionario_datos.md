# Diccionario de datos

**Autor:** Coordinación de investigación

**Fecha de actualización:** 2026-07-31
**Objetivo:** Registrar las variables y documentos del estudio sin mezclar datos oficiales, observados, cotizados o supuestos.

| Campo | Descripción | Unidad | Tipo de información | Fuente o responsable | Estado de validación |
| --- | --- | --- | --- | --- | --- |
| informe_anual_cf_2025 | Documento institucional anual de Corporación Favorita. | — | oficial | https://www.corporacionfavorita.com/pdf/informe-anual-cf-2025.pdf | Fuente oficial verificada; extracción de información específica pendiente según necesidad. |
| local_aki_latacunga_norte | Identificación y dirección pública del local. | texto | oficial | https://www.aki.com.ec/locales-aki/ | Verificado: AKÍ Latacunga Norte; Av. Amazonas y Benjamín Terán. |
| directorio_companias | Registro o resultado de compañía que se consulte en el directorio. | texto / identificador | oficial | https://mercadodevalores.supercias.gob.ec/reportes/directorioCompanias.jsf | Documento localizado; pendiente de consulta manual y de registrar criterio y resultado. |
| tasa_interes_historica | Tasa efectiva vigente para el mes, segmento y producto que se seleccione. | porcentaje | oficial | https://contenido.bce.fin.ec/documentos/Estadisticas/SectorMonFin/TasasInteres/TasasHistorico.htm | Fuente oficial verificada; pendiente seleccionar y extraer serie con periodo. |
| ipc | Índice o variación del Índice de Precios al Consumidor. | índice o porcentaje | oficial | https://www.ecuadorencifras.gob.ec/indice-de-precios-al-consumidor/ | Fuente oficial verificada; pendiente extraer el periodo y definición aprobados. |
| pliego_tarifario_spee_2026 | Documento tarifario de 2026 que corresponda al suministro. | documento | oficial | https://arconel.gob.ec/servicio-publico-de-energia-electrica-spee/ | Fuente oficial verificada; pendiente localizar categoría aplicable. |
| tarifa_electrica_aplicable | Cargo o tarifa aplicable al suministro específico del local. | USD/kWh, USD/mes u otra unidad normativa | oficial / observado | Pliego ARCONEL y factura del local | Pendiente: requiere categoría tarifaria y contraste con factura. No se registra valor. |
| regulacion_arconel_005_24 | Marco normativo de generación distribuida para autoabastecimiento. | documento | oficial | https://arconel.gob.ec/wp-content/uploads/downloads/2024/10/Regulacion-005_24-Codificada-signed-1.pdf | Fuente oficial verificada; pendiente análisis técnico-jurídico de aplicación. |
| irradiacion_solar_sitio | Métrica solar para el punto geográfico del local. | según la métrica publicada | observado | https://globalsolaratlas.info/ | Herramienta localizada; pendiente consulta por coordenadas, fecha, unidad y exportación/captura. |
| factura_electrica_local | Factura e histórico de consumo y cargos del local. | documento; kWh/periodo y USD/periodo según factura | privado / observado | Administración del local, Corporación Favorita o distribuidora autorizada | Pendiente de entrega y autorización. |
| dimension_techo | Área disponible y restricciones físicas de la cubierta. | m² y descripción | privado / observado | Planos, administración del inmueble o levantamiento técnico autorizado | Pendiente de documento o medición verificable. |
| cotizacion_proveedor_fv | Oferta técnica y económica de suministro/instalación fotovoltaica. | USD y especificaciones | privado / cotizado | Proveedores | Pendiente de cotizaciones con alcance, fecha y vigencia. |
| oferta_financiamiento | Condiciones reales ofrecidas para financiar el proyecto. | USD, porcentaje, meses y cargos | privado / cotizado | Entidad financiera o proveedor | Pendiente de oferta documentada; no sustituir con tasas históricas BCE. |

## Reglas de uso

- Cada valor extraído debe registrar fuente, fecha de publicación o emisión, fecha de consulta, unidad y clasificación.
- Los campos privados pendientes no pueden completarse con estimaciones presentadas como hechos.
- Las fuentes oficiales verificadas no autorizan por sí solas cálculos financieros. En esta actualización no se calcularon VAN, TIR, WACC ni flujo de caja.

**Archivos de entrada:** las ocho direcciones oficiales revisadas.

**Transformación:** actualización del estado de cada campo conforme a la verificación de fuentes y la separación de datos privados.

**Supuestos:** ninguno.

**Limitación:** faltan los documentos privados y las extracciones específicas señaladas en la tabla.
**Archivo de salida relacionado:** `evidence/04_respuesta_corregida_fuentes.md`.
