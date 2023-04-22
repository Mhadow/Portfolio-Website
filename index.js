// VARS

const btnScroll = document.getElementById("scrollTop");
const projEls = Array.from(document.getElementsByClassName("card-proj"));
const panelEls = Array.from(document.getElementsByClassName("info"));
const f1El = document.querySelector(".svg-flag1");
const f2El = document.querySelector(".svg-flag2");
const infoBoxEl1 = document.querySelector(".card-ed");
const infoBoxEl2 = document.querySelector(".card-ed2");
const listEls = document.querySelector(".list").children; // boxes with contact info
const listLinks = document.querySelectorAll(".list-link");
const mailEl = document.getElementById("contact-mail");
const phoneEl = document.getElementById("contact-phone");
const toastEl = document.getElementById("toast-el");
const toastEl2 = document.getElementById("toast-el2");
const contactSectionEl = document.getElementById("contact");
const aboutSectionEl = document.getElementById("info");

// tech items elements

const techItem1 = document.getElementById("tech1");
const techItem2 = document.getElementById("tech2");
const techItem3 = document.getElementById("tech3");
const techItem4 = document.getElementById("tech4");
const techItem5 = document.getElementById("tech5");
const techItem6 = document.getElementById("tech6");
const techItem7 = document.getElementById("tech7");

const techSection = document.getElementById("technologies");

const techHeader1 = document.getElementById("tech-header1");
const techHeader2 = document.getElementById("tech-header2");

// FUNCTIONS

// tooltip initialization

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipsList = [...tooltipTriggerList].map(
  (el) => new bootstrap.Tooltip(el)
);

// scrolls back to the top of the page

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

// sHOWS PANEL WITH EXTRA INFO FOR EACH PROJECT

// for (let i = 0; i < projEls.length; i++) {
//   projEls[i].addEventListener("mouseover", () => {
//     panelEls[i].style.top = 0;
//   });
// }

// only for 1, for now

projEls[0].addEventListener("mouseover", () => {
  panelEls[0].style.top = 0;
});

// HIDES PANEL WITH EXTRA INFO FOR EACH PROJECT

// for (let j = 0; j < projEls.length; j++) {
//   projEls[j].addEventListener("mouseleave", () => {
//     panelEls[j].style.top = "-1000px";
//   });
// }

// only for 1, for now

projEls[0].addEventListener("mouseleave", () => {
  panelEls[0].style.top = "-1000px";
});

// scroll observer hint

const observerHint = new IntersectionObserver((els) => {
  els.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add("hint-anim");
    }
  });
});

observerHint.observe(document.querySelector(".hint"));

// scroll observer timeline

const observerTimeline = new IntersectionObserver((els) => {
  els.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add("svg-show");
    } else {
      el.target.classList.remove("svg-show");
    }
  });
});

observerTimeline.observe(document.querySelector(".timeline-svg"));

// shows info when clicking on the flag

function showBox1() {
  infoBoxEl1.style.visibility = "visible";
}

function hideBox1() {
  infoBoxEl1.style.visibility = "hidden";
}

function showBox2() {
  infoBoxEl2.style.visibility = "visible";
}

function hideBox2() {
  infoBoxEl2.style.visibility = "hidden";
}

f1El.addEventListener("click", showBox1);
f1El.addEventListener("dblclick", hideBox1);
f2El.addEventListener("click", showBox2);
f2El.addEventListener("dblclick", hideBox2);

// hides info boxes if the user scrolls somewhere else on the page and the boxes are still open

const observerInfo1 = new IntersectionObserver((els) => {
  els.forEach((el) => {
    if (!el.isIntersecting && window.innerWidth > 768) {
      el.target.style.visibility = "hidden";
    } else if (window.innerWidth < 768) {
      el.target.style.visibility = "visible";
    }
  });
});

observerInfo1.observe(document.querySelector(".card-ed"));

const observerInfo2 = new IntersectionObserver((els) => {
  els.forEach((el) => {
    if (!el.isIntersecting && window.innerWidth > 768) {
      el.target.style.visibility = "hidden";
    } else if (window.innerWidth < 768) {
      el.target.style.visibility = "visible";
    }
  });
});

observerInfo2.observe(document.querySelector(".card-ed2"));

