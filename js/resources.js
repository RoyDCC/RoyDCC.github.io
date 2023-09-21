const $graficos = document.getElementById('graficos');
const $practica = document.getElementById('practica');
const $diseno = document.getElementById('diseno');
const $librerias = document.getElementById('librerias');
const $documentacion = document.getElementById('documentacion');
const $herramientas = document.getElementById('herramientas');
const $otros = document.getElementById('otros');

const Rec = params =>{
    return `
        <li>
            <a target="_blank" href="${params.ref}">
                <img src="${params.src}"/>
                <p>${params.pageName}</p>
            </a>
        </li>
    `;
}

// graficos
$graficos.innerHTML += Rec({ref:"https://www.freepik.com/author/freepik", src:"https://i.imgur.com/dTN1F5m.jpg", pageName:"Freepik"});
$graficos.innerHTML += Rec({ref:"https://www.pexels.com/", src:"https://i.imgur.com/7cfYNkY.jpg", pageName:"Pexels"});
$graficos.innerHTML += Rec({ref:"https://pixabay.com/es/", src:"https://i.imgur.com/EUvjqln.jpg", pageName:"Pixabay"});
$graficos.innerHTML += Rec({ref:"https://unsplash.com/", src:"https://i.imgur.com/hHdVe1j.jpg", pageName:"Unsplash"});
$graficos.innerHTML += Rec({ref:"https://giphy.com/", src:"https://i.imgur.com/00ObnIn.jpg", pageName:"Giphy"});
$graficos.innerHTML += Rec({ref:"https://uiverse.io/", src:"https://i.imgur.com/Rb7nqhm.jpg", pageName:"Uiverse"});
$graficos.innerHTML += Rec({ref:"https://undraw.co/illustrations", src:"https://i.imgur.com/bWkso5E.jpg", pageName:"Undraw"});
$graficos.innerHTML += Rec({ref:"https://uiball.com/", src:"https://i.imgur.com/RaPev2s.jpg", pageName:"Uiball"});


// practica
$practica.innerHTML += Rec({ref:"https://www.codewars.com/users/sign_in", src:"https://i.imgur.com/XkewUDU.jpg", pageName:"CodeWars"});
$practica.innerHTML += Rec({ref:"https://leetcode.com/explore/", src:"https://i.imgur.com/TLSCCur.jpg", pageName:"Leetcode"});
$practica.innerHTML += Rec({ref:"https://www.hackerrank.com/dashboard", src:"https://i.imgur.com/OrTFkbk.jpg", pageName:"HackerRank"});
$practica.innerHTML += Rec({ref:"https://codeforces.com/", src:"https://i.imgur.com/s319fTc.jpg", pageName:"Codeforces"});
$practica.innerHTML += Rec({ref:"https://www.edx.org/", src:"https://i.imgur.com/FcwAqXg.jpg", pageName:"EdX"});
$practica.innerHTML += Rec({ref:"https://learnxinyminutes.com/", src:"https://i.imgur.com/mskTcQL.jpg", pageName:"Learn X in Y minutes"});
$practica.innerHTML += Rec({ref:"https://www.frontendpractice.com/", src:"https://i.imgur.com/ls9TQtt.jpg", pageName:"Frontend Practice"});
$practica.innerHTML += Rec({ref:"https://www.codecademy.com/catalog", src:"https://i.imgur.com/3y1K6TN.jpg", pageName:"Codecademy"});


// diseno
$diseno.innerHTML += Rec({ref:"https://app.uizard.io/prototypes", src:"https://i.imgur.com/H6WnZPP.jpg", pageName:"Uizard"});
$diseno.innerHTML += Rec({ref:"https://dribbble.com/shots", src:"https://i.imgur.com/4SXLEax.jpg", pageName:"Dribble"});
$diseno.innerHTML += Rec({ref:"https://online.visual-paradigm.com/login.jsp?t=diagrams", src:"https://i.imgur.com/dVqDlQT.jpg", pageName:"Visual Paradigm"});
$diseno.innerHTML += Rec({ref:"https://create.piktochart.com/users/sign_in#text", src:"https://i.imgur.com/ZRQGWbC.jpg", pageName:"Piktochart"});
$diseno.innerHTML += Rec({ref:"https://www.canva.com/", src:"https://i.imgur.com/2Ix98E3.jpg", pageName:"Canva"});


