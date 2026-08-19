document.addEventListener("DOMContentLoaded", () => {

  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (menuToggle && mobileMenu) {
    const closeMobileMenu = () => {
      mobileMenu.classList.remove("is-open");
      menuToggle.classList.remove("is-active");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("is-open");
      menuToggle.classList.toggle("is-active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  const searchToggle = document.getElementById("searchToggle");
  const searchPanel = document.getElementById("searchPanel");
  const searchClose = document.getElementById("searchClose");
  const searchInput = document.getElementById("searchInput");
  if (searchToggle && searchPanel) {
    searchToggle.addEventListener("click", () => {
      searchPanel.classList.add("is-open");
      searchInput?.focus();
    });
  }
  searchClose?.addEventListener("click", () => searchPanel?.classList.remove("is-open"));

  const revealEls = document.querySelectorAll(".card, .section-title, .hero, .timeline-item");
  revealEls.forEach(el => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("is-visible"));
  }

});
