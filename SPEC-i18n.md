# SPEC: Internacionalización (i18n) — VictorCabello.github.io

## Objetivo

Agregar soporte bilingüe (español / inglés) al CV, con detección automática del locale del visitante y botones para cambio manual de idioma.

---

## 1. Lógica de Detección de Idioma

### Prioridad de resolución (de mayor a menor):

1. **Preferencia guardada** — `localStorage.getItem('lang')` si el usuario ya eligió manualmente
2. **`navigator.language`** — idioma del navegador del visitante
3. **Fallback** — inglés (`en`)

### Reglas de mapeo:

| `navigator.language` empieza con | Idioma mostrado |
|----------------------------------|-----------------|
| `es-MX`, `es-ES`, `es-*`        | Español (`es`)  |
| Cualquier otro valor             | Inglés (`en`)   |

Es decir: solo se muestra español si el locale es explícitamente español. Para todo lo demás (en-US, en-GB, fr, de, pt, etc.) se muestra inglés.

---

## 2. Estrategia de Implementación

### Enfoque: Data attributes + JS toggle (sin duplicar HTML)

- Cada elemento con texto traducible lleva `data-i18n="clave"`
- Las traducciones se almacenan en un objeto JS (diccionario) dentro de un archivo dedicado
- Al cambiar idioma, JS recorre todos los `[data-i18n]` y reemplaza el `textContent` o `innerHTML`
- El atributo `lang` del `<html>` se actualiza dinámicamente

### Estructura de archivos:

```
assets/
└── scripts/
    ├── main.js          ← existente (animations + theme toggle)
    └── i18n.js          ← nuevo (diccionario + lógica de detección + toggle)
```

### Diccionario (`i18n.js`):

```js
const translations = {
  es: {
    "hero.title": "Victor Cabello",
    "hero.subtitle": "Enterprise Architect · DevOps · Cloud · GenAI",
    "hero.tagline": "Transformando infraestructura en ventaja competitiva con IA",
    "nav.about": "Resumen",
    "nav.experience": "Experiencia",
    // ... todas las claves
  },
  en: {
    "hero.title": "Victor Cabello",
    "hero.subtitle": "Enterprise Architect · DevOps · Cloud · GenAI",
    "hero.tagline": "Turning infrastructure into competitive advantage with AI",
    "nav.about": "Summary",
    "nav.experience": "Experience",
    // ... todas las claves
  }
};
```

---

## 3. UI del Selector de Idioma

### Ubicación
- En la **barra de navegación** (nav), al lado del botón de dark/light mode
- Dos botones tipo pill/chip: `ES` | `EN`
- El idioma activo se resalta visualmente (fondo sólido, el inactivo solo borde)

### Ejemplo visual:
```
[VC]    Resumen  Expertise  Experiencia ...    [ES|EN]  [🌙]
```

### Comportamiento:
- Click en `EN` → cambia todo el contenido a inglés, guarda en `localStorage`
- Click en `ES` → cambia todo el contenido a español, guarda en `localStorage`
- El cambio es instantáneo, sin recarga de página

---

## 4. Elementos a Traducir

| Sección | Claves principales |
|---------|--------------------|
| Nav | Links de navegación (8 items) |
| Hero | Subtitle, tagline, botones CTA |
| Resumen Profesional | Título de sección, párrafo completo |
| Áreas de Expertise | Título, nombre y descripción de cada card (4) |
| Experiencia | Título, cada rol: título del puesto, descripción de empresa, bullets (4 roles × ~4 bullets) |
| AI & ML | Título, subtítulo, cada card: título y descripción (6) |
| Habilidades Técnicas | Título, nombres de categorías (4). Los tags técnicos (AWS, Python, etc.) NO se traducen |
| Certificaciones | Título, subtítulos de cada certificación (6) |
| Proyectos | Título, descripción de cada proyecto (6). Los tags técnicos NO se traducen |
| Educación | Título, nombre de carrera, universidad |
| Contacto | Título, párrafo |
| Footer | Texto del footer |

**No se traducen**: nombres propios, nombres de tecnologías/herramientas, URLs, nombres de repos.

---

## 5. SEO y Metadatos

- Actualizar `<html lang="es">` → `<html lang="en">` dinámicamente según idioma activo
- Los meta tags (`og:description`, `meta description`) permanecen en inglés (mejor alcance SEO internacional)
- El JSON-LD `description` permanece en inglés
- Agregar `<link rel="alternate" hreflang="es">` y `<link rel="alternate" hreflang="en">` apuntando a la misma URL (single-page, idioma dinámico)

---

## 6. Consideraciones Técnicas

- **Sin flash de idioma incorrecto**: el script de detección debe ejecutarse lo antes posible (en `<head>` o al inicio del `<body>`) para evitar que se muestre un idioma y luego cambie
- **Contenido con HTML interno**: algunos textos contienen `<strong>`, `<span>` con clases de color. El diccionario debe soportar HTML en esos casos (usar `innerHTML` en lugar de `textContent` para esas claves)
- **Typewriter**: al cambiar idioma, si el typewriter ya se animó, actualizar el texto directamente sin re-animar
- **Performance**: el diccionario es pequeño (~100 claves), el recorrido de `querySelectorAll('[data-i18n]')` es negligible

---

## 7. Plan de Implementación

1. Agregar `data-i18n="clave"` a todos los elementos traducibles en `index.html`
2. Crear `assets/scripts/i18n.js` con el diccionario completo y la lógica de detección/toggle
3. Agregar botones `ES` | `EN` al nav en `index.html`
4. Cargar `i18n.js` antes de `main.js` en `index.html`
5. Verificar que animaciones, dark mode y typewriter siguen funcionando tras el cambio de idioma
6. Test manual: cambiar idioma del navegador, verificar detección automática, verificar persistencia en `localStorage`
