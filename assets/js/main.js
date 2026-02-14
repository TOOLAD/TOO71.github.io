document.addEventListener("DOMContentLoaded", function () {
  // Mark current page link as active
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Mobile menu toggle
  var menuToggle = document.querySelector(".menu-toggle");
  var navMenu = document.querySelector("nav ul");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("open");
    });
    // Close menu when a link is clicked
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("open");
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Fade-in animation on scroll
  var observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(".card, .publication-item, .stat, .student-card, .info-box, .grant-item, .fade-in")
    .forEach(function (el) {
      el.classList.add("fade-in");
      observer.observe(el);
    });
});
