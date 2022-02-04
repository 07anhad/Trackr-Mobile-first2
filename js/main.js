
const sr = ScrollReveal({
    // origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: true
});

sr.reveal('.home-text-header, .image-home, .home-btn, .fact-img',{ origin: 'left', delay: 200, duration: 1000 });
// sr.reveal('.nav__list li',{origin:'top',delay: 200,duration:600}); 
sr.reveal('.home-body ,.stats-title, .fact-text', { origin: 'left', delay: 100 })
sr.reveal('.about-title, .accordian-item', { origin: 'left', delay: 100 })
sr.reveal('.accordian-item,.how-it-works-title', { origin: 'top', delay: 100 })
sr.reveal('.step, .how-it-works-text,.pricing-plan,.team-item', { origin: 'left', delay: 200 })
sr.reveal('.line-right', { origin: 'left', delay: 100 })
sr.reveal('.pricing-title ,.team-title', { origin: 'left', delay: 100 })
sr.reveal('.social_icon', { origin: 'bottom', delay: 100 })
sr.reveal('.menu', { origin: 'left', delay: 200 })
// sr.reveal('.footer-copyright', { origin: 'bottom', delay: 200 })


$(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
})