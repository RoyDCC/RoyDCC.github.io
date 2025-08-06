export interface Resource {
  pageName: string;
  pageLink: string;
  description: string;
  tags: string[];
  category:
    | "graphic"
    | "coding"
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
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "graphic",
  },
  {
    pageName: "Pexels",
    pageLink: "https://www.pexels.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "graphic",
  },
  {
    pageName: "Pixabay",
    pageLink: "https://pixabay.com/es/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "graphic",
  },
  {
    pageName: "Unsplash",
    pageLink: "https://unsplash.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "graphic",
  },
  {
    pageName: "Giphy",
    pageLink: "https://giphy.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "graphic",
  },
  {
    pageName: "Uiverse",
    pageLink: "https://uiverse.io/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "graphic",
  },
  {
    pageName: "Undraw",
    pageLink: "https://undraw.co/illustrations",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "graphic",
  },
  {
    pageName: "Uiball",
    pageLink: "https://uiball.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "graphic",
  },
  // Practice
  {
    pageName: "CodeWars",
    pageLink: "https://www.codewars.com/users/sign_in",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "coding",
  },
  {
    pageName: "Leetcode",
    pageLink: "https://leetcode.com/explore/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "coding",
  },
  {
    pageName: "HackerRank",
    pageLink: "https://www.hackerrank.com/dashboard",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "coding",
  },
  {
    pageName: "Codeforces",
    pageLink: "https://codeforces.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "coding",
  },
  {
    pageName: "EdX",
    pageLink: "https://www.edx.org/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "coding",
  },
  {
    pageName: "Learn X in Y minutes",
    pageLink: "https://learnxinyminutes.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "coding",
  },
  {
    pageName: "Frontend Practice",
    pageLink: "https://www.frontendpractice.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "coding",
  },
  {
    pageName: "Codecademy",
    pageLink: "https://www.codecademy.com/catalog",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    category: "coding",
  },
  // Design
  {
    pageLink: "https://app.uizard.io/prototypes",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "Uizard",
    category: "design",
  },
  {
    pageLink: "https://dribbble.com/shots",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "Dribble",
    category: "design",
  },
  {
    pageLink: "https://online.visual-paradigm.com/login.jsp?t=diagrams",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "Visual Paradigm",
    category: "design",
  },
  {
    pageLink: "https://create.piktochart.com/users/sign_in#text",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "Piktochart",
    category: "design",
  },
  {
    pageLink: "https://www.canva.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "Canva",
    category: "design",
  },
  // Libraries
  {
    pageLink: "https://fontawesome.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "FontAwesome",
    category: "libraries",
  },
  {
    pageLink: "https://getbootstrap.com/docs/5.3/components/navbar/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "Bootstrap",
    category: "libraries",
  },
  {
    pageLink: "https://animate.style/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "Animation.css",
    category: "libraries",
  },
  {
    pageLink: "https://devicon.dev/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "Devicons",
    category: "graphic",
  },
  {
    pageLink: "https://tabler-icons.io/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "Tabler Icons",
    category: "libraries",
  },
  // Documentation
  {
    pageLink: "https://overapi.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "OverAPI",
    category: "documentation",
  },
  {
    pageLink: "https://javascript.info/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "JS Info",
    category: "documentation",
  },
  {
    pageLink: "https://shortcode.dev/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "Shortcut Code",
    category: "documentation",
  },
  {
    pageLink: "https://code.visualstudio.com/docs/editing/codebasics",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "VS Code Editing",
    category: "documentation",
  },
  // Tools
  {
    pageLink: "https://bulkresizephotos.com/en",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "BulkResize",
    category: "tools",
  },
  {
    pageLink: "https://imgur.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "Imgur",
    category: "tools",
  },
  {
    pageLink: "https://www.virustotal.com/gui/home/upload",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "VirusTotal",
    category: "tools",
  },
  {
    pageLink: "https://pagespeed.web.dev/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "PageSpeed",
    category: "tools",
  },
  {
    pageLink: "https://www.xml-sitemaps.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "XML Sitemap",
    category: "tools",
  },
  {
    pageLink: "https://jsoncrack.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "Jsoncrack",
    category: "tools",
  },
  {
    pageLink: "https://fonts.google.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "GoogleFonts",
    category: "others",
  },
  {
    pageLink: "https://colorhunt.co/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "ColorHunt",
    category: "others",
  },
  {
    pageLink: "https://www.cssmatic.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "CssMatic",
    category: "others",
  },
  {
    pageLink: "https://bennettfeely.com/clippy/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "ClipPath",
    category: "others",
  },
  {
    pageLink: "https://randomuser.me/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "RandomUser",
    category: "others",
  },
  {
    pageLink: "https://fakestoreapi.com/",
    description: "Descripcion generica del recurso como placeholder",
    tags: ['tag1', 'tag2'],
    pageName: "StoreAPI",
    category: "others",
  },
];