// librerias
$librerias.innerHTML += Rec({ref:"https://fontawesome.com/", src:"https://i.imgur.com/nXADxmQ.jpg", pageName:"FontAwesome"});
$librerias.innerHTML += Rec({ref:"https://getbootstrap.com/docs/5.3/components/navbar/", src:"https://i.imgur.com/KcUopn5.jpg", pageName:"Bootstrap"});
$librerias.innerHTML += Rec({ref:"https://animate.style/", src:"https://i.imgur.com/2stkeBI.jpg", pageName:"Animation.css"});
$librerias.innerHTML += Rec({ref:"https://tabler-icons.io/", src:"", pageName:"Tabler Icons"});


// documentacion
$documentacion.innerHTML += Rec({ref:"https://overapi.com/", src:"https://i.imgur.com/aVL376k.jpg", pageName:"OverAPI"});
$documentacion.innerHTML += Rec({ref:"https://code.visualstudio.com/docs/editor/codebasics#:~:text=VS%20Code%20supports%20multiple%20cursors,insert%20cursors%20below%20or%20above.", src:"https://i.imgur.com/JNDKyOH.jpg", pageName:"VSC Editing"});
$documentacion.innerHTML += Rec({ref:"https://javascript.info/", src:"https://i.imgur.com/VrzRwMr.jpg", pageName:"JS Info"});
$documentacion.innerHTML += Rec({ref:"https://shortcode.dev/", src:"https://i.imgur.com/EdP4iaf.jpg", pageName:"Shortcut Code"});

// herramientas
$herramientas.innerHTML += Rec({ref:"https://bulkresizephotos.com/en", src:"https://i.imgur.com/WvSdesD.jpg", pageName:"BulkResize"});
$herramientas.innerHTML += Rec({ref:"https://imgur.com/", src:"https://i.imgur.com/1KpTi8s.jpg", pageName:"Imgur"});
$herramientas.innerHTML += Rec({ref:"https://www.virustotal.com/gui/home/upload", src:"https://i.imgur.com/wnfThea.jpg", pageName:"VirusTotal"});
$herramientas.innerHTML += Rec({ref:"https://pagespeed.web.dev/", src:"https://i.imgur.com/27qvi6v.jpg", pageName:"PageSpeed"});
$herramientas.innerHTML += Rec({ref:"https://www.xml-sitemaps.com/", src:"https://i.imgur.com/GX1qXhu.jpg", pageName:"XML Sitemap"});
$herramientas.innerHTML += Rec({ref:"https://jsoncrack.com/", src:"https://i.imgur.com/ZFewZeu.jpg", pageName:"Jsoncrack"});

// otros
$otros.innerHTML += Rec({ref:"https://fonts.google.com/", src:"https://i.imgur.com/uzTQ2aK.jpg", pageName:"GoogleFonts"});
$otros.innerHTML += Rec({ref:"https://colorhunt.co/", src:"https://i.imgur.com/zjV6LIi.jpg", pageName:"ColorHunt"});
$otros.innerHTML += Rec({ref:"https://www.cssmatic.com/", src:"https://i.imgur.com/dnd3oha.jpg", pageName:"CssMatic"});
$otros.innerHTML += Rec({ref:"https://bennettfeely.com/clippy/", src:"https://i.imgur.com/ifBftxd.jpg", pageName:"ClipPath"});
$otros.innerHTML += Rec({ref:"https://randomuser.me/", src:"https://i.imgur.com/CN5qy9S.jpg", pageName:"RandomUser"});
$otros.innerHTML += Rec({ref:"https://fakestoreapi.com/", src:"https://i.imgur.com/qJZ9BoX.jpg", pageName:"StoreAPI"});


