# Fuentes y estado de verificación

**Autor:** Coordinación de investigación  
**Fecha de revisión:** 2026-07-31  
**Objetivo:** Corregir el registro de fuentes para el estudio de viabilidad del sistema fotovoltaico en Supermercados Akí Latacunga Norte, a partir de los enlaces oficiales entregados por el estudiante.

## Criterio de clasificación

- **Fuente oficial verificada:** la dirección exacta respondió y se comprobó su titularidad institucional o el contenido identificado.
- **Documento localizado pendiente de extracción:** la dirección fue identificada, pero falta extraer el registro, serie o resultado aplicable al estudio. No equivale a un dato disponible.
- **Dato privado pendiente:** información que no se publica en las fuentes oficiales revisadas y debe ser proporcionada o autorizada por el titular correspondiente.

## Fuentes oficiales verificadas

| Tema | Institución responsable | Dirección exacta | Evidencia de verificación | Uso permitido por ahora |
| --- | --- | --- | --- | --- |
| Informe Anual 2025 | Corporación Favorita | https://www.corporacionfavorita.com/pdf/informe-anual-cf-2025.pdf | PDF de 80 páginas identificado como “Informe Anual 2025”; su contenido incluye Supermercados Akí. | Contexto corporativo y documentación institucional; no se transcriben cifras en esta etapa. |
| Local Akí Latacunga Norte | Supermercados Akí | https://www.aki.com.ec/locales-aki/ | La página lista “AKÍ Latacunga Norte” y la dirección “Av. Amazonas y Benjamín Terán”. | Identificación y ubicación pública del local; no acredita consumo ni características físicas del inmueble. |
| Tasas de interés históricas | Banco Central del Ecuador (BCE) | https://contenido.bce.fin.ec/documentos/Estadisticas/SectorMonFin/TasasInteres/TasasHistorico.htm | Página BCE titulada “Tasas de interés efectivas vigentes — Datos históricos”, con enlaces mensuales para 2026 y años anteriores. | Localizar la serie y el mes que el estudiante apruebe; no sustituye una oferta de crédito. |
| Índice de Precios al Consumidor (IPC) | Instituto Nacional de Estadística y Censos (INEC) | https://www.ecuadorencifras.gob.ec/indice-de-precios-al-consumidor/ | Página oficial del IPC; describe el indicador y publica resultados mensuales junto con información estadística y metodología. | Fuente de inflación/IPC con periodo y definición que deberán registrarse al extraer datos. |
| Servicio Público de Energía Eléctrica 2026 | Agencia de Regulación y Control de Electricidad (ARCONEL) | https://arconel.gob.ec/servicio-publico-de-energia-electrica-spee/ | Página SPEE que lista para 2026 la Resolución ARCONEL-021/25, el informe de costo y la Resolución ARCONEL-029/25 con anexo de pliego tarifario. | Localizar la categoría tarifaria aplicable; no se asigna todavía una tarifa al local. |
| Regulación ARCONEL-005/24 | ARCONEL | https://arconel.gob.ec/wp-content/uploads/downloads/2024/10/Regulacion-005_24-Codificada-signed-1.pdf | PDF de 68 páginas: “Regulación Nro. ARCONEL-005/24 (Codificada)”, sobre generación distribuida para autoabastecimiento de consumidores regulados. | Marco normativo; su aplicación concreta requiere la revisión técnica y documental correspondiente. |

## Documentos o herramientas localizados, pendientes de extracción

| Tema | Responsable | Dirección exacta | Estado y pendiente |
| --- | --- | --- | --- |
| Directorio de compañías | Superintendencia de Compañías, Valores y Seguros | https://mercadodevalores.supercias.gob.ec/reportes/directorioCompanias.jsf | Dirección oficial localizada. La comprobación automatizada devolvió un error interno, por lo que todavía no se ha obtenido un registro de compañía ni estados financieros. Se requiere consulta manual y conservar criterio de búsqueda, fecha y resultado. |
| Recurso solar del sitio | Global Solar Atlas | https://globalsolaratlas.info/ | Herramienta pública especializada localizada. La página no expuso datos tabulares en la comprobación automática. Falta consultar el punto del local, registrar coordenadas, métrica, unidad, fecha de consulta y exportación/captura. No se clasifica como fuente oficial ecuatoriana. |

