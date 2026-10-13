
(() => {
  const $ = id => document.getElementById(id);

  const grid = $("grid");
  const filters = $("filters");
  const search = $("search");
  const modal = $("modal");
  const dialog = modal.querySelector(".dialog");

  let category = "All";
  let focused = null;

  const price = amount =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(Number(amount) || 0);

  // Escape text before inserting it into HTML.
  const esc = value =>
    String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);

  const img = (url, alt) => `
    <img
      src="${esc(url)}"
      alt="${esc(alt)}"
      loading="lazy"
      onerror="this.onerror=null;this.classList.add('broken')"
    >
  `;

  function drawFilters() {
    const categories = [
      "All",
      ...new Set(hampers.map(hamper => hamper.category).filter(Boolean))
    ];

    filters.innerHTML = categories.map(item => `
      <button
        class="chip ${item === category ? "active" : ""}"
        data-category="${esc(item)}"
      >
        ${item === "All" ? "All hampers" : esc(item)}
      </button>
    `).join("");
  }

  function draw() {
    const query = search.value.trim().toLowerCase();

    const shown = hampers.filter(hamper => {
      const matchesCategory =
        category === "All" || hamper.category === category;

      const searchableText =
        `${hamper.name} ${hamper.category} ${hamper.description}`.toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });

    grid.innerHTML = shown.map((hamper, index) => `
      <button
        class="card"
        data-id="${esc(hamper.id)}"
        ${hamper.outOfStock ? "disabled" : ""}
        style="--i:${index}"
        aria-label="${hamper.outOfStock ? "Out of stock: " : "Explore "}${esc(hamper.name)}"
      >
        <span class="card-image">
          ${img(hamper.image, hamper.name)}
          <span class="tag">
            ${esc(hamper.tag || hamper.category || "Thoughtfully curated")}
          </span>
          <span class="arrow">↗</span>
        </span>

        <span class="card-info">
          <span class="cat">${esc(hamper.category || "Hamper")}</span>
          <span class="name">${esc(hamper.name)}</span>

          <span class="card-bottom">
            <b>${price(hamper.price)}</b>
            <span>${hamper.outOfStock ? "Out of stock" : "Explore hamper →"}</span>
          </span>
        </span>
      </button>
    `).join("");

    $("empty").hidden = shown.length > 0;
  }

  function openHamper(id, trigger) {
    const hamper = hampers.find(item => item.id === id);
    if (!hamper || hamper.outOfStock) return;

    focused = trigger || document.activeElement;

    $("detail-image").src = hamper.image || "";
    $("detail-image").alt = hamper.name || "Hamper";

    $("detail-category").textContent =
      hamper.category || "Hamper collection";

    $("detail-name").textContent = hamper.name || "Hamper";
    $("detail-description").textContent = hamper.description || "";
    $("detail-price").textContent = price(hamper.price);

    const items = hamper.items || [];
    $("count").textContent = `${items.length} items`;

    $("items").innerHTML = items.map(item => `
      <article class="item">
        ${img(item.image, item.name)}

        <div class="item-copy">
          <h4>${esc(item.name)}</h4>
          <p>Included in this hamper</p>
        </div>

        <b class="weight">${Number(item.weight) || 0} g</b>
      </article>
    `).join("") || "<p>Item details coming soon.</p>";

    modal.hidden = false;
    dialog.scrollTop = 0;
    document.body.classList.add("locked");
    $("close").focus();
  }

  function closeHamper() {
    modal.hidden = true;
    document.body.classList.remove("locked");

    if (focused) focused.focus();
  }

  filters.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    category = button.dataset.category;
    drawFilters();
    draw();
  });

  search.addEventListener("input", draw);

  grid.addEventListener("click", event => {
    const button = event.target.closest("[data-id]");
    if (button && !button.disabled) openHamper(button.dataset.id, button);
  });

  $("close").addEventListener("click", closeHamper);

  modal.addEventListener("click", event => {
    if (event.target === modal) closeHamper();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) {
      closeHamper();
    }
  });

  $("menu").addEventListener("click", () => {
    $("nav").classList.toggle("open");
  });

  $("nav").querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      $("nav").classList.remove("open");
    });
  });

  $("year").textContent = new Date().getFullYear();

  drawFilters();
  draw();
})();


// hello


function applySiteSettings() {
  const heroImage = document.querySelector(".hero");
  const storyImage = document.querySelector(".story");

  if (heroImage && siteSettings.hero.image) {
    heroImage.style.backgroundImage =
      `linear-gradient(90deg, rgba(40,25,15,.65), rgba(40,25,15,.1)), url("${siteSettings.hero.image}")`;
    heroImage.style.backgroundSize = "cover";
    heroImage.style.backgroundPosition = "center";
  }

  const heroTitle = document.querySelector(".hero h1");
  if (heroTitle) {
    heroTitle.textContent = siteSettings.hero.title;
  }

  const heroSubtitle = document.querySelector(".hero p");
  if (heroSubtitle) {
    heroSubtitle.textContent = siteSettings.hero.subtitle;
  }

  if (storyImage && siteSettings.story.image) {
    storyImage.style.backgroundImage =
      `url("${siteSettings.story.image}")`;
    storyImage.style.backgroundSize = "cover";
    storyImage.style.backgroundPosition = "center";
  }

  const announcement = document.querySelector(".announcement-bar");
  if (announcement) {
    announcement.textContent = siteSettings.announcement.text;
  }
}

document.addEventListener("DOMContentLoaded", applySiteSettings);
