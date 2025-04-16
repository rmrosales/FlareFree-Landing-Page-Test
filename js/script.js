//main header animation

gsap.registerPlugin(ScrollTrigger);

const img = document.getElementById("myImage");

const isMobile = window.innerWidth < 768;

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-mock-trigger",
        start: "top bottom",
        end: "bottom center",
        scrub: 1
    }
});

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-mock-trigger-bottom",
        start: "top bottom",
        end: "bottom center",
        scrub: true
    }
});

const leftX = isMobile ? "-250px" : "-267px";
const rightX = isMobile ? "250px" : "267px";

// Slower & smoother animations
tl.to(".mock-left", {
    x: leftX,
    y: 50,
    opacity: 1,
    filter: "blur(0px)",
    rotate: -4,
    duration: 3,
    filter: "blur(0px) drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.3))",
    ease: "power2.out"
}, 0).to(".mock-left-app", {
    x: -400,
    y: 200,
    height: 120,
    width: 120,
    opacity: 1,
    filter: "blur(0px)",
    rotate: -4,
    duration: 1,
    filter: "blur(0px) drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.3))",
    ease: "power2.out"
}, 0).to(".mock-right", {
    x: rightX,
    y: 50,
    opacity: 1,
    filter: "blur(0px)",
    rotate: 4,
    duration: 3,
    filter: "blur(0px) drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.3))",
    ease: "power2.out"
}, 0).to(".mock-main", {
    x: 0,
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    rotate: 0,
    duration: 3,
    filter: "blur(0px) drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.3))",
    ease: "power2.out"
}, 0).to(".mock-topright", {
    x: -500,
    y: 0,
    top: 200,
    opacity: 0,
    filter: "blur(12px)",
    rotate: 40,
    duration: 15,
    ease: "power3.out"
}, 0).to(".mock-topleft", {
    x: 500,
    y: 0,
    top: 200,
    opacity: 1,
    filter: "blur(12px)",
    rotate: -50,
    duration: 15,
    ease: "power3.out"
}, 0).to(".mock-topright-2", {
    x: -320,
    y: 0,
    top: 200,
    opacity: 0,
    filter: "blur(12px)",
    rotate: 120,
    duration: 15,
    ease: "power3.out"
}, 0).to(".mock-topleft-2", {
    x: 420,
    y: 0,
    top: 200,
    opacity: 1,
    filter: "blur(12px)",
    rotate: -50,
    duration: 15,
    ease: "power3.out"
}, 0).to(".mock-topright-3", {
    x: -450,
    y: 0,
    top: 200,
    opacity: 0,
    filter: "blur(12px)",
    rotate: 40,
    duration: 15,
    ease: "power3.out"
}, 0).to(".mock-topleft-3", {
    x: 320,
    y: 0,
    top: 200,
    opacity: 1,
    filter: "blur(12px)",
    rotate: -50,
    duration: 15,
    ease: "power3.out"
}, 0).to(".mock-center", {
    width: 0,
    height: 0,
    top: 200,
    opacity: 0,
    filter: "blur(2px)",
    rotate: -50,
    duration: 15,
    ease: "power3.out"
}, 0).to(".mock-center-2", {
    width: 0,
    height: 0,
    top: 200,
    opacity: 0,
    filter: "blur(2px)",
    rotate: -50,
    duration: 15,
    ease: "power3.out"
}, 0).to(".mock-center-3", {
    width: 0,
    height: 0,
    top: 200,
    opacity: 0,
    filter: "blur(2px)",
    rotate: -50,
    duration: 15,
    ease: "power3.out"
}, 0);

// Bottom animations slower too
tl2.to(".mock-left-bottom", {
    x: -340,
    opacity: 1,
    duration: 2,
    ilter: "blur(0px) drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.3))",
    ease: "power2.out"
}, 0).to(".mock-right-bottom", {
    x: 340,
    opacity: 1,
    duration: 2,
    ilter: "blur(0px) drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.3))",
    ease: "power2.out"
}, 0);



//FAQ Accordion

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        // Close all
        accordionItems.forEach(i => {
            if (i !== item) i.classList.remove('active');
        });

        // Toggle current
        item.classList.toggle('active');
    });
});
