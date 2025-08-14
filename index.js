// the name animation
function breakTheText() {
  let name = document.querySelector(".name");
  let nameText = name.textContent;

  let splitText = nameText.split("");

  let subtext = "";

  splitText.forEach((letter) => {
    if (letter === "S") {
      subtext += `<span class="inline-block ml-5">S</span>`;
    } else {
      subtext += `<span class="inline-block">${letter}</span>`;
    }
  });

  name.innerHTML = subtext;
}

// breakTheText();


gsap.registerPlugin(ScrollTrigger);



// gsap.from(".name span", {
//   y: 40,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.1,
// });


// the scroll animation 
let mm = gsap.matchMedia();

// always use markers to know about start and end position
let tl = gsap.timeline()

tl.from("#Nav", {
  opacity: 0,
  scale: 0,

}, "first")

tl.from("#name", {
  opacity: 0,
  x: -100,

}, "first")

tl.from("#desc", {
  opacity: 0,
  duration: 0.4,
  x: -100
})

tl.to(".user", {
  color: "white",
  scrollTrigger: {
    trigger: "#name",
    start: "top 80%",
    end: "top 10%",
    toggleActions: "play reset play reset",
    // markers : true,
    // scrub:/5
  }
})

tl.from("#socialM-icons i", {
  x: -100,
  opacity: 0,
  duration: 0.4,
  stagger: 0.1
})


mm.add("(max-width:480px)", () => {
  gsap.from("#Projects", {
    // scale: 0,
    opacity: 0,
    duration: 1.5

  })

  gsap.from("#skillsSection", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#skillsSection",
      start: "top 75%",
      end: "top 30%",
      // markers : true,
      toggleActions: "play none none reset",

    }
  })


  gsap.from(".connect-section", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
      trigger: "#connectSection",
      start: "top 70%",
      end: "top 50%",
      // markers: true,
      toggleActions: "play none none reset",

    }
  })
})


mm.add("(min-width: 768px)", () => {
  // GSAP ANIMATION


  gsap.from("#Projects", {
    y: 200,
    opacity: 0,
    duration: 0.8,
    // scale:0,
    scrollTrigger: {
      trigger: "#Projects",
      start: "top 90%",
      end: "top 25%",
      // markers: true,
      scrub: 3
    }

  })

  gsap.to(".project", {
    color: "white",
    scrollTrigger: {
      trigger: "#Projects",
      start: "top 90%",
      end: "top 15%",
      toggleActions: "play reset play reset"
    }
  })

  // skills section



  gsap.from("#skillsSection", {
    y: 200,
    opacity: 0,
    duration: 0.8,
    // scale:0,
    scrollTrigger: {
      trigger: "#skillsSection",
      start: "top 90%",
      end: "top 25%",
      // markers: true,
      scrub: 3
    }
  })




  gsap.to(".skills", {
    color: "white",
    scrollTrigger: {
      trigger: ".skills-section",
      start: "top 90%",
      end: "top 25%",
      toggleActions: "play reset play reset",
      // markers : true
    }
  })

  gsap.from("#connectSection", {
    y: 200,
    opacity: 0,
    duration: 0.8,
    // scale:0,
    scrollTrigger: {
      trigger: "#connectSection",
      start: "top 90%",
      end: "top 20%",
      scrub: 3,

    }
  })

  gsap.to(".connect", {
    color: "white",
    scrollTrigger: {
      trigger: "#connectSection",
      start: "top 90%",
      end: "top 25%",
      toggleActions: "play reset play reset",
    }
  })


})






// mail to  whitespace begin replace by + solution
const email = document.querySelector(".form");

function sendEmail(templateParams) {
  emailjs.send("service_k0mjcid", "template_2szfuuz", templateParams);
}

email.addEventListener("submit", function (e) {
  e.preventDefault();

  let params = {};
  const formData = new FormData(email)
  const dateObj = new Date();

  const time = dateObj.toTimeString() + " " + dateObj.toLocaleDateString();

  for (let [key, value] of formData.entries()) {
    params[key] = value;
  }

  params['time'] = time;





  sendEmail(params);
  const status = document.querySelector(".submitButton");
  prevHTML = status.innerHTML
  status.innerHTML = "<i class='fa-solid fa-circle-check text-green-500 mr-2'></i> Got it! We’ll be in touch shortly 🤝"

  email.reset();
  setInterval(() => {
    status.innerHTML = prevHTML;
  }, 4000);
});


