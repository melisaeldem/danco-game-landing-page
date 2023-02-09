let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () => {
    menu.classList.toggle("bg-x");
    navlist.classList.toggle("open")
}
let sr = ScrollReveal({
    ditance: "65px",
    duration: 2600,
    delay: 450,
    reset:true
});

sr.reveal(".hero-text",{delay:200,origin:"top"});
sr.reveal(".hero-img",{delay:450,origin:"top"});
sr.reveal('.icons', {delay:500 ,origin:"left"});
sr.reveal(".scroll-down",{delay:500,origin:"right"});
