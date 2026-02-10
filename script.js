//Page 1 Animations
gsap.from("#page1 nav", {
  opacity: 0,
  duration: 0.5,
  transform: "translateY(-10%)",
  scrollTrigger: {
    trigger: "#page1 nav",
    scroller: "body",
    start: "top 100%",
  },
});

gsap.from("#page1 #center h1 ", {
  opacity: 0,
  duration: 0.5,
  transform: "translateX(10%)",
  scrollTrigger: {
    trigger: "#page1 #center h1",
    scroller: "body",
    start: "top 100%",
  },
});

gsap.from("#page1 #center h2 ", {
  opacity: 0,
  duration: 0.5,
  transform: "translateX(-10%)",
  scrollTrigger: {
    trigger: "#page1 #center h2",
    scroller: "body",
    start: "top 100%",
  },
});

gsap.from("#page1 #center button ", {
  opacity: 0,
  duration: 0.5,
  transform: "translateX(10%)",
  scrollTrigger: {
    trigger: "#page1 #center h2",
    scroller: "body",
    start: "top 100%",
  },
});

gsap.from("#page1 #center img ", {
  opacity: 0,
  duration: 0.5,
  transform: "translateX(-10%)",
  ease: "power1.in",
  scrollTrigger: {
    trigger: "#page1 #center h2",
    scroller: "body",
    start: "top 100%",
  },
});

const line=(targetElement)=>{
gsap.from(targetElement, {
  opacity: 0,
  duration: 0.5,
  transform: "translateX(-10%)",
  ease: "power1.in",
  scrollTrigger: {
    trigger: "#page1 #center h2",
    scroller: "body",
    start: "top 100%",
  },
});
}
line("#page1 #line1")
line("#page1 #line2")

//Page 2 Animations
const topAni = (targetElement) => {
    gsap.fromTo(targetElement,
  {
    opacity: 0,
    transform: " translateY(-30%)",
    ease: "power1.in",
    scrollTrigger: {
      trigger: targetElement,
      scroller: "body",
      start: "top 100%",
    },
  },
  {
    transform: "translateY(0)",
    opacity: 1,
    duration: 2,
    delay: 1.5,
    scrollTrigger: {
      trigger: targetElement,
      scroller: "body",
      start: "top 100%",
      ease: "power1.in",
    },
  },)
}

topAni("#page2 #king");
topAni("#page2 #r");
topAni("#page2 #b");

const bottomAni=(targetElement)=>{
    gsap.fromTo(targetElement, {
    opacity: 0,
    transform: " translateY(30%)",
    ease: "power1.in",
    scrollTrigger: {
      trigger: targetElement,
      scroller: "body",
      start: "top 100%",
    },
  },
  {
    transform: "translateY(0)",
    duration: 2,
    opacity: 1,
    delay: 1.5,
    scrollTrigger: {
      trigger: targetElement,
      scroller: "body",
      start: "top 100%",
      ease: "power1.in",
    },
  },)
}
bottomAni("#page2 #p")      
bottomAni("#page2 #k")      
bottomAni("#page2 #q")

//Page 3 Animations
const rightAni=(targetElement)=>{
    gsap.from(targetElement, {
  position: "relative",
  opacity: 0,
  duration: 2,
  transform: " translate(160%, 30%)",
  scrollTrigger: {
    trigger: targetElement,
    scroller: "body",
    start: "top 100%",
  },
});
}

rightAni("#page3 #ki")
rightAni("#page3 #qu")
rightAni("#page3 #bi")
rightAni("#page3 #kn")
rightAni("#page3 #ro")

gsap.from("#page3 #pa", {
  position: "relative",
  opacity: 0,
  duration: 2,
  transform: " translate(170%, 75%)",
  scrollTrigger: {
    trigger: "#page3 #pa",
    scroller: "body",
    start: "top 100%",
  },
});

gsap.to("#page3 #detail", {
  opacity: 1,
  duration: 2,
  delay: 2.5,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#page3 #detail",
    scroller: "body",
    start: "top 100%",
  },
});

gsap.to("#page3 #detailp", {
  opacity: 1,
  duration: 2,
  delay: 2.5,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "#page3 #detail",
    scroller: "body",
    start: "top 100%",
  },
});

//Page 4 Animations
gsap.from("#page4 #viewm", {
  opacity: 0,
  duration: 1,
  transform: "translateX(50%)",
  scrollTrigger: {
    trigger: "#page4 #viewm",
    scroller: "body",
    start: "top 100%",
  },
});