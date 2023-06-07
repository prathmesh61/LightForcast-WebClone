// import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
var t1 = gsap.timeline({
  repeat: -1,
  repeatDelay: 1,
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

// t1.to(".hero .hero_img", { x: 60, delay: 1, duration: 5 });
ScrollTrigger.create({
  trigger: " .left img",
  start: "top 300px",
  end: "+=1200",
  marker: true,
  pin: true,
});
