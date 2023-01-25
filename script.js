gsap.registerPlugin(ScrollTrigger)
gsap.fromTo(".left", {opacity: 0}, {scrollTrigger:".left", opacity: 1, duration:2});
gsap.fromTo(".right", {opacity: 0}, {scrollTrigger:".right", opacity: 1, duration:2});
gsap.fromTo(".s_title", {opacity: 0}, {scrollTrigger:".right", opacity: 1, duration:1, delay: 3.5});


gsap.fromTo(".h_title", {opacity: 0}, {opacity: 1, duration:1, delay: 4.5});
gsap.fromTo(
    ".h_subtitle", 
    {opacity: 0}, {opacity: 1, duration:1, delay: 5});

gsap.fromTo(".tsl-logo", {opacity: 0}, {opacity: 1, duration:1, delay: 4});


