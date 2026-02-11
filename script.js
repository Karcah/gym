


// ==============================
// HEADER + NAV ACTIVE SYSTEM
// ==============================

const header = document.querySelector(".header-area");
const navLinks = document.querySelectorAll(".nav-bar a");

// sections kasta oo leh id (home, about, classes, iwm)
const sections = document.querySelectorAll("[id]");

// section-yada muhiimka ah
const homeSection = document.querySelector("#home");
const aboutSection = document.querySelector("#about");

if (header && homeSection && aboutSection) {
  const aboutTop = aboutSection.offsetTop;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const scrollPos = scrollY + 120; // header height offset

    /* ======================
       HEADER BEHAVIOR
    ======================= */

    // HOME
    if (scrollY === 0) {
      header.classList.remove("hide");
      header.classList.add("transparent");
      header.classList.add("home-nav");
    }
    // Inta u dhexeysa HOME → ABOUT
    else if (scrollY < aboutTop) {
      header.classList.add("hide");
      header.classList.remove("transparent");
      header.classList.remove("home-nav");
    }
    // ABOUT iyo wixii ka dambeeya
    else {
      header.classList.remove("hide");
      header.classList.remove("transparent");
      header.classList.remove("home-nav");
    }

    /* ======================
       NAV ACTIVE LINK
    ======================= */

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





