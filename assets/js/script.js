$(function () {


  // Header responsive js

  if ($("header.site-header").length) {
     $(".mobile-menu-btn").on("click", function(){
      $(this).toggleClass("open");
      $("nav.main-navigation").slideToggle(300);
     })
  }

  // Header background js on scroll
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 30) {
      $(".site-header").addClass("scrolled");
    } else {
      $(".site-header").removeClass("scrolled");
    }
  });

  // Hero section content animation
  if ($(".hero-section").length) {
    let split = new SplitText(".content-wrapper h1", {
      type: "chars",
      charsClass: "split-char",
    });

    let splitContent = new SplitText(".content-wrapper .split-lines", {
      type: "lines",
      linesClass: "split-line",
    });

    // main title animation
    gsap.from(split.chars, {
      yPercent: 40,
      opacity: 0,
      stagger: 0.05,
      delay: 0.2,
      ease: "expo-out",
    });

    // bottom content animation
    gsap.from(splitContent.lines, {
      yPercent: 40,
      opacity: 0,
      stagger: 0.08,
      delay: 0.4,
      ease: "expo-out",
    });

    // leaf animation
    let base = 300;
    let factor = 2;

    gsap.utils.toArray(".hero-section .leaf-img").forEach((leaf, i) => {
      let direction = i % 2 === 0 ? 1 : -1;
      let distance = base + i * base * factor;

      gsap.to(leaf, {
        y: direction * distance,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
  }

  if (document.querySelector(".hero-menu-wrapper")) {
    let video = document.querySelector(".my-video");

    video.addEventListener("loadedmetadata", () => {
      gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-menu-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          pin: ".video-wrapper", 
          pinSpacing: false,
        },
      });
    });
  }

  if (document.querySelector(".menu-section")) {
    gsap.utils.toArray(".menu-section .leaf-img").forEach((leaf, i) => {
      let isLeft = i % 2 === 0;
  
      gsap.to(leaf, {
        x: isLeft ? 80 : -80,   
        y: isLeft ? -80 : -80,   
        scrollTrigger: {
          trigger: ".menu-section",
          start: "20% center",
          end: "bottom center",
          scrub: 1,
        //   markers: true
        }
      });
    });
  }

  // About section js
  if (document.querySelector(".image-content-grid")) {

    let splitContent = new SplitText(".image-content-grid h3", {
      type: "lines",
      linesClass: "split-line",
    });

    gsap.from(splitContent.lines, {
      yPercent: 40,
      opacity: 0,
      stagger: 1,
      delay: 0.7,
      ease: "expo-out",
      scrollTrigger: {
        trigger: ".image-content-grid",
        start: "top 30%",
        end: "top 30%",
        scrub: 1,
      },
      
    });

    
    gsap.from(".card-grid", {
      y: 100,
      opacity: 0,
      ease: "linear",
      scrollTrigger: {
        trigger: ".image-content-grid",     
        start: "top 0%",
        end: "top 0%",    
        scrub: 1,
        markers: true,
      }
    });

  }

});
