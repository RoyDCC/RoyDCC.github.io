export interface Resource {
  pageName: string;
  pageLink: string;
  pageImg: string;
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
    pageImg: "https://i.imgur.com/dTN1F5m.jpg",
    category: "graphic",
  },
  {
    pageName: "Pexels",
    pageLink: "https://www.pexels.com/",
    pageImg: "https://i.imgur.com/7cfYNkY.jpg",
    category: "graphic",
  },
  {
    pageName: "Pixabay",
    pageLink: "https://pixabay.com/es/",
    pageImg: "https://i.imgur.com/EUvjqln.jpg",
    category: "graphic",
  },
  {
    pageName: "Unsplash",
    pageLink: "https://unsplash.com/",
    pageImg: "https://i.imgur.com/hHdVe1j.jpg",
    category: "graphic",
  },
  {
    pageName: "Giphy",
    pageLink: "https://giphy.com/",
    pageImg: "https://i.imgur.com/00ObnIn.jpg",
    category: "graphic",
  },
  {
    pageName: "Uiverse",
    pageLink: "https://uiverse.io/",
    pageImg: "https://i.imgur.com/Rb7nqhm.jpg",
    category: "graphic",
  },
  {
    pageName: "Undraw",
    pageLink: "https://undraw.co/illustrations",
    pageImg: "https://i.imgur.com/bWkso5E.jpg",
    category: "graphic",
  },
  {
    pageName: "Uiball",
    pageLink: "https://uiball.com/",
    pageImg: "https://i.imgur.com/RaPev2s.jpg",
    category: "graphic",
  },
  // Practice
  {
    pageName: "CodeWars",
    pageLink: "https://www.codewars.com/users/sign_in",
    pageImg: "https://i.imgur.com/XkewUDU.jpg",
    category: "coding",
  },
  {
    pageName: "Leetcode",
    pageLink: "https://leetcode.com/explore/",
    pageImg: "https://i.imgur.com/TLSCCur.jpg",
    category: "coding",
  },
  {
    pageName: "HackerRank",
    pageLink: "https://www.hackerrank.com/dashboard",
    pageImg: "https://i.imgur.com/OrTFkbk.jpg",
    category: "coding",
  },
  {
    pageName: "Codeforces",
    pageLink: "https://codeforces.com/",
    pageImg: "https://i.imgur.com/s319fTc.jpg",
    category: "coding",
  },
  {
    pageName: "EdX",
    pageLink: "https://www.edx.org/",
    pageImg: "https://i.imgur.com/FcwAqXg.jpg",
    category: "coding",
  },
  {
    pageName: "Learn X in Y minutes",
    pageLink: "https://learnxinyminutes.com/",
    pageImg: "https://i.imgur.com/mskTcQL.jpg",
    category: "coding",
  },
  {
    pageName: "Frontend Practice",
    pageLink: "https://www.frontendpractice.com/",
    pageImg: "https://i.imgur.com/ls9TQtt.jpg",
    category: "coding",
  },
  {
    pageName: "Codecademy",
    pageLink: "https://www.codecademy.com/catalog",
    pageImg: "https://i.imgur.com/3y1K6TN.jpg",
    category: "coding",
  },
  // Design
  {
    pageLink: "https://app.uizard.io/prototypes",
    pageImg: "https://i.imgur.com/H6WnZPP.jpg",
    pageName: "Uizard",
    category: "design",
  },
  {
    pageLink: "https://dribbble.com/shots",
    pageImg: "https://i.imgur.com/4SXLEax.jpg",
    pageName: "Dribble",
    category: "design",
  },
  {
    pageLink: "https://online.visual-paradigm.com/login.jsp?t=diagrams",
    pageImg: "https://i.imgur.com/dVqDlQT.jpg",
    pageName: "Visual Paradigm",
    category: "design",
  },
  {
    pageLink: "https://create.piktochart.com/users/sign_in#text",
    pageImg: "https://i.imgur.com/ZRQGWbC.jpg",
    pageName: "Piktochart",
    category: "design",
  },
  {
    pageLink: "https://www.canva.com/",
    pageImg: "https://i.imgur.com/2Ix98E3.jpg",
    pageName: "Canva",
    category: "design",
  },
  // Libraries
  {
    pageLink: "https://fontawesome.com/",
    pageImg: "https://i.imgur.com/nXADxmQ.jpg",
    pageName: "FontAwesome",
    category: "libraries",
  },
  {
    pageLink: "https://getbootstrap.com/docs/5.3/components/navbar/",
    pageImg: "https://i.imgur.com/KcUopn5.jpg",
    pageName: "Bootstrap",
    category: "libraries",
  },
  {
    pageLink: "https://animate.style/",
    pageImg: "https://i.imgur.com/2stkeBI.jpg",
    pageName: "Animation.css",
    category: "libraries",
  },
  {
    pageLink: "https://devicon.dev/",
    pageImg: "https://i.imgur.com/2stkeBI.jpg",
    pageName: "Devicons",
    category: "graphic",
  },
  {
    pageLink: "https://tabler-icons.io/",
    pageImg: "",
    pageName: "Tabler Icons",
    category: "libraries",
  },
  // Documentation
  {
    pageLink: "https://overapi.com/",
    pageImg: "https://i.imgur.com/aVL376k.jpg",
    pageName: "OverAPI",
    category: "documentation",
  },
  {
    pageLink: "https://javascript.info/",
    pageImg: "https://i.imgur.com/VrzRwMr.jpg",
    pageName: "JS Info",
    category: "documentation",
  },
  {
    pageLink: "https://shortcode.dev/",
    pageImg: "https://i.imgur.com/EdP4iaf.jpg",
    pageName: "Shortcut Code",
    category: "documentation",
  },
  {
    pageLink: "https://code.visualstudio.com/docs/editing/codebasics",
    pageImg: "https://i.imgur.com/EdP4iaf.jpg",
    pageName: "VS Code Editing",
    category: "documentation",
  },
  // Tools
  {
    pageLink: "https://bulkresizephotos.com/en",
    pageImg: "https://i.imgur.com/WvSdesD.jpg",
    pageName: "BulkResize",
    category: "tools",
  },
  {
    pageLink: "https://imgur.com/",
    pageImg: "https://i.imgur.com/1KpTi8s.jpg",
    pageName: "Imgur",
    category: "tools",
  },
  {
    pageLink: "https://www.virustotal.com/gui/home/upload",
    pageImg: "https://i.imgur.com/wnfThea.jpg",
    pageName: "VirusTotal",
    category: "tools",
  },
  {
    pageLink: "https://pagespeed.web.dev/",
    pageImg: "https://i.imgur.com/27qvi6v.jpg",
    pageName: "PageSpeed",
    category: "tools",
  },
  {
    pageLink: "https://www.xml-sitemaps.com/",
    pageImg: "https://i.imgur.com/GX1qXhu.jpg",
    pageName: "XML Sitemap",
    category: "tools",
  },
  {
    pageLink: "https://jsoncrack.com/",
    pageImg: "https://i.imgur.com/ZFewZeu.jpg",
    pageName: "Jsoncrack",
    category: "tools",
  },
  {
    pageLink: "https://fonts.google.com/",
    pageImg: "https://i.imgur.com/uzTQ2aK.jpg",
    pageName: "GoogleFonts",
    category: "others",
  },
  {
    pageLink: "https://colorhunt.co/",
    pageImg: "https://i.imgur.com/zjV6LIi.jpg",
    pageName: "ColorHunt",
    category: "others",
  },
  {
    pageLink: "https://www.cssmatic.com/",
    pageImg: "https://i.imgur.com/dnd3oha.jpg",
    pageName: "CssMatic",
    category: "others",
  },
  {
    pageLink: "https://bennettfeely.com/clippy/",
    pageImg: "https://i.imgur.com/ifBftxd.jpg",
    pageName: "ClipPath",
    category: "others",
  },
  {
    pageLink: "https://randomuser.me/",
    pageImg: "https://i.imgur.com/CN5qy9S.jpg",
    pageName: "RandomUser",
    category: "others",
  },
  {
    pageLink: "https://fakestoreapi.com/",
    pageImg: "https://i.imgur.com/qJZ9BoX.jpg",
    pageName: "StoreAPI",
    category: "others",
  },
];
