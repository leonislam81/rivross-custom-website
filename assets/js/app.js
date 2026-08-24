const propertyData = [
  { type: 'Apartment', name: 'Rivross Lake View Residence', location: 'Uttara, Dhaka', price: 'BDT 6,500 /sqft' },
  { type: 'Apartment', name: 'Rivross Green Heights', location: 'Bashundhara, Dhaka', price: 'BDT 7,200 /sqft' },
  { type: 'Commercial', name: 'Rivross Corporate Tower', location: 'Gulshan, Dhaka', price: 'BDT 18,000 /sqft' },
];

const projectData = [
  { status: 'Ongoing', name: 'Rivross Heights', location: 'Bashundhara, Dhaka', detail: 'Completion: Dec 2026' },
  { status: 'Upcoming', name: 'Rivross City Center', location: 'Mirpur, Dhaka', detail: 'Completion: Jun 2027' },
  { status: 'Completed', name: 'Rivross Garden', location: 'Uttara, Dhaka', detail: 'Completed: 2024' },
];

const newsData = [
  { date: '07 Aug 2026', title: 'RIVROSS Real Estate Department Successfully Conducts Developer Meeting', type: 'Meeting' },
  { date: '05 Aug 2026', title: 'RIVROSS Expands Corporate Travel Services', type: 'Travel' },
  { date: '02 Aug 2026', title: 'New Business Partnership Announced', type: 'Partnership' },
];

const leadershipData = [
  { name: 'Nasrullah Hossain Nahid', role: 'Chief Operating Officer' },
  { name: 'Md. Fatin Ishtiyaq Fahim', role: 'Chief Financial Officer' },
  { name: 'MD Obayed Ullah Sarker', role: 'Director, Operations' },
  { name: 'MD Ataullah', role: 'Director, Real Estate' },
];

const placeholder = (label, modifier = '') => `<div class="image-placeholder ${modifier}"><span>${label}</span></div>`;

function renderProperties() {
  const target = document.querySelector('[data-properties]');
  if (!target) return;
  target.innerHTML = propertyData.map((item) => `<article class="property-card"><div>${placeholder('Property image')}</div><div class="card-body"><span class="tag">${item.type}</span><h3>${item.name}</h3><p>⌖ ${item.location}</p><span class="price">${item.price}</span></div></article>`).join('');
}

function renderProjects() {
  const target = document.querySelector('[data-projects]');
  if (!target) return;
  target.innerHTML = projectData.map((item) => `<article class="project-card"><div>${placeholder(item.status, 'project-image')}</div><div class="card-body"><h3>${item.name}</h3><p>⌖ ${item.location}</p><p>${item.detail}</p></div></article>`).join('');
}

function renderNews() {
  const target = document.querySelector('[data-news]');
  if (!target) return;
  target.innerHTML = newsData.map((item) => `<article class="news-item">${placeholder(item.type)}<div><p>${item.date}</p><h3>${item.title}</h3><a class="text-link" href="pages/news.html">Read More <span aria-hidden="true">→</span></a></div></article>`).join('');
}

function renderLeadership() {
  const target = document.querySelector('[data-leadership]');
  if (!target) return;
  target.innerHTML = leadershipData.map((item) => `<article class="leadership-card">${placeholder('Portrait')}<div class="card-body"><h3>${item.name}</h3><p>${item.role}</p></div></article>`).join('');
}

function setupNavigation() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
  document.querySelectorAll('[data-dropdown] > button').forEach((button) => {
    button.addEventListener('click', () => {
      const parent = button.parentElement;
      const isOpen = parent.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
    });
  });
}

renderProperties();
renderProjects();
renderNews();
renderLeadership();
setupNavigation();
