# Portfolio profesional — Facundo Pompa

Portfolio bilingüe desarrollado con React, TypeScript y Vite. El proyecto prioriza contenido verificable, accesibilidad, performance y una estética editorial oscura sin depender de una librería de animaciones o partículas.

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

- `src/content.ts`: contenido completo en español e inglés.
- `src/context`: idioma y tema, ambos persistidos en `localStorage`.
- `src/components`: navegación, fondo, formulario y vistas de proyectos.
- `src/styles.css`: sistema visual, breakpoints y preferencias de movimiento reducido.
- `public/Facundo-Pompa-CV.pdf`: archivo descargable desde el sitio.

## Formulario de contacto

La implementación actual valida los campos y abre el cliente de correo del visitante mediante `mailto:`. No simula un envío ni almacena información.

Para recibir mensajes sin depender del cliente de correo, las alternativas más razonables son:

- **Formspree**: la integración más rápida para un sitio estático; requiere crear el formulario y usar su identificador.
- **EmailJS**: envía desde el navegador mediante un servicio y una plantilla configurados en su panel.
- **Resend + función serverless**: ofrece más control y mantiene la API key fuera del frontend, pero requiere un endpoint y un dominio de envío verificado.

No se incluyó ninguna de estas integraciones porque necesitan una cuenta y credenciales del propietario.

## Decisiones de diseño

- Sin barras de porcentaje, estadísticas inventadas ni copy genérico.
- Partículas dibujadas con Canvas y densidad limitada; la animación se pausa cuando la pestaña no está visible.
- `prefers-reduced-motion` desactiva entradas y movimiento continuo.
- Los proyectos muestran botones de demo únicamente cuando la URL fue verificada.
- Tema oscuro inicial y tema claro diseñado como variante propia.
