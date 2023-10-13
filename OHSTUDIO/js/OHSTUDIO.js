let navMenu = document.querySelectorAll('nav a');

navMenu.forEach(opt => {
    opt.addEventListener('click', ()=>{
        navMenu.forEach(e => {
            e.classList.remove('active');
        });
        opt.classList.toggle('active');
    })
});


// INTERSECTION OBSERVER
let animatedFU = document.querySelectorAll(".animatedFadeUp")

const observer = new IntersectionObserver(
    entries=>{
        entries.forEach(entry => {
            entry.target.classList.toggle('fadeUp', entry.isIntersecting);
            if (entry.isIntersecting) observer.unobserve(entry.target)
        });
    },
    {
        threshold: 0.1
    }
)

animatedFU.forEach(element => {
    observer.observe(element);
});