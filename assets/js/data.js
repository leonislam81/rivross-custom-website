(function () {
  const base = document.body?.dataset.page ? "../" : "./";
  const fallback = { businesses: [], properties: [], projects: [], news: [], team: [], events: [], jobs: [], services: [] };
  window.RIVROSS_DATA_PROMISE = fetch(`${base}data/content.json`, { cache: "no-store" })
    .then(response => response.ok ? response.json() : Promise.reject(new Error(`Content data returned ${response.status}`)))
    .catch(error => {
      console.warn("RIVROSS content data could not be loaded; using an empty fallback.", error);
      return fallback;
    });
})();
