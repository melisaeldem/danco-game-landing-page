// scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`img`, {delay: 200 , origin: "bottom"})
sr.reveal(`.main-text`, {delay: 300 ,origin: "top"})
sr.reveal(`.social-media`,{origin: 'left'})
sr.reveal(`header`,{origin: 'top'})


