# Personal Site — masumcpex.bro.bd

ফ্রেশ, data-driven personal website। ডিজাইন কনসেপ্ট: "Reading Lamp" —
গাঢ় ইঙ্ক-নেভি ব্যাকগ্রাউন্ডে উষ্ণ সোনালি (amber) হাইলাইট।

## গঠন — ইচ্ছাকৃতভাবে সম্পূর্ণ ফ্ল্যাট (কোনো সাবফোল্ডার নেই)
মোবাইল ব্রাউজার দিয়ে GitHub-এ আপলোড করলে ফোল্ডার স্ট্রাকচার রাখা যায় না —
তাই সব ফাইল সরাসরি repo root-এ থাকার জন্যই বানানো হয়েছে।

```
index.html        হোমপেজ
404.html          এরর পেজ
style.css         পুরো ডিজাইন সিস্টেম
data.js           সব content এখানে — নতুন লেখা/বই/প্রজেক্ট যোগ করতে শুধু এই ফাইল এডিট করুন
app.js            data.js থেকে content render করে (হাত দেওয়ার দরকার নেই)
ui.js             visual enhancement — মোবাইল মেনু, sticky header, scroll reveal
yellow.webp       হেডারের ছোট সার্কুলার প্রোফাইল ছবি
bd.png            হিরো সেকশনের মূল বড় ছবি (about সেকশনেও ব্যবহৃত)
favicon.ico, favicon-16.png, favicon-32.png,
apple-touch-icon.png, android-chrome-192.png,
android-chrome-512.png, site.webmanifest        আইকন ও PWA ম্যানিফেস্ট
CNAME             GitHub Pages custom domain (masumcpex.bro.bd)
robots.txt / sitemap.xml   SEO
```

## আপলোড করার নিয়ম
এই সবগুলো ফাইল **একসাথে সিলেক্ট করে** GitHub repo-র root-এ "Add files via
upload" দিয়ে ড্র্যাগ করবেন। কোনো ফোল্ডার তৈরি করার দরকার নেই — সব ফাইল
পাশাপাশি (flat) থাকবে, ঠিক যেভাবে এখানে দেওয়া আছে।

## নতুন content যোগ করবেন কীভাবে
`data.js` ফাইলে গিয়ে যেই সেকশনে content যোগ করতে চান (hero, about, journey,
library, journal, articles, projects, contact), সেখানে entry বসিয়ে দিন।
Design ভাঙবে না, নতুন কার্ড/এন্ট্রি নিজে থেকেই render হয়ে যাবে।

## প্রতিটা সেকশনের ফিল্ড গঠন
```
journey:   { year, title, description }
library:   { id, title, cover, description, link }
journal:   { id, title, category, date, excerpt, content }
articles:  { id, title, category, date, excerpt, content, url }
projects:  { id, title, description, link, status }
contact.socials: { label, url, icon }
```

## এখনও যা placeholder আকারে আছে
- Hero ও About-এর নাম/পরিচয়/বায়ো টেক্সট, Journey-র ৪টা মাইলস্টোনের টাইটেল/বর্ণনা
- Library, Journal, Articles, Projects — খালি
- Contact-এর ফোন/ইমেইল/সোশ্যাল লিংক

## গুরুত্বপূর্ণ
Library নেভিগেশন লিংক ইচ্ছাকৃতভাবে `https://masumcpex.com/index.html#library`-এ যায়।
