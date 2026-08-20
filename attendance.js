const SUPABASE_URL = "https://zuzspxigzkatahmtopxa.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_MdePy9Or5nOyV-e7y6Cemg_PqOTOQ8Z";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener("DOMContentLoaded", () => {

  const loadingEl = document.getElementById("attLoading");
  const gateEl = document.getElementById("attLoginGate");
  const dashboardEl = document.getElementById("attDashboard");
  const statusEl = document.getElementById("attStatus");
  const userEmailEl = document.getElementById("attUserEmail");

  const btnGoogle = document.getElementById("btnGoogle");
  const btnFacebook = document.getElementById("btnFacebook");
  const btnEmailToggle = document.getElementById("btnEmailToggle");
  const emailForm = document.getElementById("attEmailForm");
  const emailInput = document.getElementById("attEmailInput");
  const emailSubmit = document.getElementById("attEmailSubmit");
  const btnSignOut = document.getElementById("btnSignOut");

  const avatarEl = document.getElementById("attAvatar");
  const userNameEl = document.getElementById("attUserName");
  const statTodayEl = document.getElementById("statToday");
  const statPresentEl = document.getElementById("statPresent");
  const statAbsentEl = document.getElementById("statAbsent");
  const statTotalDaysEl = document.getElementById("statTotalDays");
  const statPercentageEl = document.getElementById("statPercentage");

  const recordsLoadingEl = document.getElementById("attRecordsLoading");
  const recordsErrorEl = document.getElementById("attRecordsError");
  const recordsErrorTextEl = document.getElementById("attRecordsErrorText");
  const recordsEmptyEl = document.getElementById("attRecordsEmpty");
  const recordsListEl = document.getElementById("attRecordsList");
  const btnRetryRecords = document.getElementById("btnRetryRecords");

  const entryForm = document.getElementById("attEntryForm");
  const workDateInput = document.getElementById("attWorkDate");
  const statusSelect = document.getElementById("attStatus");
  const entrySubmitBtn = document.getElementById("attEntrySubmit");
  const entryStatusEl = document.getElementById("attEntryStatus");

  let currentUserId = null;

  function formatToday() {
    const days = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহঃ", "শুক্র", "শনি"];
    const now = new Date();
    const day = days[now.getDay()];
    const dateStr = now.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    return `${dateStr} (${day})`;
  }

  function fillDashboardStats(session) {
    const user = session?.user;
    const displayName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email || "User";
    userNameEl.textContent = displayName;
    avatarEl.textContent = displayName.trim().charAt(0) || "?";

    if (statTodayEl) statTodayEl.textContent = formatToday();
  }

  function formatRecordDate(dateStr) {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    const days = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহঃ", "শুক্র", "শনি"];
    const dateLabel = d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    return `${dateLabel} (${days[d.getDay()]})`;
  }

  function setRecordsState(state) {
    recordsLoadingEl.classList.toggle("hidden", state !== "loading");
    recordsErrorEl.classList.toggle("hidden", state !== "error");
    recordsEmptyEl.classList.toggle("hidden", state !== "empty");
    recordsListEl.classList.toggle("hidden", state !== "list");
  }

  function updateStatsFromRecords(records) {
    const totalDays = records.length;
    const present = records.filter(r => r.status === "Present").length;
    const leave = records.filter(r => r.status === "Leave").length;
    const percentage = totalDays > 0 ? Math.round((present / totalDays) * 100) : 0;

    if (statPresentEl) statPresentEl.textContent = present;
    if (statAbsentEl) statAbsentEl.textContent = leave;
    if (statTotalDaysEl) statTotalDaysEl.textContent = totalDays;
    if (statPercentageEl) statPercentageEl.textContent = `${percentage}%`;
  }

  function renderRecords(records) {
    recordsListEl.innerHTML = records.map(r => {
      const isPresent = r.status === "Present";
      const badgeClass = isPresent ? "is-present" : "is-leave";
      return `
        <li class="att-record-row">
          <span class="att-record-date">${formatRecordDate(r.work_date)}</span>
          <span class="att-record-badge ${badgeClass}">${isPresent ? "Present" : "Leave"}</span>
        </li>`;
    }).join("");
  }

  async function loadAttendanceRecords(userId) {
    setRecordsState("loading");
    try {
      const { data, error } = await supabaseClient
        .from("attendance")
        .select("work_date, status")
        .eq("user_id", userId)
        .order("work_date", { ascending: false });

      if (error) throw error;

      const records = data || [];
      updateStatsFromRecords(records);

      if (records.length === 0) {
        setRecordsState("empty");
        return;
      }

      renderRecords(records);
      setRecordsState("list");
    } catch (err) {
      updateStatsFromRecords([]);
      recordsErrorTextEl.textContent = "রেকর্ড লোড করা যায়নি। আবার চেষ্টা করুন।";
      setRecordsState("error");
    }
  }

  function setStatus(message, type) {
    statusEl.textContent = message || "";
    statusEl.classList.remove("is-error", "is-success");
    if (type) statusEl.classList.add(type);
  }

  function showGate() {
    loadingEl.classList.add("hidden");
    dashboardEl.classList.add("hidden");
    gateEl.classList.remove("hidden");
    currentUserId = null;
  }

  function showDashboard(session) {
    loadingEl.classList.add("hidden");
    gateEl.classList.add("hidden");
    dashboardEl.classList.remove("hidden");
    userEmailEl.textContent = session?.user?.email || "";
    currentUserId = session.user.id;
    fillDashboardStats(session);
    loadAttendanceRecords(currentUserId);
    if (workDateInput && !workDateInput.value) {
      workDateInput.value = new Date().toISOString().slice(0, 10);
    }
  }

  async function checkSession() {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) {
      showGate();
      return;
    }
    if (data.session) {
      showDashboard(data.session);
    } else {
      showGate();
    }
  }

  supabaseClient.auth.onAuthStateChange((_event, session) => {
    if (session) {
      showDashboard(session);
    } else {
      showGate();
    }
  });

  btnGoogle.addEventListener("click", async () => {
    setStatus("");
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin + "/attendance/" }
    });
    if (error) setStatus(error.message, "is-error");
  });

  btnFacebook.addEventListener("click", async () => {
    setStatus("");
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "facebook",
      options: { redirectTo: window.location.origin + "/attendance/" }
    });
    if (error) setStatus(error.message, "is-error");
  });

  btnEmailToggle.addEventListener("click", () => {
    emailForm.classList.toggle("is-open");
    if (emailForm.classList.contains("is-open")) {
      emailInput.focus();
    }
  });

  emailForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email) return;

    emailSubmit.disabled = true;
    setStatus("পাঠানো হচ্ছে...");

    const { error } = await supabaseClient.auth.signInWithOtp({
      email: email,
      options: { emailRedirectTo: window.location.origin + "/attendance/" }
    });

    emailSubmit.disabled = false;

    if (error) {
      setStatus(error.message, "is-error");
    } else {
      setStatus("চেক করুন — আপনার ইমেইলে একটি Magic Link পাঠানো হয়েছে।", "is-success");
    }
  });

  btnSignOut.addEventListener("click", async () => {
    await supabaseClient.auth.signOut();
    showGate();
  });

  btnRetryRecords.addEventListener("click", async () => {
    const { data } = await supabaseClient.auth.getSession();
    if (data.session) loadAttendanceRecords(data.session.user.id);
  });

  function setEntryStatus(message, type) {
    entryStatusEl.textContent = message || "";
    entryStatusEl.classList.remove("is-error", "is-success");
    if (type) entryStatusEl.classList.add(type);
  }

  entryForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    setEntryStatus("");

    if (!currentUserId) {
      setEntryStatus("সাবমিট করার আগে সাইন ইন করুন।", "is-error");
      return;
    }

    const workDate = workDateInput.value;
    const status = statusSelect.value;
    if (!workDate) {
      setEntryStatus("Work Date নির্বাচন করুন।", "is-error");
      return;
    }

    entrySubmitBtn.disabled = true;
    setEntryStatus("সাবমিট হচ্ছে...");

    const { error } = await supabaseClient
      .from("attendance")
      .insert({
        user_id: currentUserId,
        work_date: workDate,
        status: status
      });

    entrySubmitBtn.disabled = false;

    if (error) {
      if (error.code === "23505") {
        setEntryStatus("এই তারিখের জন্য ইতিমধ্যে একটি রেকর্ড আছে — একই তারিখে দুইবার সাবমিট করা যায় না।", "is-error");
      } else {
        setEntryStatus("সাবমিট করা যায়নি। আবার চেষ্টা করুন।", "is-error");
      }
      return;
    }

    setEntryStatus("Attendance সফলভাবে যোগ হয়েছে।", "is-success");
    entryForm.reset();
    workDateInput.value = new Date().toISOString().slice(0, 10);
    loadAttendanceRecords(currentUserId);
  });

  checkSession();
});
