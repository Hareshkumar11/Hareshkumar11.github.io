(() => {
  const key = "academic-site-theme";
  const root = document.documentElement;
  try {
    if (localStorage.getItem(key) === "dark") root.dataset.theme = "dark";
  } catch {
    // The toggle still works when browser storage is unavailable.
  }

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="moon" d="M20.5 14a8.8 8.8 0 0 1-10.6-10.6A8.8 8.8 0 1 0 20.5 14Z"/><g class="sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></g></svg>';

    function updateLabel() {
      const label = root.dataset.theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
      button.setAttribute("aria-label", label);
      button.title = label;
    }

    button.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      updateLabel();
      try {
        localStorage.setItem(key, root.dataset.theme);
      } catch {
        // Keep the selection for this page.
      }
    });

    updateLabel();
    document.querySelector(".masthead__inner").append(button);
  });
})();
