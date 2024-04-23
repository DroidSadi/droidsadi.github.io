gsap.to("nav",{
    backgroundColor:"black",
    scrollTrigger:{
        scrub:true
    }
})


gsap.from("nav .left",{
    opacity:0,
    x:-50,
    duration:1,
    delay:0.3
})

gsap.from("nav .right ul li",{
    opacity:0,
    y:-100,
    duration:0.7,
    stagger:0.1
})

gsap.from(".firstSection .leftSection div",{
    delay:0.2,
    opacity:0,
    y:50,
    stagger:0.1,
    scrollTrigger:".firstSection .leftSection div"
})

gsap.from(".headerText",{
    delay:0.5,
    opacity:0,
    x:-50,
    duration:0.5,
    stagger:0.05,
    scrollTrigger:".headerText"
})


gsap.from(".firstSection .rightSection img",{
    delay:0.2,
    opacity:0,
    x:50,
    duration:1,
    scrollTrigger:".firstSection .rightSection img"
})

gsap.from(".thirdSection, footer", {
    opacity:0,
    x: -50,
    stagger:0.2,
    scrollTrigger:{
        trigger:".thirdSection, footer",
        scroller:"body"
    }
})

gsap.to(".box img", {
    x: "-750%",
    scrollTrigger: {
        trigger: ".secondSection",
        scroller: "body",
        scrub: 3,
        start: "top 0%",
        end: "top -200%",
        pin: true
    }
});

gsap.from(".box img",{
    scale:0.2,
    stagger:0.1,
    scrollTrigger:".box img"
})