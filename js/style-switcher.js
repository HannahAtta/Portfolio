var typed = new Typed(".typing",{

    strings: ["a Full Stack Developer", "an Odoo Developer"],

    smartBackspace: true,

    typeSpeed: 100,

    backSpeed: 100,

    loop:true,

    loopCount: Infinity,
    
    startDelay:1000

  });
  
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {

    document.querySelector(".style-switcher").classList.toggle("open");

})

window.addEventListener("scroll" , () => {

    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        (document.querySelector(".style-switcher").classList.remove("open"))
    }
})

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}

const dayNaght = document.querySelector(".day-night");

dayNaght.addEventListener("click",  () => {
    dayNaght.querySelector("i").classList.toggle("fa-sun");
    dayNaght.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {

    // console.log(dayNaght);

    if(document.body.classList.contains("dark")){

        dayNaght.querySelector("i").classList.add("fa-sun");

    }else{

        dayNaght.querySelector("i").classList.add("fa-moon");
    }
})
