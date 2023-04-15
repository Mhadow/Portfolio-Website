//vars
const btnScroll = document.getElementById("scrollTop");
const projEls = Array.from(document.getElementsByClassName("card"));
const panelEls = Array.from(document.getElementsByClassName("info"));

// tooltip initialization
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipsList = [...tooltipTriggerList].map(
  (el) => new bootstrap.Tooltip(el)
);

//scrolls back to the top of the page
function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

// shows panel with extra info for each project
for (let i = 0; i < projEls.length; i++) {
  projEls[i].addEventListener("mouseover", () => {
    panelEls[i].style.top = 0;
  });
}

// hides panel with extra info for each project
for (let j = 0; j < projEls.length; j++) {
  projEls[j].addEventListener("mouseleave", () => {
    panelEls[j].style.top = "-1000px";
  });
}

//scroll observer

const observer = new IntersectionObserver((els) => {
  els.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add("hint-anim");
    } else {
      el.target.classList.remove("hint-anim");
    }
  });
});

observer.observe(document.querySelector(".hint"));