// hides/shows boxes of info (from the timeline section) that were left visible/hidden, depending on screen size

window.addEventListener("resize", () => {
  if (window.innerWidth < 768 && infoBoxEl1.style.visibility === "hidden") {
    showBox1();
  } else if (
    window.innerWidth > 768 &&
    infoBoxEl1.style.visibility === "visible"
  ) {
    hideBox1();
  }

  if (window.innerWidth < 768 && infoBoxEl2.style.visibility === "hidden") {
    showBox2();
  } else if (
    window.innerWidth > 768 &&
    infoBoxEl2.style.visibility === "visible"
  ) {
    hideBox2();
  }
});

// hover behaviour for box 1 of info in contact section

listEls[0].addEventListener("mouseover", () => {
  listLinks[0].textContent = " ";
});
listEls[0].addEventListener("mouseleave", () => {
  listLinks[0].textContent = "hover over me ";
});

// hover behaviour for box 2 of info in contact section

listEls[1].addEventListener("mouseover", () => {
  listLinks[1].textContent = " ";
});
listEls[1].addEventListener("mouseleave", () => {
  listLinks[1].textContent = "hover over me ";
});

// hover behaviour for box 3 of info in contact section

listEls[2].addEventListener("mouseover", () => {
  listEls[2].textContent = "madalinrobu18@gmail.com";
});
listEls[2].addEventListener("mouseleave", () => {
  listEls[2].textContent = "hover over me ";
});

// hover behaviour for box 4 of info in contact section

listEls[3].addEventListener("mouseover", () => {
  listEls[3].textContent = "0767894078";
});
listEls[3].addEventListener("mouseleave", () => {
  listEls[3].textContent = "hover over me ";
});

// copies mail adress / phone number and shows toast on the left side of the screen

const toastBootstrapMail = bootstrap.Toast.getOrCreateInstance(toastEl);
const toastBootstrapPhone = bootstrap.Toast.getOrCreateInstance(toastEl2);

mailEl.addEventListener("click", () => {
  navigator.clipboard.writeText(mailEl.textContent);
  toastBootstrapMail.show();
});

phoneEl.addEventListener("click", () => {
  navigator.clipboard.writeText(phoneEl.textContent);
  toastBootstrapPhone.show();
});

// animates the contact blocks when they are visible

const boxesObserver = new IntersectionObserver((els) => {
  els.forEach((el) => {
    if (el.isIntersecting) {
      Array.from(listEls).forEach((box) => {
        box.classList.add("box-animation");
      });
    } else {
      Array.from(listEls).forEach((box) => {
        box.classList.remove("box-animation");
      });
    }
  });
});

boxesObserver.observe(contactSectionEl);

// animates tech items on scroll

const techObserver = new IntersectionObserver((els) => {
  els.forEach((el) => {
    if (el.isIntersecting) {
      techHeader1.classList.add("header-anim");
      techHeader2.classList.add("header-anim");
      techItem1.classList.add("tech-item1-anim");
      techItem2.classList.add("tech-item2-anim");
      techItem3.classList.add("tech-item3-anim");
      techItem4.classList.add("tech-item4-anim");
      techItem5.classList.add("tech-item5-anim");
      techItem6.classList.add("tech-item6-anim");
      techItem7.classList.add("tech-item7-anim");
    } else {
      techHeader1.classList.remove("header-anim");
      techHeader2.classList.remove("header-anim");
      techItem1.classList.remove("tech-item1-anim");
      techItem2.classList.remove("tech-item2-anim");
      techItem3.classList.remove("tech-item3-anim");
      techItem4.classList.remove("tech-item4-anim");
      techItem5.classList.remove("tech-item5-anim");
      techItem6.classList.remove("tech-item6-anim");
      techItem7.classList.remove("tech-item7-anim");
    }
  });
});

techObserver.observe(techSection);

// hides the "back to top" button when the page is at the top

const aboutObserver = new IntersectionObserver((els) => {
  els.forEach((el) => {
    if (el.isIntersecting) {
      btnScroll.classList.add("redirect-hide");
    } else {
      btnScroll.classList.remove("redirect-hide");
    }
  });
});

aboutObserver.observe(aboutSectionEl);
