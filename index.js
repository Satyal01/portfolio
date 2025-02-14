function breakTheText(){
    let name = document.querySelector(".name");
    let nameText = name.textContent;

    let splitText = nameText.split("");
    
    let subtext = "";

    splitText.forEach((letter)=>{
        if(letter==="S"){
            subtext +=`<span class="inline-block ml-5">S</span>`;
        }else{
            subtext += `<span class="inline-block">${letter}</span>`;
        }
    })

    name.innerHTML = subtext;

    console.log(subtext)

    console.log(name)
     
}

breakTheText();

gsap.from(".name span",{
    y: 40,
    opacity:0,
    duration : 1,
    stagger : 0.1,
})


gsap.to(".user",{
    color : "white",
    duration : 1,
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
    duration: 2,
    scrollTrigger : {
        trigger : ".middle-section",
        scroller : "body",
        // markers  : true,
        start : "top 50%",
        end :"top 70%",
        scrub : 1,

    }
})

gsap.to(".connect-section",{
    y:-150,
    duration: 2,
    scrollTrigger : {
        trigger : ".connect-section",
        scroller : "body",
        // markers  : true,
        start : "top 100%",
        end :"bottom 0%",
        scrub : 1,

    }
})