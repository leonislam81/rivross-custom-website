const PAGE_DATA = {
  about: {
    title: "About",
    highlight: "RIVROSS",
    eyebrow: "Who We Are",
    intro: "Driven by vision. Guided by values. Committed to building a better tomorrow.",
    render: renderAbout
  },
  companies: {
    title: "Our",
    highlight: "Companies",
    eyebrow: "Diversified Businesses",
    intro: "RIVROSS Company Limited operates through diverse business verticals, each committed to excellence and driven by our core values.",
    render: renderCompanies
  },
  "real-estate": {
    title: "Real Estate",
    highlight: "Building Tomorrow, Today",
    eyebrow: "RIVROSS Real Estate",
    intro: "Premium living and working spaces that combine quality, innovation and long-term value.",
    render: renderRealEstate
  },
  properties: {
    title: "Properties",
    highlight: "Find Your Perfect Property",
    eyebrow: "Real Estate Portfolio",
    intro: "Explore residential, commercial and land properties in prime locations.",
    render: renderProperties
  },
  projects: {
    title: "Our Projects",
    highlight: "Building Better Tomorrows",
    eyebrow: "Development Portfolio",
    intro: "Discover developments that redefine modern living and create lasting value.",
    render: renderProjects
  },
  travel: {
    title: "Travel Beyond Limits",
    highlight: "Experience the World",
    eyebrow: "RIVROSS Travel & Tourism",
    intro: "Complete travel solutions, from air tickets to unforgettable journeys, tailored to your needs.",
    render: renderTravel
  },
  tea: {
    title: "Finest Tea,",
    highlight: "Sourced with Care",
    eyebrow: "RIVROSS Tea Business",
    intro: "Premium quality tea from the lush gardens of Bangladesh to homes and businesses around the world.",
    render: renderTea
  },
  services: {
    title: "Professional",
    highlight: "Business Services",
    eyebrow: "Our Capabilities",
    intro: "Practical solutions and trusted support across the RIVROSS business ecosystem.",
    render: renderServices
  },
  leadership: {
    title: "Our Leadership,",
    highlight: "Your Trust",
    eyebrow: "Our Management Team",
    intro: "A team of visionary leaders and industry experts working together to build a better future.",
    render: renderLeadership
  },
  news: {
    title: "News & Insights",
    highlight: "Stay Informed, Stay Ahead",
    eyebrow: "News & Media",
    intro: "The latest updates, market trends, company announcements and real estate insights.",
    render: renderNews
  },
  events: {
    title: "Events That Inspire,",
    highlight: "Connections That Last",
    eyebrow: "News & Media / Events",
    intro: "Meet industry leaders, exchange ideas and build partnerships through our events.",
    render: renderEvents
  },
  careers: {
    title: "Build Your Career.",
    highlight: "Build a Better Tomorrow.",
    eyebrow: "Careers at RIVROSS",
    intro: "Grow, innovate and make a lasting impact with a team that values people and progress.",
    render: renderCareers
  },
  contact: {
    title: "Get In Touch",
    highlight: "With RIVROSS",
    eyebrow: "Contact Us",
    intro: "We are here to answer your questions, listen to your ideas and help you find the right solution.",
    render: renderContact
  },
  "business-inquiry": {
    title: "Let's Build",
    highlight: "Something Great Together",
    eyebrow: "Business Inquiry",
    intro: "Tell us what you are planning and our team will get back to you with the right next step.",
    render: renderInquiry
  },
  terms: {
    title: "Terms &",
    highlight: "Conditions",
    eyebrow: "Legal",
    intro: "The terms that govern your use of the RIVROSS website.",
    render: () => renderLegal("terms")
  },
  privacy: {
    title: "Privacy",
    highlight: "Policy",
    eyebrow: "Legal",
    intro: "How RIVROSS handles information submitted through this website.",
    render: () => renderLegal("privacy")
  },
  search: {
    title: "Search",
    highlight: "RIVROSS",
    eyebrow: "Site Search",
    intro: "Find a page, business, property or update.",
    render: renderSearch
  },
  404: {
    title: "Page",
    highlight: "Not Found",
    eyebrow: "404 Error",
    intro: "The page you are looking for may have moved or no longer exists.",
    render: render404
  },
  "property-details": {
    title: "RIVROSS Lake View",
    highlight: "Residence",
    eyebrow: "Property Details",
    intro: "A modern residential development offering comfort, convenience and a peaceful environment beside the lake.",
    render: renderPropertyDetails
  },
  "news-details": {
    title: "News &",
    highlight: "Insights",
    eyebrow: "Article",
    intro: "A closer look at the updates shaping RIVROSS and the markets we serve.",
    render: renderNewsDetails
  },
  "event-details": {
    title: "RIVROSS Annual",
    highlight: "Leadership Summit",
    eyebrow: "Event Details",
    intro: "Connect with decision-makers, industry experts and future-focused leaders.",
    render: renderEventDetails
  },
  "job-details": {
    title: "Join the",
    highlight: "RIVROSS Team",
    eyebrow: "Career Opportunity",
    intro: "Bring your skills, perspective and ambition to a team building a better tomorrow.",
    render: renderJobDetails
  }
};

