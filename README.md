# Portfolio PM

Sitio estático (HTML + CSS + JS, sin dependencias) listo para GitHub Pages.

## Estructura
- `index.html` — todo el contenido. Buscá los textos de ejemplo y reemplazalos.
- `styles.css` — diseño. Los colores están arriba de todo en `:root`.
- `script.js` — animaciones, nav activa y botón "Copiar mail".
- `assets/foto.jpg` — tu foto (cuadrada). Si no existe, se muestran tus iniciales.

## Publicar en GitHub Pages
1. Creá un repo **público** llamado exactamente `TU-USUARIO.github.io`.
2. Subí estos archivos a la raíz del repo (desde la web: *Add file → Upload files*, o con git):
   ```bash
   git init && git add . && git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-USUARIO.github.io.git
   git push -u origin main
   ```
3. En el repo: *Settings → Pages → Source: Deploy from a branch → main / (root)*.
4. En 1–2 minutos queda online en `https://TU-USUARIO.github.io`.

## Agregar un caso de estudio
Copiá un bloque `<article class="case reveal"> … </article>` completo en `index.html` y cambiá los textos.
