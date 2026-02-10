const header = document.querySelector(".header-area");
const aboutSection = document.querySelector("#about"); // ama id-ga choose program

if (header && aboutSection) {
  const aboutTop = aboutSection.offsetTop;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    /* HOME */
    if (scrollY === 0) {
      header.classList.remove("hide");
      header.classList.add("transparent");
    }
    /* Inta u dhaxeysa HOME → ABOUT */
    else if (scrollY < aboutTop) {
      header.classList.add("hide");
      header.classList.remove("transparent");
    }
    /* ABOUT iyo wixii ka dambeeya */
    else {
      header.classList.remove("hide");
      header.classList.remove("transparent"); // header adag
    }
  });
}