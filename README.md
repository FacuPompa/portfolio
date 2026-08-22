# Portfolio profesional — Facundo Pompa

Portfolio desarrollado con React, TypeScript y Vite. El proyecto prioriza contenido verificable, accesibilidad, performance y una estética editorial oscura sin depender de ninguna librería.

## Ejecutar localmente

```powershell
pnpm install
pnpm dev
```

Para validar la versión de producción:

```powershell
pnpm lint
pnpm build
pnpm preview
```

## Arquitectura

- `src/content.ts`: contenido visible del portfolio en español e inglés.
- `src/context`: idioma y tema, ambos persistidos en `localStorage`.
- `src/components`: encabezado, galería de proyectos, tecnologías y fondo animado.
- `src/styles.css`: sistema visual, breakpoints y preferencias de movimiento reducido.
- `public`: CV, favicon, retrato, logos y capturas originales que Vite copia al compilar.
- `dist`: salida generada por `pnpm build`; no se versiona ni se edita manualmente.

## Decisiones de diseño

- Sin barras de porcentaje, estadísticas inventadas ni copy genérico.
- Partículas dibujadas con Canvas y densidad limitada; la animación se pausa cuando la pestaña no está visible.
- `prefers-reduced-motion` desactiva entradas y movimiento continuo.
- Los proyectos muestran botones de demo únicamente cuando la URL fue verificada.
- Tema oscuro inicial y tema claro diseñado como variante propia.
