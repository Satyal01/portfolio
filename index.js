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

// gsap.from(".name span", {
//   y: 40,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.1,
// });


// the scroll animation 
let mm = gsap.matchMedia();

// always use markers to know about start and end position

mm.add("(min-width: 768px)",()=>{
    gsap.to(".user", {
        color: "white",
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".intro-section",
          scroler: "body",
          start: "top 29%",
          end: "top 10%",
          // markers : true,
          toggleActions: "play reset play reset",
        },
      });


    gsap.to(".project",{
        color: "white",
        duration: 2,
        opacity : 1,
        scrollTrigger: {
          trigger : ".project-section",
          start : "top 80%",
          end : "top 10%",
          // markers : true,
          toggleActions: "play reset play reset",
        },
      })
      
      gsap.to(".skills", {
        color: "white",
        duration: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: ".skills-section",
          top : "top 50%",
          end : "top 25%",
          // markers: true,
          toggleActions: "play reset play reset",
        },
      });
      
      gsap.to(".connect", {
        color: "white",
        duration: 5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".connect-section",
          scroller: "body",
          start: "top 50%",
          end: "bottom 40%",
          // markers : true,
          toggleActions: "play reset play reset",
        },
      });


      //  sidling upword animation code

      gsap.to(".project-section",{
        y : -100,
        duration:1,
        scrollTrigger:{
          trigger : ".project-section",
          scroller : "body",
          start: "top 60%",
          end : "top 50%",
          scrub : 1,
          // markers : true
        }
      })
      
      gsap.to(".middle-section", {
        y: -150,
        duration: 1,
        scrollTrigger: {
          trigger: ".middle-section",
          scroller: "body",
          // markers  : true,
          start: "top 50%",
          end: "top 70%",
          scrub: 1,
        },
      });
      
      // gsap.to(".btech",{
      //     y : 100,
      //     duration :1,
      //     scrollTrigger :{
      //         trigger : ".middle-section",
      //         scroller : "body",
      //         start : "top 60%",
      //         end : "top 70%",
      //         scrub : 1,
      //     }
      // })
      
      gsap.to(".connect-section", {
        y: -100,
        duration: 1,
        scrollTrigger: {
          trigger: ".connect-section",
          scroller: "body",
          // markers  : true,
          start: "top 50%",
          end: "bottom 80%",
          scrub: 1,
        },
      });
      
      
})



// mail to  whitespace begin replace by + solution
const email = document.querySelector(".form");

function sendEmail(templateParams){
  emailjs.send("service_k0mjcid","template_2szfuuz",templateParams);
}

email.addEventListener("submit", function (e) {
  e.preventDefault();
  
  let  params = {};
  const formData = new FormData(email)
  const dateObj = new Date();

  const time = dateObj.toTimeString() + " " + dateObj.toLocaleDateString();
  
  for(let [key, value] of formData.entries()){
    params[key] = value;
  }

  params['time'] = time;

  // console.log(params);

  sendEmail(params);
  const status = document.querySelector(".submitButton");
  status.innerHTML = "<i class='fa-solid fa-circle-check text-green-500 mr-2'></i> Got it! We’ll be in touch shortly 🤝"
  
  email.reset();
});
