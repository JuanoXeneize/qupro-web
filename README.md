# qupro — Landing page

Landing estática (HTML/CSS/JS, sin build) para qupro. Todos los botones de
acción (Ingresar / Empezar gratis) redirigen a **https://app.qupro.co**.

## Estructura

- `index.html` — estructura de la página (hero, features, pasos, CTA, footer)
- `styles.css` — estilos
- `script.js` — JS mínimo (año dinámico)

## Ver localmente

Abrí `index.html` en el navegador, o levantá un server:

```bash
# Python
python -m http.server 8080
# Node
npx serve .
```

Luego entrá a http://localhost:8080

## Desplegar

Al ser estática, se puede subir tal cual a Netlify, Vercel, GitHub Pages,
Cloudflare Pages o cualquier hosting estático.
