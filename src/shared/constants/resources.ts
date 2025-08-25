import { categories, type Resource } from "../interfaces/resource.interface";

export const resources: Resource[] = [
  {
    pageName: "Freepik",
    pageLink: "https://www.freepik.com/author/freepik",
    description:
      "Recurso con vectores, ilustraciones, iconos y fotos, gratuitos y premium.",
    tags: ["stock images", "illustrations", "media", "freemium"],
    category: categories.VISUAL_ASSETS,
  },
  {
    pageName: "Pexels",
    pageLink: "https://www.pexels.com/",
    description:
      "Banco gratuito de fotos y videos libres de derechos para proyectos creativos.",
    tags: ["stock images", "image library", "media"],
    category: categories.VISUAL_ASSETS,
  },
  {
    pageName: "Pixabay",
    pageLink: "https://pixabay.com/es/",
    description:
      "Colección libre de imágenes, vectores, ilustraciones y videos para uso comercial.",
    tags: ["stock images", "illustrations", "media"],
    category: categories.VISUAL_ASSETS,
  },
  {
    pageName: "Unsplash",
    pageLink: "https://unsplash.com/",
    description:
      "Fotos de alta resolución gratuitas para cualquier tipo de proyecto.",
    tags: ["stock images", "photography", "media"],
    category: categories.VISUAL_ASSETS,
  },
  {
    pageName: "Undraw",
    pageLink: "https://undraw.co/illustrations",
    description:
      "Ilustraciones SVG gratuitas, personalizables para proyectos e infografías.",
    tags: ["illustrations", "SVG library", "infographics"],
    category: categories.VISUAL_ASSETS,
  },
  {
    pageLink: "https://devicon.dev/",
    description:
      "Biblioteca de íconos SVG de tecnologías, lenguajes y herramientas para proyectos de desarrollo.",
    tags: ["icons", "tech logos", "open source", "SVG icons"],
    pageName: "Devicons",
    category: categories.VISUAL_ASSETS,
  },
  {
    pageLink: "https://fontawesome.com/",
    description:
      "Colección de íconos vectoriales personalizables para interfaces web y móviles.",
    tags: ["icons", "UI elements", "SVG icons"],
    pageName: "FontAwesome",
    category: categories.VISUAL_ASSETS,
  },
  {
    pageLink: "https://tabler.io/icons",
    description:
      "Set de íconos SVG open source para usar en aplicaciones y paneles de usuario.",
    tags: ["icons", "SVG icons", "UI components", "open source"],
    pageName: "Tabler Icons",
    category: categories.VISUAL_ASSETS,
  },
  {
    pageName: "Driver JS",
    pageLink: "https://driverjs.com/docs/installation",
    description:
      "Librería JavaScript para guiar al usuario con tours interactivos, popovers y resaltado de elementos.",
    tags: ["JavaScript", "UX", "NPM", "tutorials"],
    category: categories.UI_UX_DESIGN_INSPIRATION,
  },
  {
    pageName: "Uiverse",
    pageLink: "https://uiverse.io/",
    description:
      "Fragmentos de código HTML y CSS open source listos para usar en interfaces web.",
    tags: ["UI elements", "CSS", "open source"],
    category: categories.UI_UX_DESIGN_INSPIRATION,
  },
  {
    pageName: "Uiball",
    pageLink: "https://uiball.com/",
    description:
      "Loaders y spinners open source en HTML, CSS, SVG, y componentes web.",
    tags: ["loaders", "UI Elements", "NPM", "open source"],
    category: categories.UI_UX_DESIGN_INSPIRATION,
  },
  {
    pageName: "CSS Loaders",
    pageLink: "https://css-loaders.com/",
    description:
      "Colección de loaders y spinners animados hechos con CSS, listos para copiar y usar.",
    tags: ["CSS", "loaders", "UI elements", "open source"],
    category: categories.UI_UX_DESIGN_INSPIRATION,
  },
  {
    pageName: "ColorHunt",

    pageLink: "https://colorhunt.co/",
    description:
      "Galería online de paletas de colores gratuitas para diseño y desarrollo.",
    tags: ["color palettes", "design resources", "UI/UX"],
    category: categories.UI_UX_DESIGN_INSPIRATION,
  },
  {
    pageName: "GoogleFonts",
    pageLink: "https://fonts.google.com/",
    description:
      "Repositorio online gratuito de fuentes tipográficas para uso web y proyectos digitales.",
    tags: ["fonts", "web typography", "open source", "design resources"],
    category: categories.UI_UX_DESIGN_INSPIRATION,
  },
  {
    pageName: "Dribble",
    pageLink: "https://dribbble.com/shots",
    description:
      " Inspiración visual en diseño web, UI/UX y branding creada por profesionales de todo el mundo.",
    tags: ["design inspiration", "UI/UX", "graphic design"],
    category: categories.UI_UX_DESIGN_INSPIRATION,
  },
  {
    pageName: "Awwwards",
    pageLink: "https://www.awwwards.com/",
    description:
      "Plataforma global que premia y exhibe los sitios web más creativos e innovadores. Inspiración visual para diseño y desarrollo.",
    tags: ["design inspiration", "UI/UX", "web design"],
    category: categories.UI_UX_DESIGN_INSPIRATION,
  },
  {
    pageName: "Piktochart",
    pageLink: "https://create.piktochart.com/users/sign_in#text",
    description:
      "Herramienta para crear infografías, reportes y presentaciones visuales con plantillas prediseñadas; versión gratuita limitada.",
    tags: ["infographics", "freemium"],
    category: categories.UI_UX_DESIGN_INSPIRATION,
  },
  {
    pageName: "Canva",
    pageLink: "https://www.canva.com/",
    description:
      "Plataforma online para crear diseños gráficos usando plantillas y herramientas visuales.",
    tags: ["templates", "graphic design", "visual content", "freemium"],
    category: categories.UI_UX_DESIGN_INSPIRATION,
  },
  {
    pageName: "CodeWars",
    pageLink: "https://www.codewars.com/users/sign_in",
    description:
      "Plataforma para practicar programación con desafíos en múltiples lenguajes.",
    tags: ["programming", "challenges"],
    category: categories.CODING_PRACTICE,
  },
  {
    pageName: "Leetcode",
    pageLink: "https://leetcode.com/explore/",
    description:
      "Ejercicios de programación para mejorar habilidades técnicas y preparación de entrevistas.",
    tags: ["programming", "technical interviews", "freemium"],
    category: categories.CODING_PRACTICE,
  },
  {
    pageName: "HackerRank",
    pageLink: "https://www.hackerrank.com/dashboard",
    description:
      "Desafíos de programación y prepararse para entrevistas técnicas.",
    tags: ["programming", "technical interviews"],
    category: categories.CODING_PRACTICE,
  },
  {
    pageName: "Codeforces",
    pageLink: "https://codeforces.com/",
    description:
      "Plataforma competitiva para practicar algoritmos y programación con concursos en tiempo real.",
    tags: ["competitive programming", "coding contests"],
    category: categories.CODING_PRACTICE,
  },
  {
    pageName: "Frontend Practice",
    pageLink: "https://www.frontendpractice.com/",
    description:
      "Ejercicios para recrear sitios web reales, para mejorar habilidades de frontend.",
    tags: ["web development", "frontend code"],
    category: categories.CODING_PRACTICE,
  },
  {
    pageName: "Uizard",
    pageLink: "https://app.uizard.io/prototypes",
    description:
      "Creacion de  prototipos, wireframes y mockups interactivo. Versión gratuita limitada.",
    tags: ["templates", "UI/UX", "freemium"],
    category: categories.PROTOTYPING,
  },
  {
    pageName: "Bootstrap",
    pageLink: "https://getbootstrap.com/docs/5.3/components/navbar/",
    description:
      "Framework CSS open source para crear interfaces web responsivas y móviles con componentes listos para usar.",
    tags: ["CSS", "UI components", "open source", "framework"],
    category: categories.FRAMEWORKS_LIBRARIES,
  },
  {
    pageName: "Tailwind CSS",
    pageLink: "https://tailwindcss.com/",
    description:
      "Framework CSS utilitario para crear interfaces mediante clases predefinidas.",
    tags: ["CSS", "UI components", "open source", "framework"],
    category: categories.FRAMEWORKS_LIBRARIES,
  },
  {
    pageName: "DaisyUI",
    pageLink: "https://daisyui.com/docs/install/",
    description:
      "Plugin de Tailwind CSS que añade componentes y temas listos para usar en interfaces web.",
    tags: ["tailwind", "CSS", "UI components", "themes", "open source"],
    category: categories.FRAMEWORKS_LIBRARIES,
  },
  {
    pageName: "Animation.css",
    pageLink: "https://animate.style/",
    description:
      "Librería CSS de animaciones listas para usar, instalable vía npm o CDN, para mejorar interfaces web.",
    tags: ["CSS", "NPM", "open source"],
    category: categories.FRAMEWORKS_LIBRARIES,
  },
  {
    pageName: "GSAP",
    pageLink: "https://gsap.com/",
    description:
      "Plataforma de animación en JavaScript para crear transiciones y secuencias complejas en la web.",
    tags: ["JavaScript", "animations", "CSS", "UI/UX", "open source", "JS"],
    category: categories.FRAMEWORKS_LIBRARIES,
  },
  {
    pageName: "Anime JS",
    pageLink: "https://animejs.com/",
    description:
      "Librería ligera de JavaScript para animar propiedades CSS, SVG, DOM y objetos JavaScript.",
    tags: ["JavaScript", "animations", "CSS", "SVG", "open source", "JS"],
    category: categories.FRAMEWORKS_LIBRARIES,
  },
  {
    pageName: "Tempo",
    pageLink: "https://tempo.formkit.com/",
    description: "Librería ligera para manipulación y formateo de fechas en JavaScript.",
    tags: ["JavaScript", "dates", "NPM", "JS", "open source"],
    category: categories.FRAMEWORKS_LIBRARIES,
  },
  {
    pageName: "OverAPI",
    pageLink: "https://overapi.com/",
    description:
      "Colección online de documentación y hojas de referencia para múltiples lenguajes y tecnologías.",
    tags: ["quick reference", "cheat sheets"],
    category: categories.LEARNING_REFERENCE,
  },
  {
    pageName: "JS Info",
    pageLink: "https://javascript.info/",
    description:
      "Documentación completa y actualizada de JavaScript, desde lo básico hasta temas avanzados.",
    tags: ["JavaScript", "JS tutorial", "programming"],
    category: categories.LEARNING_REFERENCE,
  },
  {
    pageName: "VS Code Editing",
    pageLink: "https://code.visualstudio.com/docs/editing/codebasics",
    description:
      "Documentación oficial de Visual Studio Code enfocada en técnicas para editar código más rápido y eficiente.",
    tags: ["VS Code", "code editor", "productivity"],
    category: categories.LEARNING_REFERENCE,
  },
  {
    pageName: "DB Diagram",
    pageLink: "https://dbdiagram.io/home",
    description:
      "Herramienta online para crear diagramas ER de bases de datos de forma visual.",
    tags: ["database", "ER diagrams", "visual tool", "online tool"],
    category: categories.DEVELOPER_TOOLS,
  },
  {
    pageName: "CSS Grid Generator",
    pageLink: "https://cssgridgenerator.io/",
    description:
      "Herremienta para generar layouts con CSS Grid y obtener el código listo para usar.",
    tags: ["CSS", "grid", "layout", "visual tool", "online tool"],
    category: categories.DEVELOPER_TOOLS,
  },
  {
    pageName: "BulkResize",
    pageLink: "https://bulkresizephotos.com/en",
    description:
      "Herramienta web para optimizar múltiples imágenes, con opciones de formato y tamaño.",
    tags: ["image optimization", "compressor", "online tool"],
    category: categories.DEVELOPER_TOOLS,
  },
  {
    pageName: "Imgur",
    pageLink: "https://imgur.com/",
    description:
      "Plataforma para almacenar, compartir y enlazar imágenes de forma rápida.",
    tags: ["image hosting", "media storage", "online gallery"],
    category: categories.DEVELOPER_TOOLS,
  },
  {
    pageName: "VirusTotal",
    pageLink: "https://www.virustotal.com/gui/home/upload",
    description:
      "Herramienta online para analizar URLs y archivos en busca de malware usando múltiples proveedores de seguridad.",
    tags: ["malware scan", "security", "online tool"],
    category: categories.DEVELOPER_TOOLS,
  },
  {
    pageName: "PageSpeed",
    pageLink: "https://pagespeed.web.dev/",
    description:
      "Herramienta online de Google para analizar y calificar el rendimiento y optimización de páginas web.",
    tags: ["web optimization", "performance", "SEO", "online tool"],
    category: categories.DEVELOPER_TOOLS,
  },
  {
    pageName: "XML Sitemap",
    pageLink: "https://www.xml-sitemaps.com/",
    description:
      "Generador online de archivos sitemap XML para mejorar la indexación web.",
    tags: ["SEO", "online tool"],
    category: categories.DEVELOPER_TOOLS,
  },
  {
    pageName: "Bennettfeely",
    pageLink: "https://bennettfeely.com/clippy/",
    description:
      "Generador visual online para crear formas CSS usando clip-path.",
    tags: ["CSS", "visual tool", "online tool", "design resources"],
    category: categories.DEVELOPER_TOOLS,
  },
  {
    pageName: "Public APIs",
    pageLink: "https://publicapis.dev/",
    description:
      "Directorio online con una colección de APIs públicas organizadas por categorías y temas.",
    tags: ["API", "developer tool", "open source"],
    category: categories.MOCK_APIS_TEST_DATA,
  },

  {
    pageName: "RandomUser",
    pageLink: "https://randomuser.me/",
    description:
      "API gratuita para generar datos ficticios de usuarios para pruebas y prototipos.",
    tags: ["API", "mock data", "open source", "developer tool"],
    category: categories.MOCK_APIS_TEST_DATA,
  },
  {
    pageName: "StoreAPI",
    pageLink: "https://fakestoreapi.com/",
    description:
      "API gratuita que ofrece datos de comercio electrónico para prototipos y pruebas.",
    tags: ["API", "mock data", "open source", "developer tool"],
    category: categories.MOCK_APIS_TEST_DATA,
  },
  {
    pageName: "Jsoncrack",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=AykutSarac.jsoncrack-vscode",
    description:
      "Extensión para VS Code que visualiza archivos JSON en forma gráfica y fácil de explorar.",
    tags: ["visual tool"],
    category: categories.VS_CODE_EXTENSIONS,
  },
  {
    pageName: "Auto Close Tag",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag",
    description:
      "Extensión para VS Code que cierra automáticamente etiquetas HTML y JSX cuando se abre una nueva.",
    tags: ["HTML", "productivity", "markup"],
    category: categories.VS_CODE_EXTENSIONS,
  },
  {
    pageName: "Auto Rename Tag",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",
    description:
      "Extension que renombra automáticamente etiquetas HTML o JSX al editar.",
    tags: ["HTML", "productivity", "markup"],
    category: categories.VS_CODE_EXTENSIONS,
  },
  {
    pageName: "Better Comments",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments",
    description: "Personaliza comentarios con colores según su tipo o prefijo.",
    tags: ["productivity", "comments"],
    category: categories.VS_CODE_EXTENSIONS,
  },
  {
    pageName: "CodeSnap",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap",
    description:
      "Captura y guarda screenshots estéticos de tu código desde VS Code.",
    tags: ["screenshots", "productivity", "visual tool"],
    category: categories.VS_CODE_EXTENSIONS,
  },
  {
    pageName: "Image Preview",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview",
    description:
      "Muestra una vista previa de imágenes en el gutter y al pasar el cursor en VS Code.",
    tags: ["images", "productivity"],
    category: categories.VS_CODE_EXTENSIONS,
  },
  {
    pageName: "Tailwind CSS IntelliSense",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
    description: "IntelliSense para clases de Tailwind CSS en VS Code.",
    tags: ["tailwind ", "CSS", "productivity"],
    category: categories.VS_CODE_EXTENSIONS,
  },
  {
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek",
    description:
      "Permite navegar y editar selectores CSS directamente desde HTML.",
    tags: ["CSS", "navigation", "code editor"],
    pageName: "CSS Peek",
    category: categories.VS_CODE_EXTENSIONS,
  },
  {
    pageName: "Todo Tree",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree",
    description:
      "Extensión que busca y muestra en árbol los comentarios TODO y FIXME en tu proyecto.",
    tags: ["comments", "productivity"],
    category: categories.VS_CODE_EXTENSIONS,
  },
  {
    pageName: "Prettier",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
    description:
      "Formateador de código que aplica un estilo consistente automáticamente en múltiples lenguajes.",
    tags: [
      "code formatter",
      "productivity",
      "HTML",
      "JavaScript",
      "TypeScript",
      "CSS",
    ],
    category: categories.VS_CODE_EXTENSIONS,
  },
  {
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme",
    description: "Tema icónico de Atom para VS Code.",
    tags: ["theme", "dark mode"],
    pageName: "One Dark Pro",
    category: categories.VS_CODE_EXTENSIONS,
  },
  {
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=EliverLara.andromeda",
    description:
      "Tema oscuro para Visual Studio Code con esquema de colores Andromeda.",
    tags: ["theme", "dark mode"],
    pageName: "Andromeda Theme",
    category: categories.VS_CODE_EXTENSIONS,
  },
  {
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula",
    description:
      "Tema oscuro para Visual Studio Code basado en la paleta Dracula.",
    tags: ["theme", "dark mode", "UI"],
    pageName: "Dracula Theme",
    category: categories.VS_CODE_EXTENSIONS,
  },
];
