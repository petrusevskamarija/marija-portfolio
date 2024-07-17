const menu = document.querySelector(".menu");
const burgerMenuBtn = document.querySelector(".burger-menu-btn");

burgerMenuBtn.addEventListener("click", () => {
  menu.classList.toggle("js-menu");
});

const about = document.querySelector(".about");
const aboutBtn = document.querySelector(".about-btn");
aboutBtn.addEventListener("click", () => {
  about.classList.toggle("js-about");
});
const contact = document.querySelector(".contact");
const contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("click", () => {
  contact.classList.toggle("js-contact");
});

const projects = document.querySelector(".projects");
const projectsBtn = document.querySelector(".projects-btn");
projectsBtn.addEventListener("click", () => {
  projects.classList.toggle("js-contact");
});
const caseStudyBtn = document.querySelectorAll(".case-study-btn");
const caseStudy = document.querySelectorAll(".case-study");
const caseStudyClose = document.querySelectorAll(".close-case-study");
const body = document.querySelector(".body");
for (const [i] of caseStudyBtn.entries()) {
  caseStudyBtn[i].addEventListener("click", () => {
    caseStudy[i].classList.add("js-display");
    body.classList.add("js-hidden");
    projects.classList.add("js-projects-cs");
  });
}
for (const [i] of caseStudyClose.entries()) {
  caseStudyClose[i].addEventListener("click", () => {
    caseStudy[i].classList.remove("js-display");
    body.classList.remove("js-hidden");
    projects.classList.remove("js-projects-cs");
  });
}
const myWorkBtn = document.querySelector(".my-work-btn");
myWorkBtn.addEventListener("click", () => {
  projects.classList.toggle("js-contact");
});
