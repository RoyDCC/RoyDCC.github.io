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
    tags: ["stock images", "illustrations", "media"],
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
      "Fragmentos de código HTML y CSS open source para interfaces web.",
    tags: ["UI elements", "CSS", "open source"],
    category: "graphic elements",
  },
  {
    pageName: "Undraw",
    pageLink: "https://undraw.co/illustrations",
    description:
      "Ilustraciones SVG gratuitas, personalizables para proyectos e infografías.",
    tags: ["illustrations", "svg library", "infographics"],
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
    tags: ["icons", "tech logos", "open source"],
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
    tags: ["programming", "technical interviews"],
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
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "Uizard",
    category: "design",
  },
  {
    pageLink: "https://dribbble.com/shots",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "Dribble",
    category: "design",
  },
  {
    pageLink: "https://online.visual-paradigm.com/login.jsp?t=diagrams",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "Visual Paradigm",
    category: "design",
  },
  {
    pageLink: "https://create.piktochart.com/users/sign_in#text",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "Piktochart",
    category: "design",
  },
  {
    pageLink: "https://www.canva.com/",
    description:
      "Plataforma online para crear diseños gráficos usando plantillas y herramientas visuales.",
    tags: ["templates", "graphic design", "visual content"],
    pageName: "Canva",
    category: "design",
  },
  // Libraries
  {
    pageLink: "https://fontawesome.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["Vue", "tag2"],
    pageName: "FontAwesome",
    category: "libraries",
  },
  {
    pageLink: "https://getbootstrap.com/docs/5.3/components/navbar/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "Bootstrap",
    category: "libraries",
  },
  {
    pageLink: "https://animate.style/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "Animation.css",
    category: "libraries",
  },
  {
    pageLink: "https://tabler-icons.io/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "Tabler Icons",
    category: "libraries",
  },
  // Documentation
  {
    pageLink: "https://overapi.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "OverAPI",
    category: "documentation",
  },
  {
    pageLink: "https://javascript.info/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "JS Info",
    category: "documentation",
  },
  {
    pageLink: "https://shortcode.dev/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "Shortcut Code",
    category: "documentation",
  },
  {
    pageLink: "https://code.visualstudio.com/docs/editing/codebasics",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "VS Code Editing",
    category: "documentation",
  },
  // Tools
  {
    pageLink: "https://bulkresizephotos.com/en",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "BulkResize",
    category: "tools",
  },
  {
    pageLink: "https://imgur.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
    pageName: "Imgur",
    category: "tools",
  },
  {
    pageLink: "https://www.virustotal.com/gui/home/upload",
    description: "Descripcion generica del recurso como placeholder",
    tags: ["tag1", "tag2"],
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