## Datos privados que todavía deben conseguirse

| Dato | Clasificación | Responsable o fuente requerida | Condición mínima de registro |
| --- | --- | --- | --- |
| Factura eléctrica del local | Privado / observado | Administración del local, Corporación Favorita o distribuidora autorizada | Factura o histórico de facturación identificable, periodo, unidad y autorización de uso. |
| Dimensiones y condición del techo | Privado / observado | Administración del inmueble, planos aprobados o levantamiento técnico autorizado | Plano, medición o informe técnico con fecha, unidad, área útil, restricciones y responsable. |
| Cotizaciones de proveedores fotovoltaicos | Privado / cotizado | Proveedores | Propuesta emitida con fecha, alcance técnico, vigencia, impuestos y condiciones comerciales. |
| Ofertas de financiamiento | Privado / cotizado | Entidades financieras o proveedor | Oferta/carta con fecha, monto, plazo, tasa, comisiones, garantías y vigencia. Las tasas históricas del BCE no reemplazan esta evidencia. |

## Trazabilidad y límites

- **Archivos de entrada:** las ocho direcciones exactas proporcionadas por el estudiante.
- **Transformaciones realizadas:** comprobación de acceso e identificación; se corrigieron las referencias genéricas anteriores por los enlaces específicos. No se descargaron ni procesaron bases de datos, y no se calcularon VAN, TIR, WACC ni flujos de caja.
- **Supuestos:** ninguno incorporado como dato. La denominación del local y su dirección se conservan tal como aparecen en la página oficial de Akí.
- **Hallazgo:** las fuentes antes declaradas faltantes incluyen enlaces específicos existentes y verificables; ello no convierte los datos privados del proyecto en información pública.
- **Limitaciones:** no se han extraído series, tarifas específicas, registro societario ni irradiación puntual; no se ha recibido evidencia privada.
- **Archivo de salida relacionado:** `evidence/04_respuesta_corregida_fuentes.md`.

## Revisión del auditor de riesgos

El 2026-07-31 el auditor comprobó las ocho direcciones exactas sin usar Python. Mediante verificación HTTP, las ocho respondieron con estado 200 y conservaron la URL indicada; esta comprobación acredita acceso al recurso, no la validez de cifras ni su aplicabilidad al local.

| Dirección | Resultado de auditoría |
| --- | --- |
| Informe Anual CF 2025 | PDF accesible, 80 páginas; título y sección de Supermercados Akí identificados. |
| Locales Akí | HTML accesible; local, dirección, horario y teléfonos de Akí Latacunga Norte identificados. |
| Directorio Superintendencia | HTML accesible en el host oficial; el lector de contenido devolvió error interno, por lo que no se verificaron resultados de consulta. |
| BCE tasas históricas | HTML accesible; encabezado BCE y enlaces mensuales de 2009 a 2026 identificados. |
| INEC IPC | HTML accesible; título, descripción, información estadística y metodología identificados. |
| ARCONEL SPEE | HTML accesible; sección 2026 y enlaces a resolución, informe y anexo tarifario identificados. |
| Regulación ARCONEL-005/24 | PDF accesible, 68 páginas; título, fecha de directorio y objeto normativo identificados. |
| Global Solar Atlas | HTML accesible; contenido dinámico sin texto expuesto por el lector, pendiente de consulta geográfica y extracción. |

Ninguna cifra debe pasar a análisis o visualización sin conservar fuente, fecha, unidad, categoría y evidencia de extracción.
