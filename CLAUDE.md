# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CV / portfolio site for Victor Cabello, hosted on GitHub Pages as a static HTML site. Content is in Spanish. The site presents Victor's profile as Enterprise Architect / DevOps / Cloud / GenAI specialist.

## Stack

- **Static HTML** single-page site (no build step)
- **Tailwind CSS v3** via CDN
- **Vanilla JS** for scroll animations (IntersectionObserver) and dark/light mode toggle
- **GitHub Pages** hosting (rama `master`)

## Local Preview

```bash
python -m http.server 8000
# or
npx serve .
```

Open `http://localhost:8000`

## Architecture

- **`index.html`** — Single-page CV with all sections (Hero, Summary, Expertise, Experience, AI/ML, Skills, Certifications, Projects, Education, Contact)
- **`assets/css/custom.css`** — CSS animations (@keyframes, scroll transitions)
- **`assets/scripts/main.js`** — IntersectionObserver for scroll animations + dark mode toggle
- **`img/`** — Profile photo and static images
- **`.nojekyll`** — Prevents GitHub Pages from processing with Jekyll
