# Validación reproducible del modelo financiero

Con los supuestos base, `src/models/finance.ts` debe producir:

| Indicador | Resultado esperado | Tolerancia |
|---|---:|---:|
| WACC | 10,767 % | 0,001 puntos porcentuales |
| VAN | -USD 1.853,76 | USD 1,00 |
| TIR | 10,46 % | 0,01 puntos porcentuales |
| Beneficio-costo | 0,981 | 0,001 |
| Payback simple | 8,05 años | 0,02 años |
| Flujo libre año 1 | USD 11.398,69 | USD 1,00 |

## Pruebas de criterio

1. Si el VAN es negativo, la interfaz debe mostrar “Modificar”.
2. Si el VAN es positivo, la interfaz debe mostrar “Aceptable”.
3. El escenario optimista debe tener VAN superior al escenario base.
4. El escenario pesimista debe tener VAN inferior al escenario base.
5. El dashboard debe identificar inversión, capacidad y costo patrimonial como supuestos.

## Comando de verificación técnica

```powershell
npm.cmd run build
```

Una compilación exitosa demuestra que el modelo y la interfaz son compatibles con Next.js y TypeScript.