const businesses = [
  { icon: "▥", title: "Real Estate", text: "Residential, commercial and mixed-use developments built for lasting value.", link: "real-estate.html", tone: "business-real-estate" },
  { icon: "✈", title: "Travel & Tourism", text: "Air ticketing, hotel booking, tour packages, Hajj & Umrah and corporate travel.", link: "travel.html", tone: "business-travel" },
  { icon: "♙", title: "Tea Business", text: "Sourcing, wholesale, blending, distribution and corporate supply from Bangladesh.", link: "tea.html", tone: "business-tea" }
];

const properties = [
  ["Apartment", "Rivross Lake View Residence", "Uttara, Dhaka", "BDT 6,500 /sqft"],
  ["Apartment", "Rivross Green Heights", "Bashundhara, Dhaka", "BDT 7,200 /sqft"],
  ["Commercial", "Rivross Corporate Tower", "Gulshan, Dhaka", "BDT 18,000 /sqft"],
  ["Land / Plot", "Rivross Premium Plots", "Purbachal, Dhaka", "BDT 4,500 /sqft"],
  ["Apartment", "Rivross Heights", "Bashundhara, Dhaka", "BDT 8,400 /sqft"],
  ["Commercial", "Rivross City Center", "Mirpur, Dhaka", "BDT 12,500 /sqft"]
];

const projects = [
  ["Ongoing", "Rivross Heights", "Bashundhara, Dhaka", "Completion: Dec 2026"],
  ["Upcoming", "Rivross City View", "Mirpur, Dhaka", "Launch: Q4 2026"],
  ["Completed", "Rivross Garden", "Uttara, Dhaka", "Completed: 2024"],
  ["Ongoing", "Rivross City Center", "Motijheel, Dhaka", "88% completed"],
  ["Upcoming", "Rivross Business Hub", "Banani, Dhaka", "Launch: Q1 2027"],
  ["Completed", "Rivross Lake Side", "Uttara, Dhaka", "Completed: 2021"]
];

const team = [
  ["Nasrullah Hossain Nahid", "Chief Operating Officer"],
  ["Md. Fatin Ishtiyaq Fahim", "Chief Financial Officer"],
  ["MD Obayed Ullah Sarker", "Director, Operations"],
  ["MD Ataullah", "Director, Real Estate"],
  ["Mohammad Reza", "Chairman"],
  ["Arif Hasan", "Managing Director"],
  ["Nusrat Jahan", "Director – Finance"],
  ["Tanvir Ahmed", "Director – Development"]
];

const articles = [
  ["Project Updates", "Rivross Lake View Residence Construction Update", "May 02, 2026", "Exciting progress is taking shape with on-schedule milestones."],
  ["Market Insights", "Real Estate Market Outlook 2026: Trends to Watch", "Apr 25, 2026", "Experts predict steady growth and new opportunities in the market."],
  ["Company News", "RIVROSS Hosts Annual Leadership Summit 2026", "Apr 18, 2026", "Our leadership team gathered to discuss innovation and sustainable growth."],
  ["Sustainability", "Building a Greener Tomorrow: Our Commitment", "Apr 10, 2026", "Eco-friendly practices are integrated into every project we undertake."],
  ["Lifestyle", "Top Features Homebuyers Look for in 2026", "Apr 03, 2026", "Smart home technology and wellness amenities are changing expectations."],
  ["Company News", "RIVROSS Partners with Global Investment Group", "Mar 28, 2026", "A strategic partnership bringing new opportunities and world-class projects."]
];

const services = [
  ["✈", "Air Ticketing", "Domestic and international flight tickets with best prices and offers."],
  ["▥", "Hotel Booking", "Comfortable stays worldwide at exclusive rates."],
  ["⌘", "Tour Packages", "Handpicked leisure, adventure and group tour packages."],
  ["⌂", "Hajj & Umrah", "Complete Hajj and Umrah services with care and guidance."],
  ["▣", "Corporate Travel", "Business travel solutions designed around your needs."],
  ["♙", "Tea Sourcing", "Premium tea sourcing and supply for businesses."],
  ["◎", "Property Inquiry", "Guidance for residential, commercial and land opportunities."],
  ["✦", "Business Advisory", "Practical support for partnerships and future ventures."]
];

