# Sergio Cornejo · Platform Engineer

Portfolio bilingüe de ingeniería de plataformas. Inglés en `/`, español en `/es/`, preparado para https://sergiocorne.github.io/.

**Repositorio:** https://github.com/SergioCorne/SergioCorne.github.io · **Web:** https://sergiocorne.github.io/ · [Español](https://sergiocorne.github.io/es/). GitHub Actions valida y publica los cambios de `main`.

## Stack y arquitectura

Astro genera HTML estático; TypeScript comprueba datos y componentes. CSS y SVG propios resuelven el diseño responsive y el diagrama interactivo. No se carga React ni una librería de animación. Inter e IBM Plex Mono se sirven localmente con Fontsource. Sitemap, hreflang, canonical, Open Graph, robots y datos estructurados acompañan ambas traducciones.

El contenido profesional está separado de la presentación. Solo se incluyen datos respaldados por el perfil confirmado y su publicación pública del homelab. Consulta [la investigación](docs/RESEARCH.md).

```text
src/
  components/Portfolio.astro    Documento, secciones y navegación
  components/Architecture.astro Diagrama accesible de cuatro capas
  data/profile.ts              Identidad, experiencia, stack y fuentes
  data/copy.ts                 Textos en inglés y español
  pages/index.astro            Inglés
  pages/es/index.astro         Español
  pages/404.astro              Página de error bilingüe
  styles/global.css            Sistema visual y responsive
public/                        Favicon, tarjeta social y robots
scripts/                       Validación de salida y tarjeta social
.github/workflows/deploy.yml   Calidad y despliegue
```

## Desarrollo local

Requiere Node.js 24 y npm. Se usa un lockfile versionado para instalaciones reproducibles.

```sh
npm ci
npm run dev
```

Abrir la URL local indicada por Astro. `npm run build` genera `dist/`; `npm run preview` sirve esa salida de producción.

## Calidad

```sh
npm run check
npm run lint
npm run format:check
npm run build
npm run validate
```

`validate` comprueba en ambos idiomas metadatos, JSON-LD, IDs únicos, enlaces locales, anclas y existencia de recursos. La validación no confirma el contenido de enlaces externos ni reemplaza una revisión humana de accesibilidad. Los resultados de navegador y auditoría se documentan en `docs/VALIDATION.md`.

Para formatear: `npx prettier --write .`. Para regenerar la tarjeta Open Graph: `npm run social-card`; hay que incluir el PNG actualizado en el commit.

## Editar contenido

- Identidad y enlaces: `src/data/profile.ts`, objeto `profile`.
- Experiencia: añadir un objeto a `experience`, con textos `en` y `es`, fechas y tecnologías verificadas. La timeline adapta el número de entradas.
- Stack: modificar `stack` con el contexto y las herramientas confirmadas.
- Textos y traducciones: `src/data/copy.ts`. Todas las secciones de ambas rutas comparten el mismo componente.
- Idiomas: el selector conserva el ancla actual y la ruta elegida se mantiene durante toda la navegación. Se guarda la preferencia en localStorage cuando está disponible, sin redirigir automáticamente la raíz inglesa.
- Proyectos personales: añadir entradas a `personalProjects` en `src/data/profile.ts`, incluyendo textos en ambos idiomas, estado, equipo, enlaces y contexto verificados. Las tarjetas se generan automáticamente.
- Caso actual: `project` contiene la fuente pública y las tecnologías; `case*` en `copy.ts` contiene su narrativa. Para varios casos, convertirlo en un array tipado y reutilizar el artículo de `Portfolio.astro`. Añadir contexto, contribución y resultado sustentados por una fuente aprobada. No publicar datos privados ni tarjetas vacías.
- Certificaciones: `certification` contiene la obtenida y su enlace real. Para varias, convertir en array y recorrerlo en la sección de formación. Las que estén en preparación deben tener un estado separado y etiquetarse explícitamente en ambos idiomas.
- Email/CV: están vacíos hasta recibir aprobación. Para publicarlos, completar los campos y añadir el enlace correspondiente en contacto. El CV debe ser un archivo aprobado en `public/`, sin datos personales no autorizados.

Tras editar, revisar ambas rutas y ejecutar los comandos de calidad. Verificar fechas y estado del puesto actual antes de cada actualización profesional.

## GitHub Pages

1. Para reproducir el despliegue desde cero, crear el repositorio público `SergioCorne/SergioCorne.github.io` y subir este proyecto a `main`.
2. En Settings → Pages, elegir **GitHub Actions** como origen.
3. El workflow compila y valida antes de publicar. Se ejecuta en pushes a `main`, pull requests y manualmente; las pull requests solo validan.
4. La tarea de build tiene `contents: read`. Solo la tarea de despliegue tiene `pages: write` e `id-token: write` y usa el entorno `github-pages`.
5. Comprobar la ejecución de Actions y abrir la URL final en navegador. No considerar publicado hasta verificar respuesta, recursos y navegación.

`astro.config.mjs` utiliza la URL final y no define `base`, porque este repositorio sirve desde la raíz de la cuenta. No se necesitan tokens en el código, claves privadas ni servicios de pago. La autenticación del despliegue se resuelve con el token efímero de GitHub Actions.

## Diseño y accesibilidad

Tema oscuro con matices violeta y turquesa, presentación a dos columnas, diagrama de plataforma ilustrativo en el stack, timeline y caso técnico. HTML semántico, foco visible, enlace de salto, navegación por teclado, disclosures nativos y soporte para reducción de movimiento. El contenido principal funciona sin JavaScript; menú y diagrama necesitan JS para su interacción. No se usan analítica ni formularios de contacto.

## Pendiente

Confirmación opcional de email, CV y nuevas herramientas/proyectos. No se afirma certificación CKA, niveles de dominio ni métricas no verificadas.
