# Evidencia 14: construcción y validación del dashboard

## Actividad

Se construyó un dashboard interactivo en Next.js y TypeScript para presentar los resultados económicos y financieros del proyecto fotovoltaico.

## Componentes desarrollados

* Indicadores de VAN, TIR, beneficio-costo y recuperación.
* Flujo de caja descontado.
* WACC y estructura de financiamiento.
* Razones financieras 2023–2025.
* Escenarios pesimista, base y optimista.
* Simulador interactivo de sensibilidad.
* Valoración empresarial y del proyecto.
* Matriz de riesgos.
* Recomendación.
* Fuentes y fecha de actualización.
* Base CSV y diccionario de variables.

## Validación

Se ejecutó:

```text
npm.cmd run build
```

La aplicación compiló correctamente con Next.js y TypeScript. Posteriormente se ejecutó localmente mediante:

```text
npm.cmd run dev
```

El dashboard quedó disponible en `http://localhost:3000`.

## Revisión humana

La estudiante comprobó que:

1. Los datos simulados estén identificados.
2. El escenario base muestre un VAN negativo.
3. La recomendación sea modificar el proyecto.
4. Los controles del simulador cambien los resultados.
5. Las fuentes puedan abrirse.
6. Los indicadores corporativos no se atribuyan al local.
7. La interfaz presente interpretaciones y no solamente gráficos.

No se utilizó Python.

**Responsable:** Josselyn Campaña
**Fecha:** 31 de julio de 2026
