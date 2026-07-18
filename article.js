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

  /* ---------------- শেয়ার বাটন (নতুন — শুধু যেসব পেজে এই বাটন আছে সেখানেই কাজ করবে) ---------------- */
  document.querySelectorAll("[data-share]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const url = window.location.href;
      const title = document.title;
      const platform = btn.dataset.share;
      if(platform === "native" && navigator.share){
        navigator.share({ title, url });
      } else if(platform === "facebook"){
        window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(url), "_blank");
      } else if(platform === "whatsapp"){
        window.open("https://wa.me/?text="+encodeURIComponent(title+" — "+url), "_blank");
      } else if(platform === "telegram"){
        window.open("https://t.me/share/url?url="+encodeURIComponent(url)+"&text="+encodeURIComponent(title), "_blank");
      } else if(platform === "copy"){
        navigator.clipboard.writeText(url).then(()=>{
          const old = btn.textContent;
          btn.textContent = "✅ কপি হয়েছে!";
          setTimeout(()=> btn.textContent = old, 1800);
        });
      }
    });
  });

});

