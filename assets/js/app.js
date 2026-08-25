const FALLBACK_HOME_DATA = {
  properties: [
    { id: "rv-lvr-001", type: "Apartment", name: "Rivross Lake View Residence", location: "Uttara, Dhaka", price: "BDT 6,500 /sqft", imageLabel: "Lake View Residence" },
    { id: "rv-gh-002", type: "Apartment", name: "Rivross Green Heights", location: "Bashundhara, Dhaka", price: "BDT 7,200 /sqft", imageLabel: "Green Heights" },
    { id: "rv-ct-003", type: "Commercial", name: "Rivross Corporate Tower", location: "Gulshan, Dhaka", price: "BDT 18,000 /sqft", imageLabel: "Corporate Tower" }
  ],
  projects: [
    { id: "project-heights", status: "Ongoing", name: "Rivross Heights", location: "Bashundhara, Dhaka", detail: "Completion: Dec 2026", imageLabel: "Rivross Heights" },
    { id: "project-city-center", status: "Upcoming", name: "Rivross City Center", location: "Mirpur, Dhaka", detail: "Completion: Jun 2027", imageLabel: "City Center" },
    { id: "project-garden", status: "Completed", name: "Rivross Garden", location: "Uttara, Dhaka", detail: "Completed: 2024", imageLabel: "Rivross Garden" }
  ],
  news: [
    { id: "news-lake-view-update", date: "May 02, 2026", title: "Rivross Lake View Residence Construction Update", category: "Project Updates", imageLabel: "Lake View Update" },
    { id: "news-travel-services", date: "Mar 05, 2026", title: "RIVROSS Expands Corporate Travel Services", category: "Company News", imageLabel: "Corporate Travel" },
    { id: "news-partnership", date: "Mar 28, 2026", title: "New Business Partnership Announced", category: "Company News", imageLabel: "Partnership" }
  ],
  team: [
    { id: "nasrullah-nahid", name: "Nasrullah Hossain Nahid", role: "Chief Operating Officer" },
    { id: "fatin-fahim", name: "Md. Fatin Ishtiyaq Fahim", role: "Chief Financial Officer" },
    { id: "obayed-sarker", name: "MD Obayed Ullah Sarker", role: "Director, Operations" },
    { id: "ataullah", name: "MD Ataullah", role: "Director, Real Estate" }
  ]
};

const escapeHtml = value => String(value ?? "").replace(/[&<>'"]/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;"
}[character]));
const placeholder = (label, modifier = "") => `<div class="image-placeholder ${modifier}"><span>${escapeHtml(label)}</span></div>`;
const content = () => window.RIVROSS_DATA_PROMISE || Promise.resolve(FALLBACK_HOME_DATA);

function renderHomeProperties(properties) {
  const target = document.querySelector("[data-properties]");
  if (!target) return;
  target.innerHTML = properties.slice(0, 3).map(item => `<article class="property-card"><a href="pages/property-details.html?id=${encodeURIComponent(item.id)}">${placeholder(item.imageLabel || "Property image")}</a><div class="card-body"><span class="tag">${escapeHtml(item.type)}</span><h3>${escapeHtml(item.name)}</h3><p>⌖ ${escapeHtml(item.location)}</p><span class="price">${escapeHtml(item.price)}</span></div></article>`).join("");
}

function renderHomeProjects(projects) {
  const target = document.querySelector("[data-projects]");
  if (!target) return;
  target.innerHTML = projects.slice(0, 3).map(item => `<article class="project-card"><a href="pages/projects.html#${encodeURIComponent(item.id)}">${placeholder(item.imageLabel || item.status, "project-image")}</a><div class="card-body"><span class="tag">${escapeHtml(item.status)}</span><h3>${escapeHtml(item.name)}</h3><p>⌖ ${escapeHtml(item.location)}</p><p>${escapeHtml(item.detail)}</p></div></article>`).join("");
}

function renderHomeNews(news) {
  const target = document.querySelector("[data-news]");
  if (!target) return;
  target.innerHTML = news.slice(0, 3).map(item => `<article class="news-item"><a href="pages/news-details.html?id=${encodeURIComponent(item.id)}">${placeholder(item.imageLabel || item.category)}</a><div><p>${escapeHtml(item.date)}</p><h3>${escapeHtml(item.title)}</h3><a class="text-link" href="pages/news-details.html?id=${encodeURIComponent(item.id)}">Read More <span aria-hidden="true">→</span></a></div></article>`).join("");
}

function renderHomeLeadership(team) {
  const target = document.querySelector("[data-leadership]");
  if (!target) return;
  target.innerHTML = team.slice(0, 4).map(item => `<article class="leadership-card"><a href="pages/leadership.html#${encodeURIComponent(item.id)}">${placeholder("Portrait")}</a><div class="card-body"><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.role)}</p></div></article>`).join("");
}

function setupNavigation() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
  document.querySelectorAll("[data-dropdown] > button").forEach(button => {
    button.addEventListener("click", () => {
      const parent = button.parentElement;
      const isOpen = parent.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await content();
  renderHomeProperties(data.properties || FALLBACK_HOME_DATA.properties);
  renderHomeProjects(data.projects || FALLBACK_HOME_DATA.projects);
  renderHomeNews(data.news || FALLBACK_HOME_DATA.news);
  renderHomeLeadership(data.team || FALLBACK_HOME_DATA.team);
  setupNavigation();
});
