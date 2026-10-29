# Validación

29 de octubre de 2026. Versión estática de producción servida en http://127.0.0.1:4322/.

## Comprobaciones ejecutadas

- `npm run check`: 0 errores, 0 advertencias.
- `npm run lint`: correcto.
- `npm run build`: correcto, rutas `/`, `/es/` y `404.html`.
- `npm run validate`: ambos idiomas, metadatos, JSON-LD, IDs, anclas, enlaces internos y recursos locales correctos.
- Enlace de credencial Microsoft recuperado del perfil: respuesta HTTP 200. Esto verifica disponibilidad, no la autenticidad independiente de la acreditación.
- GitHub público: lista de repositorios vacía. Destino responde 404 al consultar con el conector. Identidad `SergioCorne` confirmada en conector y CLI mediante consulta de usuario; no se han realizado operaciones externas de escritura.

## Lighthouse

Ejecutado con Lighthouse CLI instalado como dependencia de desarrollo y Chrome local en modo headless. Informes completos HTML/JSON en `reports/` (no versionados).

| Versión            | Performance | Accessibility | Best Practices | SEO |
| ------------------ | ----------: | ------------: | -------------: | --: |
| Inglés, móvil      |         100 |           100 |            100 | 100 |
| Inglés, escritorio |         100 |           100 |            100 | 100 |
| Español, móvil     |         100 |           100 |            100 | 100 |

En la última medición inglesa móvil: LCP 0,8 s, CLS 0. Son pruebas de laboratorio locales; no describen latencias reales de GitHub Pages ni garantizan conformidad WCAG completa.

Se corrigieron dos problemas observados en la primera auditoría: contraste de los índices de experiencia y coherencia entre etiquetas visibles y nombres accesibles de los enlaces de marca/idioma.

## Navegación real en Chrome

- Perfil LinkedIn confirmado y leído desde la sesión autorizada; experiencia, formación y certificación contrastadas con el perfil.
- Referencias visuales abiertas y revisadas.
- Revisiones de hero y caso técnico en escritorio y hero en 390 × 844.
- Comprobación de anchura en 390 y 320 px sin desbordamiento horizontal del documento.
- Menú móvil abre, navega y se cierra al elegir sección.
- Cambio español/inglés conserva la sección: `/es/#contact` → `/#contact`.
- Diagrama cambia la descripción y `aria-pressed` con clic; activación con Enter comprobada.
- La lectura de consola durante las pruebas no devolvió errores ni advertencias.
- Capturas: `reports/desktop.jpg`, `reports/mobile.jpg`, `reports/case-study.jpg`.

## Límites y publicación pendiente

No se ha creado el repositorio ni publicado el sitio: Sergio pidió autorización explícita antes de las operaciones externas de publicación. El workflow está preparado, pero no se ha ejecutado en GitHub. Deben comprobarse Actions y https://sergiocorne.github.io/ después de autorizar la publicación.

No hay email ni CV aprobados para publicar. No se han añadido certificaciones en preparación ni proyectos sin fuente. No se han probado lectores de pantalla reales, Safari o Firefox. La revisión de accesibilidad combina HTML semántico, teclado, reglas CSS de foco/movimiento y Lighthouse.

## Revisión visual basada en la captura de Sergio

Se rediseñan hero, navegación, paleta, tarjetas y contacto. El diagrama interactivo pasa al stack. El contenido profesional sigue siendo el mismo.

Comprobaciones repetidas: tipos, lint, formato, build y validación de recursos/enlaces internos, todas correctas. Lighthouse sobre el rediseño: español móvil e inglés escritorio, 100 en Performance, Accessibility, Best Practices y SEO. Informes en `reports/redesign-mobile.report.html` y `reports/redesign-desktop.report.html`.

En Chrome se revisa el hero en escritorio y 390 × 844; se comprueba ausencia de desbordamiento horizontal a 320 px, menú móvil, navegación al stack, diagrama activado con Enter y consola sin errores/advertencias. Capturas actualizadas: `reports/redesign-desktop.jpg` y `reports/redesign-mobile.jpg`. Publicación todavía pendiente de autorización.

## Ajustes de usabilidad y Combat Lab

Se elimina el resaltado estático de GitOps, se amplía de 10 a 14 px el texto explicativo del diagrama y se retiran las flechas y el desplazamiento hover de las seis tarjetas informativas. Se añade Combat Lab mediante datos bilingües en `personalProjects`, con estado en desarrollo y enlaces a la preview y WoAS. Tipos, lint, build y validación de enlaces internos correctos. En Chrome se comprueban los estilos iguales de las cinco etiquetas, ausencia de flechas, tamaño efectivo de 14 px y cambio de descripción al pulsar Argo CD. Las auditorías Lighthouse anteriores corresponden al diseño previo a esta incorporación; no se han repetido para este cambio.
