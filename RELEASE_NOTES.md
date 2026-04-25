# Release Notes

## v1.0.0

Primera version moderna de Licoreria Entre Pisco y Nazca.

### Highlights

- Rediseño completo de la experiencia visual.
- Catalogo dinamico con busqueda y filtro por categoria.
- Pedido rapido persistente con envio a WhatsApp.
- Confirmacion de mayoria de edad.
- SEO basico, Open Graph y metadata PWA.
- Service worker para cache de assets estaticos.
- Version sincronizada en `docs/` para GitHub Pages.
- Workflow de GitHub Actions para deployments en GitHub Pages.

### Validacion

- `node --check js/script.js`
- `node --check sw.js`
- `node --check docs/js/script.js`
- `node --check docs/sw.js`
- Manifest principal y manifest de `docs/` parseados correctamente.
- Servidor local validado con respuesta HTTP `200`.

### Deployment

URL esperada:

```text
https://dalvadev.github.io/Prototipo/
```

El workflow `Deploy to GitHub Pages` publica el contenido de `docs/`.
