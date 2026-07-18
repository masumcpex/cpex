/* ==========================================================================
   article.js — রিডিং প্রোগ্রেস বার ও মোবাইল মেনু টগল।
   এই ফাইলটা যেকোনো আর্টিকেল পেজে পুনরায় ব্যবহার করা যাবে।
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- রিডিং প্রোগ্রেস বার ---------------- */
  const progressFill = document.getElementById("progressFill");
  function updateProgress(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressFill.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  /* ---------------- মোবাইল মেনু টগল ---------------- */
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if(menuToggle && mainNav){
    menuToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
  }

});

