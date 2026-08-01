# Respuesta corregida sobre fuentes

**Autor:** Coordinación de investigación, con revisión requerida del auditor de riesgos  
**Fecha:** 2026-07-31  
**Objetivo:** Documentar la corrección solicitada por el estudiante sobre la investigación de fuentes del estudio fotovoltaico de Akí Latacunga Norte.

## Antecedente y corrección

El estudiante detectó que la primera investigación estaba incompleta: algunas fuentes habían sido marcadas como faltantes aun cuando existían. El estudiante proporcionó ocho enlaces oficiales o institucionales exactos y solicitó que se corrigiera el registro.

Se revisaron esas direcciones sin usar Python. La revisión confirmó directamente el Informe Anual 2025 de Corporación Favorita, la página oficial de locales de Akí —incluido Akí Latacunga Norte—, las tasas históricas del BCE, el IPC del INEC, el SPEE 2026 de ARCONEL y la Regulación ARCONEL-005/24. El directorio de compañías de la Superintendencia quedó localizado, pero su comprobación automatizada arrojó un error interno y sigue pendiente una consulta manual documentada. Global Solar Atlas quedó localizado como herramienta especializada; falta realizar la consulta puntual y conservar su evidencia.

## Resultado de la rectificación

| Grupo | Resultado |
| --- | --- |
| Fuentes oficiales verificadas | Informe Anual CF 2025; locales Akí; tasas históricas BCE; IPC INEC; SPEE 2026; Regulación ARCONEL-005/24. |
| Localizadas pendientes de extracción | Directorio de compañías de la Superintendencia y consulta puntual en Global Solar Atlas. |
| Datos privados pendientes | Factura eléctrica del local, dimensiones del techo, cotizaciones de proveedores y ofertas de financiamiento. |

## Auditoría y límites

- **Fuentes y archivos de entrada:** las ocho URLs entregadas por el estudiante; enlaces y estado detallados en `docs/fuentes_oficiales.md`.
- **Auditoría:** el auditor de riesgos comprobó las ocho direcciones exactas el 2026-07-31. Todas respondieron con estado HTTP 200 y preservaron la dirección indicada. La comprobación independiente confirmó contenido identificable en seis recursos; el directorio de la Superintendencia y Global Solar Atlas permanecen pendientes de consulta/extracción por sus limitaciones de contenido dinámico o error del lector.
- **Transformaciones realizadas:** se sustituyeron referencias genéricas por enlaces exactos y se reclasificó cada fuente según su evidencia disponible.
- **Supuestos:** ninguno; no se añadieron cifras, consumos, costos ni condiciones financieras.
- **Hallazgo:** la primera investigación no era definitiva y quedó corregida en cuanto a la existencia y estado de las fuentes señaladas.
- **Limitaciones:** falta extracción documentada donde se indica y faltan evidencias privadas esenciales para evaluar el proyecto.
- **Archivos de salida:** `docs/fuentes_oficiales.md` y `data/diccionario_datos.md`.

El agente auditor comprobó cada dirección exacta y debe conservar, para todo dato derivado, fecha de revisión, identidad de la fuente, unidad, periodo y evidencia de extracción. No se calcularon VAN, TIR, WACC ni flujo de caja.
