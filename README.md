# Licoreria Entre Pisco y Nazca

Sitio web comercial para una licoreria con catalogo dinamico, pedido rapido y experiencia responsive. El proyecto esta construido con HTML, CSS y JavaScript puro, sin backend propio ni paso de build obligatorio.

## Demo

GitHub Pages: <https://dalvadev.github.io/Prototipo/>

## About del repositorio

Metadata sugerida para la seccion **About** de GitHub:

Description:

```text
Sitio web moderno para licoreria con catalogo dinamico, pedido rapido por WhatsApp y experiencia PWA.
```

Website:

```text
https://dalvadev.github.io/Prototipo/
```

Topics:

```text
html css javascript ecommerce catalog pwa github-pages responsive-design
```

## Caracteristicas

- Landing moderna para tienda de bebidas.
- Catalogo renderizado desde datos JavaScript.
- Busqueda por nombre, descripcion y categoria.
- Filtro por categoria.
- Pedido rapido persistido en `localStorage`.
- Envio del resumen por WhatsApp.
- CTA telefonico directo.
- Carousel propio sin dependencias externas.
- Confirmacion de mayoria de edad antes de navegar.
- SEO basico con metadata y Open Graph.
- Imagen principal precargada y recursos con carga diferida.
- PWA liviana con manifest y service worker para cache estatico.
- Version sincronizada en `docs/` para despliegues con GitHub Pages.

## Stack

- HTML5 semantico
- CSS moderno
- JavaScript vanilla
- GitHub Pages

## Arquitectura

```text
.
├── index.html          # Entrada principal del sitio
├── css/
│   └── style.css       # Sistema visual, responsive y componentes
├── js/
│   └── script.js       # Datos, render dinamico, filtros, pedido y carousel
├── images/             # Assets de productos y marca
├── manifest.webmanifest # Metadata PWA
├── sw.js               # Cache estatico para visitas posteriores
└── docs/               # Copia lista para GitHub Pages
```

## Ejecucion local

No necesitas instalar dependencias. Puedes abrir `index.html` directamente o levantar un servidor estatico:

```bash
python -m http.server 5174 --bind 127.0.0.1
```

Luego abre:

```text
http://127.0.0.1:5174/
```

## Releases

El repositorio incluye `RELEASE_NOTES.md` con la version `v1.0.0`, pensada como primera release profesional del proyecto.

Para publicar la release formal en GitHub:

1. Ve a `Releases`.
2. Selecciona `Draft a new release`.
3. Usa el tag `v1.0.0`.
4. Copia el contenido de `RELEASE_NOTES.md`.
5. Publica la release.

## Deployments

El proyecto incluye `.github/workflows/deploy.yml` para publicar `docs/` en GitHub Pages usando GitHub Actions.

Para activar el deployment:

1. En GitHub, entra a `Settings > Pages`.
2. En `Build and deployment`, selecciona `GitHub Actions`.
3. Ejecuta el workflow `Deploy to GitHub Pages` o haz push a `main`.

URL esperada:

```text
https://dalvadev.github.io/Prototipo/
```

## Desarrollo

La fuente principal vive en la raiz del proyecto:

- `index.html`
- `css/style.css`
- `js/script.js`
- `images/`

Si el repositorio sigue usando GitHub Pages desde `docs/`, sincroniza la version publica despues de modificar la raiz:

```powershell
Copy-Item index.html docs/index.html -Force
Copy-Item css/style.css docs/css/style.css -Force
Copy-Item js/script.js docs/js/script.js -Force
Copy-Item manifest.webmanifest docs/manifest.webmanifest -Force
Copy-Item sw.js docs/sw.js -Force
```

## Decisiones tecnicas

El sitio no incluye backend. La funcionalidad de pedido se resuelve en cliente con `localStorage` y un enlace generado hacia WhatsApp, lo que mantiene el proyecto simple, rapido y facil de publicar en GitHub Pages.

Se eliminaron dependencias externas de UI para reducir bloqueo de render, peso de red y puntos de falla. El carousel, la navegacion activa, el filtro de productos y el carrito liviano estan implementados con JavaScript nativo.

Las imagenes no criticas usan `loading="lazy"` y `decoding="async"`. La primera imagen hero se precarga para mejorar la percepcion de carga.

El service worker aplica una estrategia cache-first para assets estaticos y fallback a `index.html`, lo que mejora visitas repetidas sin introducir infraestructura de backend.

## Buenas practicas aplicadas

- HTML semantico y landmarks claros.
- Navegacion accesible con `aria` en menu y modal de edad.
- Estados visuales de foco para teclado.
- Layout responsive con CSS Grid y Flexbox.
- Filtros sin recarga de pagina.
- Persistencia local del pedido.
- Cache de assets estaticos mediante service worker.
- Archivos de logs locales ignorados por Git.

## Roadmap sugerido

- Convertir productos a `products.json` si el catalogo crecera con frecuencia.
- Agregar precios y stock cuando exista una fuente confiable.
- Incorporar tests E2E con Playwright para validar flujo de pedido.
- Optimizar imagenes a WebP/AVIF manteniendo fallback PNG.
- Agregar un backend simple si se requiere inventario, pagos o panel administrativo.

## Licencia

Este repositorio no declara licencia todavia. Agrega un archivo `LICENSE` antes de distribuirlo comercialmente.
