/* ==========================================================================
   ui.js — শুধুই ভিজ্যুয়াল এনহ্যান্সমেন্ট (স্ক্রল-রিভিল, স্টিকি নেভবার শ্যাডো,
   aria স্টেট সিঙ্ক)। এই ফাইলে কোনো কনটেন্ট/ডেটা/রাউটিং লজিক নেই —
   সেসব script.js এই থাকছে, অপরিবর্তিত। ui.js লোড না হলেও সাইট পুরোপুরি
   কাজ করবে, শুধু অ্যানিমেশনগুলো দেখা যাবে না।
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- STICKY NAVBAR SHADOW ON SCROLL ---------------- */
  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------- MENU TOGGLE ARIA STATE ---------------- */
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (menuToggle && mainNav) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-controls", "mainNav");
    const syncMenuAria = () => {
      menuToggle.setAttribute("aria-expanded", mainNav.classList.contains("open") ? "true" : "false");
    };
    menuToggle.addEventListener("click", () => {
      // runs after script.js's own click handler toggles .open
      requestAnimationFrame(syncMenuAria);
    });
  }

  /* ---------------- SEARCH TOGGLE ARIA STATE ---------------- */
  const searchToggle = document.getElementById("searchToggle");
  const searchPanel = document.getElementById("searchPanel");
  if (searchToggle && searchPanel) {
    searchToggle.setAttribute("aria-expanded", "false");
    searchToggle.setAttribute("aria-controls", "searchPanel");
    searchToggle.addEventListener("click", () => {
      requestAnimationFrame(() => {
        searchToggle.setAttribute("aria-expanded", searchPanel.classList.contains("open") ? "true" : "false");
      });
    });
  }

  /* ---------------- SCROLL-REVEAL FOR CARDS ----------------
     Works with any cards already in the DOM *and* any cards script.js
     injects later, since we (re)scan on a short delay after load and
     also observe mutations on the main content area. */
  if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal-ready");

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    const observeCards = () => {
      document
        .querySelectorAll(".highlight-card, .book-card, .entry-card")
        .forEach((card) => {
          if (!card.dataset.revealBound) {
            card.dataset.revealBound = "true";
            revealObserver.observe(card);
          }
        });
    };

    // script.js populates cards synchronously on DOMContentLoaded, but we
    // defer one tick to be safe, then keep watching for any later changes
    // (e.g. filter clicks re-rendering the journal/article lists).
    setTimeout(observeCards, 0);

    const mainEl = document.querySelector("main");
    if (mainEl) {
      const mutationObserver = new MutationObserver(() => observeCards());
      mutationObserver.observe(mainEl, { childList: true, subtree: true });
    }

    // Safety net: when navigation swaps which .page is active (script.js's
    // routing), a card that was display:none at observe-time may not fire
    // its IntersectionObserver callback in every browser. On each page
    // switch, reveal only the cards already within (or just below) the
    // viewport — matching normal scroll-reveal behaviour — and leave the
    // rest for the observer to catch as the user scrolls, so content is
    // never stuck invisible but the reveal effect still plays out.
    const revealVisibleInActivePage = () => {
      const activePage = document.querySelector(".page.active");
      if (!activePage) return;
      const limit = window.innerHeight * 1.1;
      activePage.querySelectorAll(".highlight-card, .book-card, .entry-card").forEach((card) => {
        if (card.getBoundingClientRect().top < limit) card.classList.add("in-view");
      });
    };
    window.addEventListener("hashchange", () => requestAnimationFrame(revealVisibleInActivePage));
    requestAnimationFrame(revealVisibleInActivePage);
  }

});
