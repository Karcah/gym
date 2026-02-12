document.addEventListener("DOMContentLoaded", function () {

  const header = document.querySelector(".header-area");
  const navLinks = document.querySelectorAll(".menu a");
  const sections = document.querySelectorAll("[id]");
  const homeSection = document.querySelector("#home");
  const aboutSection = document.querySelector("#about");

  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  /* ======================
     HAMBURGER TOGGLE
  ======================= */

  if (hamburger && menu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");
    });
  }

  /* ======================
     SCROLL SYSTEM
  ======================= */

  if (header && homeSection && aboutSection) {

    const aboutTop = aboutSection.offsetTop;

    window.addEventListener("scroll", () => {

      const scrollY = window.scrollY;
      const scrollPos = scrollY + 120;

      // HEADER BEHAVIOR

      if (scrollY === 0) {
        header.classList.remove("hide");
        header.classList.add("transparent");
        header.classList.add("home-nav");
      }
      else if (scrollY < aboutTop) {
        header.classList.add("hide");
        header.classList.remove("transparent");
        header.classList.remove("home-nav");
      }
      else {
        header.classList.remove("hide");
        header.classList.remove("transparent");
        header.classList.remove("home-nav");
      }

      // ACTIVE LINK SYSTEM

      let currentSection = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPos >= sectionTop &&
          scrollPos < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });

    });
  }

});



