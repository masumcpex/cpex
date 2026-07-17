/* ==========================================================================
   data.js
   এখানে সাইটের সব কনটেন্ট (বই, জার্নাল, আর্টিকেল, প্রজেক্ট) থাকবে।
   নতুন কিছু যোগ করতে চাইলে শুধু নিচের অ্যারেতে নতুন { ... } অবজেক্ট বসিয়ে দিন।
   কপি-পেস্ট করে সহজেই নতুন এন্ট্রি বানানো যায়।
   ========================================================================== */

const SITE_DATA = {

  /* ---------------- হিরো সেকশন (হোমপেজের উপরের অংশ) ---------------- */
  hero: {
    photo: "https://masumcpex.github.io/masumcpex/1000004949.jpg",
    name: "Masum Billah",
    role: "Writer • Learner • Builder",
    tagline: "Learning never stops. Build something meaningful every day.",
    ctaText: "আমার বইসমূহ দেখুন",
    ctaLink: "#library"
  },

  /* ---------------- About সেকশন ---------------- */
  about: {
    title: "আমি মাসুম",
    photo: "https://masumcpex.github.io/masumcpex/masum.png",
    paragraphs: [
      "আমি মাসুম। বই লিখতে ভালোবাসি, অনুভূতি ও জীবনের ছোট ছোট শিক্ষা ছড়িয়ে দিতে পছন্দ করি — একই সাথে স্মার্ট ওয়েব টুলস তৈরি করি।",
      "লেখালেখি আমার কাছে অনুভূতি প্রকাশের একটি অন্যতম মাধ্যম। পাশাপাশি প্রোডাক্টিভ কোডিং সলিউশন তৈরি করে জীবনকে সহজ করতে আমি পছন্দ করি।"
    ],
    stats: [
      { number: "৬টি", label: "সংরক্ষিত ই-বুক" },
      { number: "১টি", label: "কাজের ঘণ্টা ট্র্যাকার" },
      { number: "১০০%", label: "স্মার্ট ডিজাইন" }
    ]
  },

  /* ---------------- Library: প্রতিটি বই একটি কার্ড হবে ---------------- */
  books: [
    {
      id: "book1",
      cover: "https://masumcpex.github.io/masumcpex/book1.png",
      title: "যার জন্যে কাঁদি সে কাঁদার যোগ্য নয়",
      category: "অনুপ্রেরণা ও জীবন",
      description: "হৃদয়ের গল্প ও আত্মোপলব্ধির সাবলীল সমন্বয়।",
      readingTime: "৩৫ মিনিট",
      pdfUrl: "https://drive.google.com/file/d/1ciB-tX7PDKU8ytY1Ja22iqE5_gydopoE/view?usp=drivesdk",
      readMoreUrl: "https://drive.google.com/file/d/1ciB-tX7PDKU8ytY1Ja22iqE5_gydopoE/view?usp=drivesdk",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1ciB-tX7PDKU8ytY1Ja22iqE5_gydopoE",
      locked: false
    },
    {
      id: "book2",
      cover: "https://masumcpex.github.io/masumcpex/eka.jpg",
      title: "একাকিত্বের নোটবুক",
      category: "ভাবনা ও ডায়েরি",
      description: "নিঃসঙ্গতার প্রহরে ডায়েরির পাতায় আঁকা কিছু অনুভূতি।",
      readingTime: "২৫ মিনিট",
      pdfUrl: "https://drive.google.com/file/d/10q4PqYsGaV97mrpzry8J0h4mw94kcdlF/view?usp=drivesdk",
      readMoreUrl: "https://drive.google.com/file/d/10q4PqYsGaV97mrpzry8J0h4mw94kcdlF/view?usp=drivesdk",
      downloadUrl: "https://drive.google.com/uc?export=download&id=10q4PqYsGaV97mrpzry8J0h4mw94kcdlF",
      locked: false
    },
    {
      id: "book3",
      cover: "https://masumcpex.github.io/masumcpex/book3.png",
      title: "ইংলিশ শেখার সহজ রোডম্যাপ",
      category: "শিক্ষা ও ক্যারিয়ার",
      description: "সহজ গাইডলাইনে ইংরেজি শেখার সম্পূর্ণ পথ রেখা।",
      readingTime: "৪০ মিনিট",
      pdfUrl: "https://drive.google.com/file/d/1R3BcEq1E3dPNwdVMxgIpnYkqWNMHRncv/view?usp=drivesdk",
      readMoreUrl: "https://drive.google.com/file/d/1R3BcEq1E3dPNwdVMxgIpnYkqWNMHRncv/view?usp=drivesdk",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1R3BcEq1E3dPNwdVMxgIpnYkqWNMHRncv",
      locked: false
    },
    {
      id: "book4",
      cover: "https://masumcpex.github.io/masumcpex/enhlishsmart.png",
      title: "Smart Spoken English",
      category: "ভাষা ও স্কিল",
      description: "স্মার্টলি ও অনর্গল ইংরেজি বলার প্র্যাক্টিক্যাল বই।",
      readingTime: "৩০ মিনিট",
      pdfUrl: "https://drive.google.com/file/d/1jCStUE4-T6l50Y1jKDI0_tAzqX-f8JZE/view?usp=drivesdk",
      readMoreUrl: "https://drive.google.com/file/d/1jCStUE4-T6l50Y1jKDI0_tAzqX-f8JZE/view?usp=drivesdk",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1jCStUE4-T6l50Y1jKDI0_tAzqX-f8JZE",
      locked: false
    },
    {
      id: "book5",
      cover: "https://masumcpex.github.io/masumcpex/bookb.png",
      title: "Easy English Mastery",
      category: "ভাষা ও স্কিল",
      description: "সহজ নিয়মে ইংরেজি গ্রামার ও স্পোকেন আয়ত্ত করার গাইড।",
      readingTime: "৩২ মিনিট",
      pdfUrl: "https://drive.google.com/file/d/1BydwswVhKcKPrW7EPScfCyUEs6LXakN-/view?usp=drivesdk",
      readMoreUrl: "https://drive.google.com/file/d/1BydwswVhKcKPrW7EPScfCyUEs6LXakN-/view?usp=drivesdk",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1BydwswVhKcKPrW7EPScfCyUEs6LXakN-",
      locked: false
    },
    {
      id: "book6",
      cover: "https://masumcpex.github.io/masumcpex/cpex.png",
      title: "চলার পথে আমার গল্প",
      category: "সিক্রেট / পার্সোনাল",
      description: "এই বইটি সবার জন্য উন্মুক্ত নয়। এটি একটি বিশেষ ব্যক্তিগত সংস্করণ।",
      readingTime: "—",
      pdfUrl: "#",
      readMoreUrl: "#",
      downloadUrl: "#",
      locked: true
    }
  ],

  /* ---------------- Journal: Medium-এর মতো ব্যক্তিগত লেখা ---------------- */
  journalCategories: ["সব", "ব্যক্তিগত গল্প", "অনুভূতি", "Daily Notes", "শেখার জার্নাল", "Life Lessons", "ভ্রমণ"],

  journal: [
    {
      id: "j1",
      title: "আজকের একটি সাধারণ বিকেল",
      category: "Daily Notes",
      date: "২০২৬-০৭-১০",
      image: "",
      excerpt: "কিছু বিকেল থাকে যা বিশেষ কিছু না করেই মনে থেকে যায়...",
      content: "কিছু বিকেল থাকে যা বিশেষ কিছু না করেই মনে থেকে যায়। আজকের বিকেলটাও তেমন — চা, জানালার পাশে বসে থাকা, আর কিছু এলোমেলো চিন্তা। (এখানে আপনার পুরো লেখা বসিয়ে দিন — data.js ফাইলে এই content ফিল্ডটি এডিট করলেই হবে।)"
    },
    {
      id: "j2",
      title: "একটি শেখার মুহূর্ত",
      category: "শেখার জার্নাল",
      date: "২০২৬-০৭-০৫",
      image: "",
      excerpt: "নতুন কিছু শেখার সময় যে ছোট ছোট ভুল হয়, সেগুলোই আসলে শিক্ষক...",
      content: "নতুন কিছু শেখার সময় যে ছোট ছোট ভুল হয়, সেগুলোই আসলে শিক্ষক। (এই জায়গায় আসল লেখাটি বসান — data.js এর journal অ্যারেতে content ফিল্ড এডিট করুন।)"
    },
    {
      id: "j3",
      title: "জীবনের একটি ছোট শিক্ষা",
      category: "Life Lessons",
      date: "২০২৬-০৬-২৮",
      image: "",
      excerpt: "সবকিছু পরিকল্পনা মতো হয় না — আর সেটাই মেনে নেওয়া শেখা দরকার...",
      content: "সবকিছু পরিকল্পনা মতো হয় না — আর সেটাই মেনে নেওয়া শেখা দরকার। (নমুনা লেখা — আসল কনটেন্ট দিয়ে প্রতিস্থাপন করুন।)"
    }
  ],

  /* ---------------- Articles: ব্লগ পোস্ট ---------------- */
  articleCategories: ["সব", "বাংলাদেশের শিক্ষাব্যবস্থা", "ইংরেজি শেখা", "AI", "Programming", "Construction", "Productivity"],

  articles: [
    {
      id: "a1",
      title: "বাংলাদেশের শিক্ষাব্যবস্থা: সমস্যা ও সম্ভাবনা",
      category: "বাংলাদেশের শিক্ষাব্যবস্থা",
      date: "২০২৬-০৭-১২",
      image: "",
      excerpt: "আমাদের শিক্ষাব্যবস্থার কাঠামোগত কিছু সমস্যা এবং সেগুলোর সম্ভাব্য সমাধান নিয়ে আলোচনা...",
      content: "আমাদের শিক্ষাব্যবস্থার কাঠামোগত কিছু সমস্যা এবং সেগুলোর সম্ভাব্য সমাধান নিয়ে আলোচনা। (এখানে সম্পূর্ণ আর্টিকেল বসান — data.js এর articles অ্যারেতে content ফিল্ড এডিট করুন।)"
    },
    {
      id: "a2",
      title: "AI যুগে প্রোগ্রামিং শেখার সঠিক পথ",
      category: "Programming",
      date: "২০২৬-০৭-০৮",
      image: "",
      excerpt: "AI টুলস থাকা সত্ত্বেও প্রোগ্রামিং শেখা কেন এখনও গুরুত্বপূর্ণ...",
      content: "AI টুলস থাকা সত্ত্বেও প্রোগ্রামিং শেখা কেন এখনও গুরুত্বপূর্ণ, তা নিয়ে বিস্তারিত। (নমুনা লেখা — আসল কনটেন্ট দিয়ে প্রতিস্থাপন করুন।)"
    },
    {
      id: "a3",
      title: "প্রোডাক্টিভিটি বাড়ানোর ৫টি সহজ অভ্যাস",
      category: "Productivity",
      date: "২০২৬-০৬-৩০",
      image: "",
      excerpt: "দৈনন্দিন জীবনে ছোট কিছু পরিবর্তন কীভাবে বড় পার্থক্য তৈরি করতে পারে...",
      content: "দৈনন্দিন জীবনে ছোট কিছু পরিবর্তন কীভাবে বড় পার্থক্য তৈরি করতে পারে, তার একটি তালিকা। (নমুনা লেখা — আসল কনটেন্ট দিয়ে প্রতিস্থাপন করুন।)"
    }
  ],

  /* ---------------- Projects ---------------- */
  projects: [
    {
      id: "p1",
      title: "Masum Notes",
      icon: "📝",
      description: "ব্যক্তিগত নোট রাখার এবং সাজিয়ে রাখার একটি ছোট্ট টুল।",
      status: "চলছে",
      url: "#"
    },
    {
      id: "p2",
      title: "Work Log",
      icon: "⚡",
      description: "কর্মীদের কাজের দৈনিক ঘণ্টা হিসাব, উপস্থিতি ট্র্যাকিং এবং ফাইল ও লিংক ম্যানেজমেন্টের জন্য তৈরি ডিজিটাল খাতা।",
      status: "লাইভ",
      url: "https://masumcpex.github.io/masumcpex/worklog.html"
    },
    {
      id: "p3",
      title: "Mystery Game",
      icon: "🎮",
      description: "CICADA 3301 ধাঁচের জটিল ধাঁধা ও বুদ্ধিমত্তার খেলা।",
      status: "লাইভ",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeUXTUT5i4McPtrl27yQj3L3BYl_wGWjVKEDpnMpLnD8Sn3YQ/viewform"
    },
    {
      id: "p4",
      title: "English Learning",
      icon: "🗣️",
      description: "স্মার্ট স্পোকেন ইংলিশ শেখার একটি ইন্টারঅ্যাক্টিভ প্ল্যাটফর্ম।",
      status: "পরিকল্পনায়",
      url: "#"
    },
    {
      id: "p5",
      title: "ভবিষ্যতের অ্যাপ",
      icon: "🚀",
      description: "নতুন আইডিয়া নিয়ে কাজ চলছে — শীঘ্রই আসছে।",
      status: "শীঘ্রই",
      url: "#"
    }
  ],

  /* ---------------- Mystery সেকশন ---------------- */
  mystery: {
    title: "⚠️ CICADA 3301 MYSTERY PUZZLE ⚠️",
    notice: "[SYSTEM NOTICE]: একটি অত্যন্ত জটিল ধাঁধা এবং বুদ্ধিমত্তার খেলা আপনার জন্য অপেক্ষা করছে। আপনি কি চ্যালেঞ্জটি নিতে প্রস্তুত?",
    qrImage: "",
    buttonText: "মিশনে প্রবেশ করুন",
    buttonUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeUXTUT5i4McPtrl27yQj3L3BYl_wGWjVKEDpnMpLnD8Sn3YQ/viewform"
  },

  /* ---------------- Contact সেকশন ---------------- */
  contact: {
    phone: "01133192963",
    emails: ["masumcpex@gmail.com", "masumcpex@yahoo.com"],
    socials: [
      { name: "Facebook", url: "https://www.facebook.com/share/1HM1rZJg3a/" },
      { name: "Instagram", url: "https://www.instagram.com/masum.171" },
      { name: "TikTok", url: "https://www.tiktok.com/@masum__171" },
      { name: "Telegram", url: "https://t.me/masum171" },
      { name: "Medium", url: "https://medium.com/@masumcpex" },
      { name: "Tumblr", url: "https://www.tumblr.com/masum171" },
      { name: "Blogger", url: "https://masum171.blogspot.com/" },
      { name: "Gmail", url: "mailto:masumcpex@gmail.com" }
    ]
  }
};
        
