gsap.to(".user",{
    color : "white",
    duration : 2,
    opacity : 1,
    scrollTrigger : {
        trigger : ".intro-section",
        toggleActions : "play reset play reset",
    }
})

gsap.to(".skills",{
    color : "white",
    duration : 2,
    opacity : 1,
    scrollTrigger : {
        trigger : ".skills-section",
        toggleActions : "play reset play reset",
    }
})

gsap.to(".connect",{
    color : "white",
    duration : 2,
    opacity : 1,
    scrollTrigger : {
        trigger : ".connect-section",
        toggleActions : "play reset play reset",
    }
})

gsap.to(".middle-section",{
    y:-150,
    opacity : 1,
    duration: 2,
    scrollTrigger : {
        trigger : ".middle-section",
        scroller : "body",
        // markers  : true,
        start : "top 80%",
        end :"top 70%",
        scrub : 1,

    }
})