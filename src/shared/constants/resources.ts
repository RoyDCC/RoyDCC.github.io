export interface Resource {
  pageName: string;
  pageLink: string;
  description: string;
  tags: string[];
  category:
    | "visual assets"
    | "developer tools"
    | "coding practice"
    | "UI/UX & design inspiration"
    | "frameworks & libraries"
    | "learning & reference"
    | "mock APIs & test data"
    | "prototyping"
    | "VS code extensions";
}

export const resources: Resource[] = [
  {
    pageName: "Freepik",
    pageLink: "https://www.freepik.com/author/freepik",
    description:
      "Recurso con vectores, ilustraciones, iconos y fotos, gratuitos y premium.",
    tags: ["stock images", "illustrations", "media", "freemium"],
    category: "visual assets",
  },
  {
    pageName: "Pexels",
    pageLink: "https://www.pexels.com/",
    description:
      "Banco gratuito de fotos y videos libres de derechos para proyectos creativos.",
    tags: ["stock images", "image library", "media"],
    category: "visual assets",
  },
  {
    pageName: "Pixabay",
    pageLink: "https://pixabay.com/es/",
    description:
      "Colección libre de imágenes, vectores, ilustraciones y videos para uso comercial.",
    tags: ["stock images", "illustrations", "media"],
    category: "visual assets",
  },
  {
    pageName: "Unsplash",
    pageLink: "https://unsplash.com/",
    description:
      "Fotos de alta resolución gratuitas para cualquier tipo de proyecto.",
    tags: ["stock images", "photography", "media"],
    category: "visual assets",
  },
  {
    pageName: "Undraw",
    pageLink: "https://undraw.co/illustrations",
    description:
      "Ilustraciones SVG gratuitas, personalizables para proyectos e infografías.",
    tags: ["illustrations", "SVG library", "infographics"],
    category: "visual assets",
  },
  {
    pageLink: "https://devicon.dev/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["icons", "tech logos", "open source", "SVG icons"],
    pageName: "Devicons",
    category: "visual assets",
  },
  {
    pageLink: "https://fontawesome.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["icons", "UI elements", "SVG icons"],
    pageName: "FontAwesome",
    category: "visual assets",
  },
  {
    pageLink: "https://tabler.io/icons",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["icons", "SVG icons", "UI components", "open source"],
    pageName: "Tabler Icons",
    category: "visual assets",
  },
  {
    pageName: "Uiverse",
    pageLink: "https://uiverse.io/",
    description:
      "Fragmentos de código HTML y CSS open source listos para usar en interfaces web.",
    tags: ["UI elements", "CSS", "open source"],
    category: "UI/UX & design inspiration",
  },

  {
    pageName: "Uiball",
    pageLink: "https://uiball.com/",
    description:
      "Loaders y spinners open source en HTML, CSS, SVG, y componentes web.",
    tags: ["loaders", "UI Elements", "NPM", "open source"],
    category: "UI/UX & design inspiration",
  },
  {
    pageName: "ColorHunt",

    pageLink: "https://colorhunt.co/",
    description:
      "Galería online de paletas de colores gratuitas para diseño y desarrollo.",
    tags: ["color palettes", "design resources", "UI/UX"],
    category: "UI/UX & design inspiration",
  },
  {
    pageName: "GoogleFonts",
    pageLink: "https://fonts.google.com/",
    description:
      "Repositorio online gratuito de fuentes tipográficas para uso web y proyectos digitales.",
    tags: ["fonts", "web typography", "open source", "design resources"],
    category: "UI/UX & design inspiration",
  },
  {
    pageName: "Dribble",
    pageLink: "https://dribbble.com/shots",
    description:
      " Inspiración visual en diseño web, UI/UX y branding creada por profesionales de todo el mundo.",
    tags: ["design inspiration", "UI/UX", "graphic design"],
    category: "UI/UX & design inspiration",
  },
  {
    pageName: "Awwwards",
    pageLink: "https://www.awwwards.com/",
    description:
      "Plataforma global que premia y exhibe los sitios web más creativos e innovadores. Inspiración visual para diseño y desarrollo.",
    tags: ["design inspiration", "UI/UX", "web design"],
    category: "UI/UX & design inspiration",
  },
  {
    pageName: "Piktochart",
    pageLink: "https://create.piktochart.com/users/sign_in#text",
    description:
      "Herramienta para crear infografías, reportes y presentaciones visuales con plantillas prediseñadas; versión gratuita limitada.",
    tags: ["infographics", "freemium"],
    category: "UI/UX & design inspiration",
  },
  {
    pageName: "Canva",
    pageLink: "https://www.canva.com/",
    description:
      "Plataforma online para crear diseños gráficos usando plantillas y herramientas visuales.",
    tags: ["templates", "graphic design", "visual content", "freemium"],
    category: "UI/UX & design inspiration",
  },
  {
    pageName: "CodeWars",
    pageLink: "https://www.codewars.com/users/sign_in",
    description:
      "Plataforma para practicar programación con desafíos en múltiples lenguajes.",
    tags: ["programming", "challenges"],
    category: "coding practice",
  },
  {
    pageName: "Leetcode",
    pageLink: "https://leetcode.com/explore/",
    description:
      "Ejercicios de programación para mejorar habilidades técnicas y preparación de entrevistas.",
    tags: ["programming", "technical interviews", "freemium"],
    category: "coding practice",
  },
  {
    pageName: "HackerRank",
    pageLink: "https://www.hackerrank.com/dashboard",
    description:
      "Desafíos de programación y prepararse para entrevistas técnicas.",
    tags: ["programming", "technical interviews"],
    category: "coding practice",
  },
  {
    pageName: "Codeforces",
    pageLink: "https://codeforces.com/",
    description:
      "Plataforma competitiva para practicar algoritmos y programación con concursos en tiempo real.",
    tags: ["competitive programming", "coding contests"],
    category: "coding practice",
  },
  {
    pageName: "Frontend Practice",
    pageLink: "https://www.frontendpractice.com/",
    description:
      "Ejercicios para recrear sitios web reales, para mejorar habilidades de frontend.",
    tags: ["web development", "frontend code"],
    category: "coding practice",
  },
  {
    pageName: "Uizard",
    pageLink: "https://app.uizard.io/prototypes",
    description:
      "Creacion de  prototipos, wireframes y mockups interactivo. Versión gratuita limitada.",
    tags: ["templates", "UI/UX", "freemium"],
    category: "prototyping",
  },
  {
    pageName: "Bootstrap",
    pageLink: "https://getbootstrap.com/docs/5.3/components/navbar/",
    description:
      "Framework CSS open source para crear interfaces web responsivas y móviles con componentes listos para usar.",
    tags: ["CSS", "UI components", "open source"],
    category: "frameworks & libraries",
  },
  {
    pageName: "Animation.css",
    pageLink: "https://animate.style/",
    description:
      "Librería CSS de animaciones listas para usar, instalable vía npm o CDN, para mejorar interfaces web.",
    tags: ["CSS", "NPM", "open source"],
    category: "frameworks & libraries",
  },
  {
    pageName: "OverAPI",
    pageLink: "https://overapi.com/",
    description:
      "Colección online de documentación y hojas de referencia para múltiples lenguajes y tecnologías.",
    tags: ["quick reference", "cheat sheets"],
    category: "learning & reference",
  },
  {
    pageName: "JS Info",
    pageLink: "https://javascript.info/",
    description:
      "Documentación completa y actualizada de JavaScript, desde lo básico hasta temas avanzados.",
    tags: ["JavaScript", "JS tutorial", "programming"],
    category: "learning & reference",
  },
  {
    pageName: "Shortcut Code",
    pageLink: "https://shortcode.dev/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["code snippets", "example code"],
    category: "learning & reference",
  },
  {
    pageName: "VS Code Editing",
    pageLink: "https://code.visualstudio.com/docs/editing/codebasics",
    description:
      "Documentación oficial de Visual Studio Code enfocada en técnicas para editar código más rápido y eficiente.",
    tags: ["VS Code", "code editor", "productivity"],
    category: "learning & reference",
  },
  {
    pageName: "BulkResize",
    pageLink: "https://bulkresizephotos.com/en",
    description:
      "Herramienta web para optimizar múltiples imágenes, con opciones de formato y tamaño.",
    tags: ["image optimization", "compressor", "online tool"],
    category: "developer tools",
  },
  {
    pageName: "Imgur",
    pageLink: "https://imgur.com/",
    description:
      "Plataforma para almacenar, compartir y enlazar imágenes de forma rápida.",
    tags: ["image hosting", "media storage", "online gallery"],
    category: "developer tools",
  },
  {
    pageName: "VirusTotal",
    pageLink: "https://www.virustotal.com/gui/home/upload",
    description:
      "Herramienta online para analizar URLs y archivos en busca de malware usando múltiples proveedores de seguridad.",
    tags: ["malware scan", "security", "online tool"],
    category: "developer tools",
  },
  {
    pageName: "PageSpeed",
    pageLink: "https://pagespeed.web.dev/",
    description:
      "Herramienta online de Google para analizar y calificar el rendimiento y optimización de páginas web.",
    tags: ["web optimization", "performance", "SEO", "online tool"],
    category: "developer tools",
  },
  {
    pageName: "XML Sitemap",
    pageLink: "https://www.xml-sitemaps.com/",
    description:
      "Generador online de archivos sitemap XML para mejorar la indexación web.",
    tags: ["SEO", "online tool"],
    category: "developer tools",
  },
  {
    pageName: "Bennettfeely",
    pageLink: "https://bennettfeely.com/clippy/",
    description:
      "Generador visual online para crear formas CSS usando clip-path.",
    tags: ["CSS", "visual tool", "online tool", "design resources"],
    category: "developer tools",
  },
  {
    pageName: "RandomUser",
    pageLink: "https://randomuser.me/",
    description:
      "API gratuita para generar datos ficticios de usuarios para pruebas y prototipos.",
    tags: ["API", "mock data", "open source", "developer tool"],
    category: "mock APIs & test data",
  },
  {
    pageName: "StoreAPI",
    pageLink: "https://fakestoreapi.com/",
    description:
      "API gratuita que ofrece datos de comercio electrónico para prototipos y pruebas.",
    tags: ["API", "mock data", "open source", "developer tool"],
    category: "mock APIs & test data",
  },
  {
    pageName: "Jsoncrack",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=AykutSarac.jsoncrack-vscode",
    description:
      "Extensión para VS Code que visualiza archivos JSON en forma gráfica y fácil de explorar.",
    tags: ["visual tool"],
    category: "VS code extensions",
  },
  {
    pageName: "Auto Close Tag",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag",
    description:
      "Extensión para VS Code que cierra automáticamente etiquetas HTML y JSX cuando se abre una nueva.",
    tags: ["HTML", "productivity", "markup"],
    category: "VS code extensions",
  },
  {
    pageName: "Auto Rename Tag",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag",
    description:
      "Extension que renombra automáticamente etiquetas HTML o JSX al editar.",
    tags: ["HTML", "productivity", "markup"],
    category: "VS code extensions",
  },
  {
    pageName: "Better Comments",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments",
    description: "Personaliza comentarios con colores según su tipo o prefijo.",
    tags: ["productivity", "comments"],
    category: "VS code extensions",
  },
  {
    pageName: "CodeSnap",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap",
    description:
      "Captura y guarda screenshots estéticos de tu código desde VS Code.",
    tags: ["screenshots", "productivity", "visual tool"],
    category: "VS code extensions",
  },
  {
    pageName: "Image Preview",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview",
    description:
      "Muestra una vista previa de imágenes en el gutter y al pasar el cursor en VS Code.",
    tags: ["images", "productivity"],
    category: "VS code extensions",
  },
  {
    pageName: "Tailwind CSS IntelliSense",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
    description: "IntelliSense para clases de Tailwind CSS en VS Code.",
    tags: ["tailwind ", "CSS", "productivity"],
    category: "VS code extensions",
  },
  {
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek",
    description:
      "Permite navegar y editar selectores CSS directamente desde HTML.",
    tags: ["CSS", "navigation", "code editor"],
    pageName: "CSS Peek",
    category: "VS code extensions",
  },
  {
    pageName: "Todo Tree",
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree",
    description:
      "Extensión que busca y muestra en árbol los comentarios TODO y FIXME en tu proyecto.",
    tags: ["comments", "productivity"],
    category: "VS code extensions",
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
    category: "VS code extensions",
  },
  {
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme",
    description: "Tema icónico de Atom para VS Code.",
    tags: ["theme", "dark mode"],
    pageName: "One Dark Pro",
    category: "VS code extensions",
  },
  {
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=EliverLara.andromeda",
    description:
      "Tema oscuro para Visual Studio Code con esquema de colores Andromeda.",
    tags: ["theme", "dark mode"],
    pageName: "Andromeda Theme",
    category: "VS code extensions",
  },
  {
    pageLink:
      "https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula",
    description:
      "Tema oscuro para Visual Studio Code basado en la paleta Dracula.",
    tags: ["theme", "dark mode", "UI"],
    pageName: "Dracula Theme",
    category: "VS code extensions",
  },
];
