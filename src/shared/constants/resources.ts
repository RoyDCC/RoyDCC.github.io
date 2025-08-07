export interface Resource {
  pageName: string;
  pageLink: string;
  description: string;
  tags: string[];
  category:
    | "graphic elements"
    | "coding practice"
    | "design"
    | "libraries"
    | "documentation"
    | "tools"
    | "others";
}

export const resources: Resource[] = [
  // Graphic
  {
    pageName: "Freepik",
    pageLink: "https://www.freepik.com/author/freepik",
    description:
      "Recurso con vectores, ilustraciones, iconos y fotos, gratuitos y premium.",
    tags: ["stock images", "illustrations", "media", "freemium"],
    category: "graphic elements",
  },
  {
    pageName: "Pexels",
    pageLink: "https://www.pexels.com/",
    description:
      "Banco gratuito de fotos y videos libres de derechos para proyectos creativos.",
    tags: ["stock images", "image library", "media"],
    category: "graphic elements",
  },
  {
    pageName: "Pixabay",
    pageLink: "https://pixabay.com/es/",
    description:
      "Colección libre de imágenes, vectores, ilustraciones y videos para uso comercial.",
    tags: ["stock images", "illustrations", "media"],
    category: "graphic elements",
  },
  {
    pageName: "Unsplash",
    pageLink: "https://unsplash.com/",
    description:
      "Fotos de alta resolución gratuitas para cualquier tipo de proyecto.",
    tags: ["stock images", "photography", "media"],
    category: "graphic elements",
  },
  {
    pageName: "Uiverse",
    pageLink: "https://uiverse.io/",
    description:
      "Fragmentos de código HTML y CSS open source listos para usar en interfaces web.",
    tags: ["UI elements", "CSS", "open source"],
    category: "graphic elements",
  },
  {
    pageName: "Undraw",
    pageLink: "https://undraw.co/illustrations",
    description:
      "Ilustraciones SVG gratuitas, personalizables para proyectos e infografías.",
    tags: ["illustrations", "SVG library", "infographics"],
    category: "graphic elements",
  },
  {
    pageName: "Uiball",
    pageLink: "https://uiball.com/",
    description:
      "Loaders y spinners open source en HTML, CSS, SVG, y componentes web.",
    tags: ["loaders", "UI Elements", "NPM", "open source"],
    category: "graphic elements",
  },
  {
    pageLink: "https://devicon.dev/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["icons", "tech logos", "open source", "SVG icons"],
    pageName: "Devicons",
    category: "graphic elements",
  },
  // Practice
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
    description: "Plataforma competitiva para practicar algoritmos y programación con concursos en tiempo real.",
    tags: ["competitive programming", "coding contests"],
    category: "coding practice",
  },
  {
    pageName: "Frontend Practice",
    pageLink: "https://www.frontendpractice.com/",
    description: "Ejercicios para recrear sitios web reales, para mejorar habilidades de frontend.",
    tags: ["web development", "frontend code"],
    category: "coding practice",
  },
  // Design
  {
    pageLink: "https://app.uizard.io/prototypes",
    description: "Creacion de  prototipos, wireframes y mockups interactivo. Versión gratuita limitada.",
    tags: ["prototyping", "templates","UI/UX", "freemium"],
    pageName: "Uizard",
    category: "design",
  },
  {
    pageLink: "https://dribbble.com/shots",
    description: " Inspiración visual en diseño web, UI/UX y branding creada por profesionales de todo el mundo.",
    tags: ["design inspiration", "UI/UX", "graphic design"],
    pageName: "Dribble",
    category: "design",
  },
  {
    pageLink: "https://www.awwwards.com/",
    description: "Plataforma global que premia y exhibe los sitios web más creativos e innovadores. Inspiración visual para diseño y desarrollo.",
    tags: ["design inspiration", "UI/UX", "web design"],
    pageName: "Awwwards",
    category: "design",
  },
  {
    pageLink: "https://create.piktochart.com/users/sign_in#text",
    description: "Herramienta para crear infografías, reportes y presentaciones visuales con plantillas prediseñadas; versión gratuita limitada.",
    tags: ["infographics", "freemium"],
    pageName: "Piktochart",
    category: "design",
  },
  {
    pageLink: "https://www.canva.com/",
    description:
      "Plataforma online para crear diseños gráficos usando plantillas y herramientas visuales.",
    tags: ["templates", "graphic design", "visual content", "freemium"],
    pageName: "Canva",
    category: "design",
  },
  // Libraries
  {
    pageLink: "https://fontawesome.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["icons", "UI elements", "SVG icons"],
    pageName: "FontAwesome",
    category: "libraries",
  },
  {
    pageLink: "https://getbootstrap.com/docs/5.3/components/navbar/",
    description: "Framework CSS open source para crear interfaces web responsivas y móviles con componentes listos para usar.",
    tags: ["CSS", "UI components", "open source"],
    pageName: "Bootstrap",
    category: "libraries",
  },
  {
    pageLink: "https://animate.style/",
    description: "Librería CSS de animaciones listas para usar, instalable vía npm o CDN, para mejorar interfaces web.",
    tags: ["CSS", "NPM", "open source"],
    pageName: "Animation.css",
    category: "libraries",
  },
  {
    pageLink: "https://tabler.io/icons",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["icons", "SVG icons", "UI components","open source"],
    pageName: "Tabler Icons",
    category: "libraries",
  },
  // Documentation
  {
    pageLink: "https://overapi.com/",
    description: "Colección online de documentación y hojas de referencia para múltiples lenguajes y tecnologías.",
    tags: ["quick reference", "cheat sheets"],
    pageName: "OverAPI",
    category: "documentation",
  },
  {
    pageLink: "https://javascript.info/",
    description: "Documentación completa y actualizada de JavaScript, desde lo básico hasta temas avanzados.",
    tags: ["JavaScript", "JS tutorial", "programming"],
    pageName: "JS Info",
    category: "documentation",
  },
  {
    pageLink: "https://shortcode.dev/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["code snippets", "example code"],
    pageName: "Shortcut Code",
    category: "documentation",
  },
  {
    pageLink: "https://code.visualstudio.com/docs/editing/codebasics",
    description: "Documentación oficial de Visual Studio Code enfocada en técnicas para editar código más rápido y eficiente.",
    tags: ["VS Code", "code editor", "productivity"],
    pageName: "VS Code Editing",
    category: "documentation",
  },
  // Tools
  {
    pageLink: "https://bulkresizephotos.com/en",
    description: "Herramienta web para optimizar múltiples imágenes, con opciones de formato y tamaño.",
    tags: ["image optimization", "compressor", "online tool"],
    pageName: "BulkResize",
    category: "tools",
  },
  {
    pageLink: "https://imgur.com/",
    description: "Plataforma para almacenar, compartir y enlazar imágenes de forma rápida.",
    tags: ["image hosting", "media storage", "online gallery"],
    pageName: "Imgur",
    category: "tools",
  },
  {
    pageLink: "https://www.virustotal.com/gui/home/upload",
    description: "Herramienta online para analizar URLs y archivos en busca de malware usando múltiples proveedores de seguridad.",
    tags: ["malware scan", "security", "online tool"],
    pageName: "VirusTotal",
    category: "tools",
  },
  {
    pageLink: "https://pagespeed.web.dev/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "PageSpeed",
    category: "tools",
  },
  {
    pageLink: "https://www.xml-sitemaps.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "XML Sitemap",
    category: "tools",
  },
  {
    pageLink: "https://jsoncrack.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "Jsoncrack",
    category: "tools",
  },
  {
    pageLink: "https://fonts.google.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "GoogleFonts",
    category: "others",
  },
  {
    pageLink: "https://colorhunt.co/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "ColorHunt",
    category: "others",
  },
  {
    pageLink: "https://bennettfeely.com/clippy/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "ClipPath",
    category: "others",
  },
  {
    pageLink: "https://randomuser.me/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "RandomUser",
    category: "others",
  },
  {
    pageLink: "https://fakestoreapi.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "StoreAPI",
    category: "others",
  },
];
