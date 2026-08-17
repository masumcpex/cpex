const ICON_PHONE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;margin-right:6px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';
const ICON_MAIL = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;margin-right:6px;"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 6 12 13 2 6"></path></svg>';
const ICON_LINK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>';

document.addEventListener("DOMContentLoaded", () => {

  const MOBILE_QUERY = "(max-width:860px)";
  const MOBILE_PHOTO = "bdflag.webp";

  function applyResponsivePhoto(imgEl, desktopSrc, isMobile){
    if (!imgEl) return;
    imgEl.src = isMobile ? MOBILE_PHOTO : desktopSrc;
  }

  const hero = SITE_DATA.hero;
  const brandMarkImg = document.querySelector(".brand-mark img");
  const aboutPhotoEl = document.getElementById("aboutPhoto");
  const about = SITE_DATA.about;

  const mql = window.matchMedia(MOBILE_QUERY);
  function syncPhotos(e){
    const isMobile = e.matches;
    applyResponsivePhoto(brandMarkImg, "photo.png", isMobile);
    applyResponsivePhoto(aboutPhotoEl, about.photo, isMobile);
  }
  syncPhotos(mql);
  mql.addEventListener("change", syncPhotos);

  setText("heroName", hero.name);
  setText("heroRole", hero.role);
  setText("heroTagline", hero.tagline);

  setText("aboutTitle", about.title);
  if (aboutPhotoEl) { aboutPhotoEl.alt = hero.name; }

  const aboutText = document.getElementById("aboutText");
  if (aboutText) {
    aboutText.innerHTML = about.paragraphs.map(p => `<p>${escapeHTML(p)}</p>`).join("");
  }

  const statRow = document.getElementById("aboutStats");
  if (statRow) {
    if (about.stats && about.stats.length) {
      statRow.innerHTML = about.stats.map(s => `
        <div class="stat">
          <div class="stat-num">${escapeHTML(s.num)}</div>
          <div class="stat-label">${escapeHTML(s.label)}</div>
        </div>`).join("");
    } else {
      statRow.remove();
    }
  }

  renderJourney("journeyTimeline", SITE_DATA.journey);

  renderGrid("bookGrid", SITE_DATA.library, (item) => `
    <article class="card">
      <div class="card-eyebrow">Book</div>
      <h3 class="card-title">${escapeHTML(item.title)}</h3>
      <p class="card-desc">${escapeHTML(item.description || "")}</p>
    </article>
  `, "এখনও কোনো বই যোগ করা হয়নি", "নতুন বই প্রকাশ হলে এখানে দেখা যাবে।");

  renderListWithModal("journalList", SITE_DATA.journal, "journal",
    "এখনও কোনো জার্নাল এন্ট্রি নেই", "মনের কথা লিখলে এখানে যোগ হবে।");
  renderFilters("journalFilters", SITE_DATA.journal, "journalList", "journal");

  renderListWithModal("articleList", SITE_DATA.articles, "articles",
    "এখনও কোনো আর্টিকেল প্রকাশিত হয়নি", "নতুন লেখা প্রকাশ হলে এখানে দেখা যাবে।");
  renderFilters("articleFilters", SITE_DATA.articles, "articleList", "articles");

  renderGrid("projectGrid", SITE_DATA.projects, (item) => `
    <article class="card">
      <div class="card-eyebrow">${escapeHTML(item.status || "Project")}</div>
      <h3 class="card-title">${escapeHTML(item.title)}</h3>
      <p class="card-desc">${escapeHTML(item.description || "")}</p>
    </article>
  `, "এখনও কোনো প্রজেক্ট যোগ করা হয়নি", "নতুন কিছু তৈরি করলে এখানে যোগ হবে।");

  const contact = SITE_DATA.contact;
  const phoneEl = document.getElementById("contactPhone");
  if (phoneEl) {
    if (contact.phone) { phoneEl.innerHTML = ICON_PHONE + escapeHTML(contact.phone); }
    else { phoneEl.remove(); }
  }
  const emailEl = document.getElementById("contactEmails");
  if (emailEl) {
    if (contact.emails && contact.emails.length) { emailEl.innerHTML = ICON_MAIL + escapeHTML(contact.emails.join(" / ")); }
    else { emailEl.remove(); }
  }
  const socialRow = document.getElementById("socialRow");
  if (socialRow) {
    if (contact.socials && contact.socials.length) {
      socialRow.innerHTML = contact.socials.map(s => `
        <a href="${escapeAttr(s.url)}" target="_blank" rel="noopener" aria-label="${escapeAttr(s.label)}">${s.icon || ICON_LINK}</a>
      `).join("");
    }
  }

  const highlights = document.getElementById("homeHighlights");
  if (highlights) {
    const latestBook = SITE_DATA.library[0];
    const latestJournal = SITE_DATA.journal[0];
    const latestArticle = SITE_DATA.articles[0];
    const featuredProject = SITE_DATA.projects[0];
    const items = [
      latestBook && { label: "সর্বশেষ বই", title: latestBook.title, link: "https://masumcpex.com/index.html#library" },
      latestJournal && { label: "সর্বশেষ জার্নাল", title: latestJournal.title, link: "#journal" },
      latestArticle && { label: "সর্বশেষ আর্টিকেল", title: latestArticle.title, link: "#articles" },
      featuredProject && { label: "ফিচার্ড প্রজেক্ট", title: featuredProject.title, link: "#projects" }
    ].filter(Boolean);

    if (items.length) {
      highlights.innerHTML = items.map(i => `
        <a class="card" href="${i.link}">
          <div class="card-eyebrow">${escapeHTML(i.label)}</div>
          <h3 class="card-title">${escapeHTML(i.title)}</h3>
        </a>
      `).join("");
    } else {
      highlights.innerHTML = `
        <div class="empty-state">
          <strong>এখনও কিছু যোগ করা হয়নি</strong>
          data.js-এ content যোগ করলে এখানে সর্বশেষ বই, জার্নাল, আর্টিকেল ও প্রজেক্ট দেখা যাবে।
        </div>`;
    }
  }

  const navLinks = document.querySelectorAll('.main-nav a[data-nav]');
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("is-active"));
      link.classList.add("is-active");
      document.getElementById("mainNav")?.classList.remove("is-open");
    });
  });

  const sections = document.querySelectorAll(".page[id]");
  if ("IntersectionObserver" in window && sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(l => l.classList.toggle("is-active", l.dataset.nav === id));
        }
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    sections.forEach(s => navObserver.observe(s));
  }

  const modal = document.getElementById("readModal");
  const modalClose = document.getElementById("modalClose");
  function closeModal() {
    modal?.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  modalClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  if (searchInput && searchResults) {
    const searchIndex = [
      ...SITE_DATA.library.map(i => ({ ...i, type: "বই", link: "https://masumcpex.com/index.html#library" })),
      ...SITE_DATA.journal.map(i => ({ ...i, type: "জার্নাল", link: "#journal" })),
      ...SITE_DATA.articles.map(i => ({ ...i, type: "আর্টিকেল", link: "#articles" })),
      ...SITE_DATA.projects.map(i => ({ ...i, type: "প্রজেক্ট", link: "#projects" }))
    ];
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) { searchResults.innerHTML = ""; return; }
      const matches = searchIndex.filter(i => i.title.toLowerCase().includes(q)).slice(0, 8);
      searchResults.innerHTML = matches.length
        ? matches.map(m => `<a href="${m.link}" style="display:block;padding:.4rem 0;">${escapeHTML(m.type)} · ${escapeHTML(m.title)}</a>`).join("")
        : `<p>কোনো ফলাফল পাওয়া যায়নি।</p>`;
    });
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text || "";
  }

  function renderJourney(containerId, items) {
    const el = document.getElementById(containerId);
    if (!el) return;
    if (!items || !items.length) { el.remove(); return; }
    el.innerHTML = items.map((item, idx) => `
      <div class="timeline-item ${idx % 2 === 0 ? "is-up" : "is-down"}" style="--i:${idx}">
        <div class="timeline-card">
          <h3 class="timeline-title">${escapeHTML(item.title)}</h3>
          <p class="timeline-desc">${escapeHTML(item.description)}</p>
        </div>
        <div class="timeline-node">
          <span class="timeline-dot"></span>
          <span class="timeline-year">${escapeHTML(item.year)}</span>
        </div>
      </div>
    `).join("");
  }

  function renderGrid(containerId, items, template, emptyTitle, emptyDesc) {
    const el = document.getElementById(containerId);
    if (!el) return;
    if (items && items.length) {
      el.innerHTML = items.map(template).join("");
    } else {
      el.innerHTML = `<div class="empty-state"><strong>${escapeHTML(emptyTitle)}</strong>${escapeHTML(emptyDesc)}</div>`;
    }
  }

  function renderListWithModal(containerId, items, categoryKey, emptyTitle, emptyDesc) {
    const el = document.getElementById(containerId);
    if (!el) return;
    if (!items || !items.length) {
      el.innerHTML = `<div class="empty-state"><strong>${escapeHTML(emptyTitle)}</strong>${escapeHTML(emptyDesc)}</div>`;
      return;
    }
    el.innerHTML = items.map((item, idx) => `
      <article class="card" data-open="${categoryKey}-${idx}" tabindex="0" role="button">
        <div class="card-eyebrow">${escapeHTML(item.category || "")}</div>
        <h3 class="card-title">${escapeHTML(item.title)}</h3>
        <p class="card-desc">${escapeHTML(item.excerpt || "")}</p>
        <div class="card-date">${escapeHTML(item.date || "")}</div>
      </article>
    `).join("");

    el.querySelectorAll("[data-open]").forEach((card, idx) => {
      const open = () => openModal(items[idx]);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => { if (e.key === "Enter") open(); });
    });
  }

  function renderFilters(containerId, items, listId, categoryKey) {
    const el = document.getElementById(containerId);
    if (!el || !items || !items.length) { if (el) el.remove(); return; }
    const cats = ["সব", ...new Set(items.map(i => i.category).filter(Boolean))];
    el.innerHTML = cats.map((c, i) => `<button class="chip ${i === 0 ? "is-active" : ""}" data-cat="${escapeAttr(c)}">${escapeHTML(c)}</button>`).join("");
    el.querySelectorAll(".chip").forEach(chip => {
      chip.addEventListener("click", () => {
        el.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        const cat = chip.dataset.cat;
        const filtered = cat === "সব" ? items : items.filter(i => i.category === cat);
        renderListWithModal(listId, filtered, categoryKey, "কিছু পাওয়া যায়নি", "এই ক্যাটাগরিতে এখনও কিছু নেই।");
      });
    });
  }

  function openModal(item) {
    if (!modal) return;
    setText("modalCategory", item.category || "");
    setText("modalTitle", item.title || "");
    setText("modalDate", item.date || "");
    const contentEl = document.getElementById("modalContent");
    if (contentEl) contentEl.innerHTML = `<p>${escapeHTML(item.content || item.excerpt || "")}</p>`;
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    modalClose?.focus();
  }

  function escapeHTML(str) {
    if (str === undefined || str === null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function escapeAttr(str) {
    return escapeHTML(str).replace(/"/g, "&quot;");
  }

});
