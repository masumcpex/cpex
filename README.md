# Personal Site — masumcpex.bro.bd

ফ্রেশ, data-driven personal website। ডিজাইন কনসেপ্ট: "Reading Lamp" —
গাঢ় ইঙ্ক-নেভি ব্যাকগ্রাউন্ডে উষ্ণ সোনালি (amber) হাইলাইট, যেন রাতে
বই পড়ার টেবিল-ল্যাম্পের আলো।

## গঠন
```
index.html        হোমপেজ (সব সেকশন একই পেজে, anchor নেভিগেশন)
404.html          এরর পেজ
css/style.css     পুরো ডিজাইন সিস্টেম (colors, type, layout, components)
js/data.js        সব content এখানে — নতুন লেখা/বই/প্রজেক্ট যোগ করতে শুধু এই ফাইল এডিট করুন
js/app.js         data.js থেকে content render করে (এখানে হাত দেওয়ার দরকার নেই)
js/ui.js          visual enhancement — মোবাইল মেনু, sticky header, scroll reveal
assets/images/    ছবি
CNAME             GitHub Pages custom domain (masumcpex.bro.bd)
robots.txt / sitemap.xml   SEO
```

## নতুন content যোগ করবেন কীভাবে
`js/data.js` ফাইলে গিয়ে যেই সেকশনে content যোগ করতে চান (hero, about,
library, journal, articles, projects, contact), সেখানে entry বসিয়ে দিন।
Design ভাঙবে না, নতুন কার্ড/এন্ট্রি নিজে থেকেই render হয়ে যাবে।

## প্রতিটা সেকশনের ফিল্ড গঠন
```
library:   { id, title, cover, description, link }
journal:   { id, title, category, date, excerpt, content }
articles:  { id, title, category, date, excerpt, content, url }
projects:  { id, title, description, link, status }
contact.socials: { label, url, icon }   (icon না দিলে ডিফল্ট আইকন বসবে)
```

## এখনও যা placeholder আকারে আছে
- Hero ও About-এর নাম/পরিচয়/বায়ো টেক্সট — `[ ]` ব্র্যাকেটে চিহ্নিত
- Library, Journal, Articles, Projects — খালি (আগের সব real content সরিয়ে ফেলা হয়েছে অনুরোধ অনুযায়ী)
- Contact-এর ফোন/ইমেইল/সোশ্যাল লিংক
