/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Data Analyst", "Business Analyst"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
function redirectTo(url, target) {
  // Replace the URL with the social media page you want to navigate to
  window.open(url, target);
}
function sendMail() {
  window.open("mailto:arumugamvignesh203@gmail.com", "_blank");
}
function downloadCV() {
  const link = document.createElement("a");
  link.href = "assets/Vignesh_Resume.pdf"; // URL to your CV file
  link.setAttribute("download", "Vignesh_Resume.pdf"); // Set the download attribute to the desired file name
  link.style.display = "none"; // Hide the link element
  document.body.appendChild(link); // Append the link to the body
  link.click(); // Simulate a click on the link
  document.body.removeChild(link); // Remove the link after the download starts
}
 
document.addEventListener("DOMContentLoaded", function () {
  const Hire = document.querySelector("#HireMe");

  Hire.addEventListener("click", function () {
    // Scroll to the contact section
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });

    // Optionally, you can also change the URL hash
    // window.location.href = '#contact';
  });
});


// // Add a click event listener to the entire document
// document.addEventListener('click', function(event) {
//   // Check if the clicked element is a button or has a role of button
//   if (event.target.tagName === 'BUTTON' || event.target.closest('a,span, div, input[type="button"], input[type="submit"], .clickable')) {
//       const audio = new Audio("assets/mouse-click.mp3");
//       audio.play().then(() => {
//           console.log('Sound played successfully');
//       }).catch(error => {
//           console.error('Error playing sound:', error);
//       });
//   }
// });
function toggleSection(sectionType) {
  // Get all sections
  const sections = {
    completed: document.querySelector('.project-box-completed'),
    certifications: document.querySelector('.project-box-certifications')
  };
  
  // Get the current section to toggle
  const currentSection = sections[sectionType];
  const details = currentSection.querySelector('.project-details');
  const icon = currentSection.querySelector('.project-dropdown i');

  // Close all sections except the one being clicked
  Object.values(sections).forEach(section => {
    if (section !== currentSection) {
      const otherDetails = section.querySelector('.project-details');
      const otherIcon = section.querySelector('.project-dropdown i');
      otherDetails.style.maxHeight = null;
      otherIcon.classList.remove('bxs-chevron-up');
      otherIcon.classList.add('bxs-chevron-down');
    }
  });

  // Toggle the clicked section
  if (details.style.maxHeight) {
    details.style.maxHeight = null;
    icon.classList.remove('bxs-chevron-up');
    icon.classList.add('bxs-chevron-down');
  } else {
    details.style.maxHeight = details.scrollHeight + "px";
    icon.classList.remove('bxs-chevron-down');
    icon.classList.add('bxs-chevron-up');
  }
}