function path(file) { return `../${file}`; }
function imagePlaceholder(label, extra = "") { return `<div class="image-placeholder ${extra}"><span>${label}</span></div>`; }
function button(label, href = "contact.html", primary = false) { return `<a class="button ${primary ? "button-primary" : "button-outline"}" href="${href}">${label} <span aria-hidden="true">→</span></a>`; }
function sectionHeading(eyebrow, title, copy = "") { return `<div class="section-heading"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2>${copy ? `<p>${copy}</p>` : ""}</div>`; }
function businessCards() { return `<div class="business-grid">${businesses.map(item => `<a class="business-card ${item.tone}" href="${item.link}"><span class="card-icon" aria-hidden="true">${item.icon}</span><h3>${item.title}</h3><p>${item.text}</p><span class="card-link">Explore ${item.title} <b aria-hidden="true">→</b></span></a>`).join("")}</div>`; }
function propertyCards(items = properties) { return `<div class="catalog-grid">${items.map((item, index) => `<article class="catalog-card"><a href="property-details.html">${imagePlaceholder(index % 2 ? "Property View" : "City Residence")}</a><div class="card-body"><span class="tag">${item[0]}</span><h3>${item[1]}</h3><div class="card-meta"><span>⌖ ${item[2]}</span><span>3 Bed</span><span>1450 sq.ft</span></div><strong class="price">${item[3]}</strong>${button("View Details", "property-details.html")}</div></article>`).join("")}</div>`; }
function projectCards(items = projects) { return `<div class="catalog-grid">${items.map(item => `<article class="catalog-card">${imagePlaceholder(item[0])}<div class="card-body"><span class="tag">${item[0]}</span><h3>${item[1]}</h3><p>⌖ ${item[2]}</p><div class="card-meta"><span>${item[3]}</span><span>RIVROSS Developments</span></div>${button("View Project", "projects.html")}</div></article>`).join("")}</div>`; }
function teamCards(items = team) { return `<div class="team-grid">${items.map(person => `<article class="team-card">${imagePlaceholder("Portrait") }<div class="card-body"><h3>${person[0]}</h3><span class="role">${person[1]}</span><p>Experienced professional focused on quality, integrity and long-term growth.</p><a class="text-link" href="leadership.html">View Profile <span aria-hidden="true">→</span></a></div></article>`).join("")}</div>`; }
function articleCards(items = articles) { return `<div class="article-grid">${items.map(item => `<article class="article-card">${imagePlaceholder(item[0])}<div class="card-body"><span class="tag">${item[0]}</span><span class="date">${item[2]} · 5 min read</span><h3>${item[1]}</h3><p>${item[3]}</p><a class="text-link" href="news-details.html">Read More <span aria-hidden="true">→</span></a></div></article>`).join("")}</div>`; }
function serviceCards(items = services) { return `<div class="directory-grid service-directory">${items.map(item => `<article class="directory-card"><span aria-hidden="true">${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p>${button("Learn More", "contact.html")}</article>`).join("")}</div>`; }

function renderAbout() {
  return `<section class="page-section"><div class="site-container page-two-col"><div>${sectionHeading("Our Story", "Building Businesses. Creating Opportunities.", "RIVROSS was founded with a simple but powerful vision: to redefine real estate through integrity, innovation and quality. What started as a small team with big dreams has grown into a diversified organization with a strong presence in multiple sectors.")}${button("Download Corporate Profile", "business-inquiry.html", true)}</div>${imagePlaceholder("Our Story Visual", "visual-panel")}</div></section><section class="page-section soft"><div class="site-container">${sectionHeading("Our Core Values", "The Values That Define Us", "The principles that guide our decisions and relationships.")}<div class="value-grid">${["Integrity", "Excellence", "Innovation", "Teamwork", "Responsibility", "Respect"].map((x, i) => `<article class="value-card"><span aria-hidden="true">${["⬡", "✦", "⌁", "♧", "◉", "♢"][i]}</span><h3>${x}</h3><p>We uphold the highest standards and turn our values into meaningful action.</p></article>`).join("")}</div></div></section><section class="page-section"><div class="site-container">${sectionHeading("Our Journey", "Milestones of Growth")}<div class="timeline">${[["2010", "Foundation"], ["2012", "First Partnerships"], ["2015", "Business Expansion"], ["2018", "Tea Business"], ["2021", "Regional Growth"], ["2024+", "Looking Ahead"]].map((x, i) => `<div class="timeline-item"><span>${i + 1}</span><strong>${x[0]}</strong><h3>${x[1]}</h3><p>Continuing the journey with purpose, trust and excellence.</p></div>`).join("")}</div></div></section><section class="page-section dark"><div class="site-container">${sectionHeading("Leadership That Inspires", "Guided by Experience. Driven by Purpose.")} ${teamCards(team.slice(0, 4))}</div></section>`;
}

function renderCompanies() {
  return `<section class="page-section"><div class="site-container">${sectionHeading("Diversified Businesses", "One Vision. Multiple Businesses.", "Our diverse business portfolio allows us to create value across industries and deliver sustainable growth for our clients, partners and communities.")}${businessCards()}</div></section><section class="page-section dark"><div class="site-container"><div class="stat-grid">${[["3+", "Business Verticals"], ["100+", "Projects Completed"], ["50+", "Expert Professionals"], ["500+", "Happy Clients"]].map(x => `<div class="stat-card"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join("")}</div></div></section><section class="page-section"><div class="site-container page-two-col"><div>${sectionHeading("Our Commitment", "Looking for Business Opportunities?", "Partner with us and be a part of our growth journey. We are open to meaningful partnerships and professional collaboration.")}${button("Send an Inquiry", "business-inquiry.html", true)}</div>${imagePlaceholder("Partnership Visual", "visual-panel")}</div></section>`;
}

function renderRealEstate() {
  return `<section class="page-section"><div class="site-container page-two-col"><div>${sectionHeading("Overview", "Creating Value. Building Trust.", "We develop residential, commercial and mixed-use properties that enhance communities and create sustainable value for our customers and investors.")}${button("Download Brochure", "business-inquiry.html", true)}</div>${imagePlaceholder("Premium Development", "visual-panel")}</div></section><section class="page-section soft"><div class="site-container"><div class="catalog-toolbar"><label>Location<select><option>All Locations</option><option>Dhaka</option></select></label><label>Property Type<select><option>All Types</option><option>Apartment</option><option>Commercial</option></select></label><label>Status<select><option>All Status</option><option>Ongoing</option><option>Completed</option></select></label>${button("Search Properties", "properties.html", true)}</div>${sectionHeading("Featured Properties", "Find Your Perfect Property")}${propertyCards(properties.slice(0, 4))}</div></section><section class="page-section dark"><div class="site-container">${sectionHeading("Why Choose RIVROSS Real Estate?", "Built for Confidence")}<div class="value-grid">${["Quality Construction", "Prime Locations", "Modern Design", "End-to-End Service", "After Sales Support"].map(x => `<article class="value-card stat-card"><span>✦</span><h3>${x}</h3><p>Built around trust, clarity and long-term value.</p></article>`).join("")}</div></div></section>`;
}

function renderProperties() {
  return `<section class="page-section"><div class="site-container">${sectionHeading("Property Listing", "A Place for Every Ambition", "Browse our curated residential, commercial and land opportunities.")}<div class="catalog-toolbar"><label>Location<select><option>All Locations</option><option>Uttara</option><option>Bashundhara</option><option>Gulshan</option></select></label><label>Property Type<select><option>All Types</option><option>Apartment</option><option>Commercial</option><option>Land / Plot</option></select></label><label>Price Range<select><option>All Price Range</option><option>Under BDT 10,000</option></select></label>${button("Search Properties", "properties.html", true)}</div>${propertyCards()}</div></section><section class="page-section soft"><div class="site-container">${sectionHeading("Why Invest With RIVROSS?", "Confidence at Every Step")}${serviceCards(services.slice(5, 8))}</div></section>`;
}

function renderProjects() {
  return `<section class="page-section"><div class="site-container">${sectionHeading("Ongoing Projects", "Creating Better Places to Live")}${projectCards(projects.slice(0, 3))}</div></section><section class="page-section soft"><div class="site-container">${sectionHeading("Upcoming Projects", "The Next Chapter of Growth")}${projectCards(projects.slice(1, 5))}</div></section><section class="page-section"><div class="site-container">${sectionHeading("Completed Projects", "A Track Record You Can Trust")}${projectCards(projects.slice(2))}</div></section>`;
}

function renderTravel() {
  return `<section class="page-section dark"><div class="site-container">${sectionHeading("Why Choose RIVROSS?", "Your Journey, Our Commitment", "Transparent pricing, experienced support, reliable partners and safe, comfortable travel.")}${serviceCards(services.slice(0, 5))}</div></section><section class="page-section"><div class="site-container">${sectionHeading("Our Services", "Complete Travel Solutions")}${serviceCards(services.slice(0, 5))}</div></section><section class="page-section soft"><div class="site-container form-layout"><div>${sectionHeading("Plan Your Journey", "Let's Make It Happen", "Share your travel plans and our team will get back to you with the best options.")}${button("Send an Inquiry", "business-inquiry.html", true)}</div>${imagePlaceholder("Travel Visual", "visual-panel")}</div></section>`;
}

function renderTea() {
  return `<section class="page-section dark"><div class="site-container">${sectionHeading("Our Promise", "Quality Tea for Every Need", "Carefully sourced, responsibly handled and supplied with consistency.")}${serviceCards([["♧", "Premium Quality", "Carefully selected finest tea leaves."], ["◉", "Sustainable Sourcing", "Ethical practices for a better tomorrow."], ["▣", "Wholesale Supply", "Bulk supply with consistent quality."], ["⌂", "Distribution", "Reliable logistics you can trust."], ["♢", "Corporate Supply", "Tailored tea solutions for business."]])}</div></section><section class="page-section"><div class="site-container page-two-col reverse">${imagePlaceholder("Tea Garden Visual", "visual-panel tall")}<div>${sectionHeading("Why Choose RIVROSS Tea?", "A Commitment to Excellence") }<ul class="check-list"><li>100% authentic Bangladeshi tea</li><li>Consistent quality, taste and aroma</li><li>Competitive wholesale prices</li><li>Flexible supply for all business sizes</li><li>Reliable long-term partnership</li></ul>${button("Business Inquiry", "business-inquiry.html", true)}</div></div></section>`;
}

function renderServices() {
  return `<section class="page-section"><div class="site-container">${sectionHeading("Our Capabilities", "Professional Support Across Our Businesses", "From travel and property to business partnerships, our services are built around reliability and clear communication.")}${serviceCards()}</div></section><section class="page-section dark"><div class="site-container page-two-col"><div>${sectionHeading("Work With Us", "Built Around Your Goals", "Tell us what you need and we will connect you to the right RIVROSS team.")}${button("Start a Conversation", "business-inquiry.html", true)}</div>${imagePlaceholder("Service Visual", "visual-panel")}</div></section>`;
}

function renderLeadership() {
  return `<section class="page-section"><div class="site-container">${sectionHeading("Our Management Team", "Experience. Vision. Leadership.", "Our management team brings together experience in real estate, development, finance and operations to drive sustainable growth.")}${teamCards()}</div></section><section class="page-section dark"><div class="site-container"><div class="stat-grid">${[["100+", "Team Members"], ["25+", "Years of Combined Experience"], ["50+", "Successful Projects"], ["20+", "Industry Awards"]].map(x => `<div class="stat-card"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join("")}</div></div></section>`;
}

function renderNews() {
  return `<section class="page-section"><div class="site-container"><div class="catalog-toolbar"><label>Category<select><option>All News</option><option>Company News</option><option>Market Insights</option><option>Project Updates</option></select></label><label>Search<input type="search" placeholder="Search articles..."></label>${button("Search", "news.html", true)}</div>${sectionHeading("Latest Updates", "Stories From RIVROSS", "Stay informed on our work, our markets and the opportunities ahead.")}${articleCards()}</div></section><section class="page-section dark"><div class="site-container page-two-col"><div>${sectionHeading("Stay Updated", "Get the Latest From RIVROSS", "Subscribe for news, insights and announcements.")}</div><form class="form-panel" data-demo-form><div class="form-field"><label for="news-email">Email Address</label><input id="news-email" type="email" placeholder="Enter your email address" required></div>${button("Subscribe", "news.html", true)}</form></div></section>`;
}

function renderEvents() {
  const events = [["May 24, 2026", "RIVROSS Annual Leadership Summit 2026", "Dubai, UAE"], ["Jun 18, 2026", "Real Estate Investment Forum 2026", "Singapore"], ["Aug 12, 2026", "RIVROSS Property Expo 2026", "Dhaka, Bangladesh"], ["Sep 26, 2026", "Sustainability in Real Estate Webinar", "Online"]];
  return `<section class="page-section"><div class="site-container">${sectionHeading("Upcoming Events", "Connections That Last") }<div class="event-grid">${events.map(e => `<article class="event-card"><div class="event-top"><span class="tag">${e[0]}</span><span class="meta">${e[2]}</span></div><h3>${e[1]}</h3><p>A focused event bringing together leaders, investors and ideas for the future of business.</p><div>${button("View Details", "event-details.html")} ${button("Register Now", "business-inquiry.html", true)}</div></article>`).join("")}</div></div></section><section class="page-section soft"><div class="site-container">${sectionHeading("Why Attend Our Events?", "Learn, Connect, Grow")}${serviceCards([["♧", "Expand Your Network", "Meet industry leaders and decision-makers."], ["⌁", "Stay Informed", "Keep up with the latest market insights."], ["✦", "Get Inspired", "Hear new perspectives from experts."], ["♢", "Build Partnerships", "Create meaningful relationships."], ["◎", "Drive Growth", "Unlock opportunities for your business."]])}</div></section>`;
}

function renderCareers() {
  const jobs = [["Senior Project Manager", "Full Time", "Dhaka, Bangladesh"], ["Investment Analyst", "Full Time", "Dhaka, Bangladesh"], ["Marketing Executive", "Full Time", "Dhaka, Bangladesh"], ["Civil Engineer", "Full Time", "Dhaka, Bangladesh"], ["HR Business Partner", "Full Time", "Dhaka, Bangladesh"], ["Business Development Manager", "Full Time", "Dhaka, Bangladesh"]];
  return `<section class="page-section"><div class="site-container page-two-col">${imagePlaceholder("RIVROSS Team Visual", "visual-panel")}<div>${sectionHeading("About Careers at RIVROSS", "Where Ambition Meets Opportunity", "We are more than a real estate company; we are a team of visionaries, problem-solvers and change-makers.")}${button("Learn More About Us", "about.html")}</div></div></section><section class="page-section dark"><div class="site-container">${sectionHeading("Why Join RIVROSS?", "A Better Place to Grow")}${serviceCards([["♧", "Career Growth", "Access learning, mentorship and advancement."], ["◉", "Competitive Rewards", "Performance recognized with meaningful rewards."], ["♢", "Work-Life Balance", "Flexible policies that respect your time."], ["⬡", "Health & Wellness", "Comprehensive support for your wellbeing."], ["◎", "Great Culture", "Collaborative, inclusive and supportive work."]])}</div></section><section class="page-section"><div class="site-container">${sectionHeading("Open Positions", "Find Your Next Opportunity")}<div class="job-grid">${jobs.map(job => `<article class="job-card"><div class="job-top"><h3>${job[0]}</h3><span class="tag">${job[1]}</span></div><span class="meta">⌖ ${job[2]} · 3–5 Years Experience</span><p>Join a focused team and help deliver high-quality work with lasting impact.</p>${button("View Details", "job-details.html")}</article>`).join("")}</div></div></section>`;
}

function renderContact() {
  return `<section class="page-section"><div class="site-container form-layout"><form class="form-panel" data-demo-form>${sectionHeading("Send Us a Message", "Let's Start a Conversation")}<div class="form-grid"><div class="form-field"><label for="contact-name">Your Name</label><input id="contact-name" required></div><div class="form-field"><label for="contact-email">Your Email</label><input id="contact-email" type="email" required></div><div class="form-field"><label for="contact-phone">Phone Number</label><input id="contact-phone"></div><div class="form-field"><label for="contact-subject">Subject</label><input id="contact-subject"></div><div class="form-field full"><label for="contact-message">Message</label><textarea id="contact-message" required></textarea></div></div>${button("Send Message", "contact.html", true)}</form><aside class="info-panel">${sectionHeading("Our Office", "Visit RIVROSS", "Our team is ready to listen and help.")}<div class="contact-list"><div><span>⌖</span><div><strong>Address</strong><p>3/3 Matirari, Jamebagh, Jurabagh, Dhaka-1204, Bangladesh</p></div></div><div><span>✉</span><div><strong>Email</strong><p>rivrossgroup@gmail.com</p></div></div><div><span>☎</span><div><strong>Phone</strong><p>01796-565279</p></div></div><div><span>◷</span><div><strong>Office Hours</strong><p>Saturday – Thursday<br>10:00 AM – 07:00 PM</p></div></div></div>${imagePlaceholder("Office Location", "visual-panel")}</aside></div></section><section class="page-section soft"><div class="site-container"><div class="page-two-col"><div>${sectionHeading("FAQ", "Frequently Asked Questions", "Find quick answers to common questions about our services and processes.")}</div><div class="faq-list"><details open><summary>What businesses does RIVROSS operate?</summary><p>Our main verticals are real estate, travel and tourism, and tea business.</p></details><details><summary>How can I request a property consultation?</summary><p>Use the inquiry form or contact our team directly by phone or email.</p></details><details><summary>Can we discuss a partnership?</summary><p>Yes. Send a business inquiry and our partnership team will respond.</p></details></div></div></div></section>`;
}

function renderInquiry() {
  return `<section class="page-section"><div class="site-container form-layout"><form class="form-panel" data-demo-form>${sectionHeading("Business Inquiry", "Tell Us About Your Requirement", "We will review your request and connect you to the right team.")}<div class="form-grid"><div class="form-field"><label for="inq-name">Full Name</label><input id="inq-name" required></div><div class="form-field"><label for="inq-email">Email Address</label><input id="inq-email" type="email" required></div><div class="form-field"><label for="inq-company">Company Name</label><input id="inq-company"></div><div class="form-field"><label for="inq-type">Requirement Type</label><select id="inq-type"><option>Real Estate</option><option>Travel & Tourism</option><option>Tea Business</option><option>Partnership</option><option>Other</option></select></div><div class="form-field full"><label for="inq-message">Tell us about your requirement</label><textarea id="inq-message" required></textarea></div></div>${button("Submit Inquiry", "business-inquiry.html", true)}</form>${imagePlaceholder("Business Opportunity Visual", "visual-panel tall")}</div></section>`;
}

function renderLegal(type) {
  const privacy = type === "privacy";
  return `<section class="page-section"><div class="site-container prose"><div class="notice"><p>This starter legal page is a clear content structure for the custom site. Replace it with approved legal copy before launch.</p></div><h2>${privacy ? "Information We Collect" : "Using This Website"}</h2><p>${privacy ? "We may receive information you voluntarily submit through inquiry forms, email or telephone contact. We use it only to respond to your request and improve our services." : "The RIVROSS website is provided for general information about our businesses, projects and services. Content may change without notice."}</p><h2>${privacy ? "How We Use Information" : "Intellectual Property"}</h2><p>${privacy ? "We use submitted details to communicate with you, provide requested information and maintain basic business records." : "Brand names, copy, graphics and other materials on this website belong to RIVROSS Company Limited or their respective owners and may not be reused without permission."}</p><h2>Contact</h2><p>For questions about this page, contact rivrossgroup@gmail.com or call 01796-565279.</p></div></section>`;
}

function renderSearch() { return `<section class="page-section"><div class="site-container">${sectionHeading("Search RIVROSS", "Find What You Need")}<form class="catalog-toolbar" data-demo-form><label>Search<input type="search" placeholder="Search the site..." required></label>${button("Search", "search.html", true)}</form><div class="article-grid">${articles.slice(0, 3).map(item => `<article class="article-card"><div class="card-body"><span class="tag">${item[0]}</span><h3>${item[1]}</h3><p>${item[3]}</p>${button("Open Result", "news-details.html")}</div></article>`).join("")}</div></div></section>`; }
function render404() { return `<section class="page-section"><div class="site-container not-found"><div><strong>404</strong>${sectionHeading("Nothing Here", "Let's Get You Back on Track", "The page may have moved. Start again from the RIVROSS homepage or explore our companies.")}${button("Back to Home", path("index.html"), true)}</div></div></section>`; }
function renderPropertyDetails() { return `<section class="page-section"><div class="site-container page-two-col"><div>${sectionHeading("Apartment · Ongoing", "RIVROSS Lake View Residence", "Uttara, Dhaka") }<div class="card-meta"><span>3 Bed</span><span>3 Bath</span><span>1450 sq.ft</span><span>1 Parking</span></div><strong class="price">BDT 6,500 /sqft</strong><div class="hero-actions">${button("Request Info", "business-inquiry.html", true)}${button("Download Brochure", "business-inquiry.html")}</div></div>${imagePlaceholder("Property Hero", "visual-panel tall")}</div></section><section class="page-section soft"><div class="site-container page-two-col"><div>${sectionHeading("Overview", "Designed for Modern Living", "A premium residential project with contemporary architecture, quality construction and a serene environment beside the lake.")}<ul class="check-list"><li>Modern architectural design</li><li>Rooftop community area</li><li>High-speed elevators</li><li>24/7 security with CCTV</li></ul></div><div class="info-panel"><h3>Property Details</h3><div class="contact-list"><p>Property ID: RV-LVR-001</p><p>Location: Uttara, Dhaka</p><p>Property Type: Apartment</p><p>Total Units: 120</p><p>Floors: G+12</p></div></div></div></section><section class="page-section"><div class="site-container">${sectionHeading("You May Also Like", "Explore More Properties")}${propertyCards(properties.slice(1, 5))}</div></section>`; }
function renderNewsDetails() { return `<article class="page-section"><div class="site-container prose">${sectionHeading("Company News", "RIVROSS Hosts Annual Leadership Summit 2026", "Published April 18, 2026 · 5 min read")} ${imagePlaceholder("Article Cover", "visual-panel tall")}<p>Our leadership team gathered to discuss innovation, strategy and our vision for sustainable growth. The summit brought together business leaders and partners for a day of thoughtful discussion and practical ideas.</p><h2>Building the Next Chapter</h2><p>RIVROSS continues to invest in trusted partnerships, disciplined execution and a customer-focused approach across every business vertical.</p>${button("Back to News", "news.html", true)}</div></article>`; }
function renderEventDetails() { return `<section class="page-section"><div class="site-container page-two-col"><div>${sectionHeading("May 24–25, 2026 · Dubai, UAE", "RIVROSS Annual Leadership Summit 2026", "A two-day summit bringing together industry leaders to discuss innovation, sustainability and the future of real estate.")}${button("Register Now", "business-inquiry.html", true)}</div>${imagePlaceholder("Event Visual", "visual-panel")}</div></section><section class="page-section soft"><div class="site-container">${sectionHeading("What To Expect", "Learn, Connect and Grow")}${serviceCards([["♧", "Industry Experts", "Learn from leading professionals and thought leaders."], ["♢", "Networking", "Connect with potential partners and investors."], ["⌁", "Exclusive Insights", "Gain access to market trends and research."], ["✦", "Innovative Solutions", "Discover the latest technologies and practices."]])}</div></section>`; }
function renderJobDetails() { return `<section class="page-section"><div class="site-container page-two-col"><div>${sectionHeading("Full Time · Dhaka, Bangladesh", "Senior Project Manager", "Lead and deliver large-scale real estate projects from concept to completion.")}${button("Apply Now", "business-inquiry.html", true)}</div>${imagePlaceholder("Career Visual", "visual-panel")}</div></section><section class="page-section soft"><div class="site-container page-two-col"><div><h2>What You Will Do</h2><ul class="check-list"><li>Coordinate project delivery and stakeholders.</li><li>Manage timelines, quality and reporting.</li><li>Support commercial and operational decisions.</li></ul></div><div><h2>What We Look For</h2><p>Strong communication, leadership and project delivery experience with a collaborative mindset.</p></div></div></section>`; }

function renderHeader(activePage) {
  const active = page => activePage === page ? "is-active" : "";
  return `<header class="site-header" data-header><div class="site-container header-inner"><a class="brand" href="${path("index.html")}" aria-label="RIVROSS Company Limited home"><span class="brand-mark" aria-hidden="true">♛</span><span class="brand-copy"><strong>RIVROSS</strong><small>COMPANY LIMITED</small></span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" data-menu-toggle><span></span><span></span><span></span><span class="sr-only">Open menu</span></button><nav class="site-nav" id="site-navigation" aria-label="Primary navigation" data-menu><a class="${active("home")}" href="${path("index.html")}">Home</a><a class="${active("about")}" href="about.html">About Us</a><div class="nav-dropdown" data-dropdown><button type="button" aria-expanded="false">Our Companies <span aria-hidden="true">⌄</span></button><div class="dropdown-menu"><a href="companies.html">Overview</a><a href="real-estate.html">Real Estate</a><a href="travel.html">Travel &amp; Tourism</a><a href="tea.html">Tea Business</a></div></div><a class="${active("real-estate")}" href="real-estate.html">Real Estate</a><a class="${active("services")}" href="services.html">Services</a><a class="${active("projects")}" href="projects.html">Projects</a><a class="${active("leadership")}" href="leadership.html">Management</a><a class="${active("news")}" href="news.html">News &amp; Media</a><a class="${active("contact")}" href="contact.html">Contact Us</a></nav><a class="button button-primary header-cta" href="business-inquiry.html">Inquiry <span aria-hidden="true">→</span></a></div></header>`;
}

function renderFooter() {
  return `<footer class="site-footer"><div class="site-container footer-grid"><div class="footer-brand"><a class="brand" href="${path("index.html")}"><span class="brand-mark" aria-hidden="true">♛</span><span class="brand-copy"><strong>RIVROSS</strong><small>COMPANY LIMITED</small></span></a><p>A diversified business organization committed to delivering value through multiple sectors and creating opportunities for everyone.</p><div class="social-links"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="YouTube">▶</a><a href="#" aria-label="Instagram">◎</a></div></div><div class="footer-column"><h2>Quick Links</h2><a href="${path("index.html")}">Home</a><a href="about.html">About Us</a><a href="companies.html">Our Companies</a><a href="services.html">Services</a><a href="projects.html">Projects</a><a href="leadership.html">Management</a><a href="news.html">News &amp; Media</a><a href="contact.html">Contact Us</a></div><div class="footer-column"><h2>Our Businesses</h2><a href="real-estate.html">Real Estate</a><a href="travel.html">Travel &amp; Tourism</a><a href="tea.html">Tea Business</a><a href="business-inquiry.html">Future Ventures</a></div><div class="footer-column footer-contact"><h2>Contact Information</h2><p><span>⌖</span>3/3 Matirari, Jamebagh,<br>Jurabagh, Dhaka-1204,<br>Bangladesh</p><a href="mailto:rivrossgroup@gmail.com"><span>✉</span>rivrossgroup@gmail.com</a><a href="tel:01796565279"><span>☎</span>01796-565279</a><p><span>◷</span>Saturday – Thursday<br>10:00 AM – 07:00 PM</p></div><div class="footer-column"><h2>Legal</h2><a href="terms.html">Terms &amp; Conditions</a><a href="privacy.html">Privacy Policy</a></div></div><div class="site-container footer-bottom"><span>© 2026 RIVROSS Company Limited. All Rights Reserved.</span><span>Designed with Excellence for a Better Tomorrow</span></div></footer>`;
}

function setupPage() {
  const key = document.body.dataset.page || "404";
  const data = PAGE_DATA[key] || PAGE_DATA["404"];
  const activePage = key === "companies" ? "companies" : key;
  document.title = `RIVROSS | ${data.title.replace(/,$/, "")} ${data.highlight}`;
  document.querySelector("[data-shell-header]").innerHTML = renderHeader(activePage);
  document.querySelector("[data-shell-footer]").innerHTML = renderFooter();
  document.querySelector("[data-inner-hero]").innerHTML = `<div class="site-container inner-hero-copy"><div class="breadcrumbs"><a href="${path("index.html")}">Home</a><span>›</span><span>${data.eyebrow}</span></div><h1>${data.title}<span>${data.highlight}</span></h1><div class="gold-rule"></div><p>${data.intro}</p></div>`;
  document.querySelector("[data-page-content]").innerHTML = data.render();
  bindNavigation();
  document.querySelectorAll("[data-demo-form]").forEach(form => form.addEventListener("submit", event => { event.preventDefault(); const note = document.createElement("p"); note.className = "notice"; note.innerHTML = "Thanks — this demo form is ready to connect to your preferred backend or email service."; form.append(note); }));
}

function bindNavigation() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");
  toggle?.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") === "true"; toggle.setAttribute("aria-expanded", String(!open)); menu.classList.toggle("is-open", !open); });
  const dropdown = document.querySelector("[data-dropdown]");
  const dropdownButton = dropdown?.querySelector("button");
  dropdownButton?.addEventListener("click", () => { const open = dropdownButton.getAttribute("aria-expanded") === "true"; dropdownButton.setAttribute("aria-expanded", String(!open)); dropdown.classList.toggle("is-open", !open); });
}

document.addEventListener("DOMContentLoaded", setupPage);
