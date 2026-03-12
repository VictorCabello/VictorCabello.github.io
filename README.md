# victorcabello.github.io

CV / portfolio personal de **Victor Cabello** — Enterprise Architect | DevOps | Cloud | GenAI.

**URL:** [https://victorcabello.github.io](https://victorcabello.github.io)

## Descripcion

Sitio web estático de una sola página que presenta el perfil profesional de Victor Cabello: arquitecto empresarial y technical lead con más de 17 años de experiencia en DevOps, arquitectura cloud (AWS, Azure, GCP) e inteligencia artificial generativa / MLOps.

El sitio incluye:
- Resumen profesional y áreas de expertise
- Experiencia laboral y proyectos destacados
- Certificaciones (AWS, Azure, HashiCorp, TOGAF, Oracle)
- Habilidades técnicas
- Soporte bilingüe ES / EN con detección automática de idioma

## Stack

| Tecnología | Uso |
|---|---|
| HTML estático | Estructura del sitio (una sola página) |
| Tailwind CSS v3 | Estilos (compilado localmente, sin CDN) |
| Vanilla JS | Animaciones scroll, dark mode, i18n |
| GitHub Pages | Hosting (rama `master`) |

## Desarrollo local

```bash
# Preview
python -m http.server 8000
# o
npx serve .
```

Abrir `http://localhost:8000`

## Actualizar estilos

Si se agregan nuevas clases de Tailwind en `index.html`, regenerar el CSS compilado antes de hacer commit:

```bash
npm install        # solo la primera vez
npm run build:css  # regenera assets/css/tailwind.css
```

Para desarrollo con recarga automática:

```bash
npm run watch:css
```

## Estructura

```
.
├── index.html                  # Pagina principal (todo el contenido)
├── assets/
│   ├── css/
│   │   ├── custom.css          # Animaciones y estilos propios
│   │   └── tailwind.css        # CSS de Tailwind compilado
│   └── scripts/
│       ├── main.js             # Scroll animations + dark mode
│       └── i18n.js             # Internacionalización ES/EN
├── img/                        # Foto de perfil e imagenes
├── tailwind.config.js          # Configuracion de Tailwind
└── .nojekyll                   # Evita procesamiento Jekyll en GitHub Pages
```
