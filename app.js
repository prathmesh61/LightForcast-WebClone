// import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
var t1 = gsap.timeline({
  repeat: -1,

  ease: "power2.inOut",
  stagger: 0.1,
  yoyo: true,
});
var s1 = gsap.timeline({
  repeat: -1,

  ease: "power2.inOut",
  stagger: 0.1,
  yoyo: true,
});

gsap.to(".head", { opacity: 1, y: 30, duration: 3 });
gsap.to(".hero h1", { opacity: 1, y: 30, duration: 3 });
t1.to(".hero .hero_img", {
  x: -60,
  delay: 0.5,
  duration: 3,
});
t1.to(".hero .hero_img", {
  x: 60,
  delay: 0.5,
  duration: 3,
  ease: "power2.inOut",
  stagger: 0.1,
  yoyo: true,
});
s1.to(".bottom-cont .bottom-img", {
  y: -30,
  delay: 0.5,
  duration: 3,
  ease: "power2.inOut",
});
s1.to(".bottom-cont .bottom-img", {
  y: 30,
  delay: 0.5,
  duration: 3,
  ease: "power2.inOut",
});

// t1.to(".hero .hero_img", { x: 60, delay: 1, duration: 5 });
ScrollTrigger.create({
  trigger: " .left img",
  start: "top 200px",
  end: "+=1300",
  marker: true,
  pin: true,
});
