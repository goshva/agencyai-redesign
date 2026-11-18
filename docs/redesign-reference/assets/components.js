/* AgencyAI reference components — vanilla Web Components, no runtime dependencies.
   These components are presentation-only. They do not access or mutate the AgencyAI core model. */
(() => {
  const definitions = {
    "ui-sidebar": { display: "block", role: "complementary", label: "Основная навигация" },
    "ui-topbar": { display: "flex", role: "banner" },
    "ui-kpi": { display: "block", role: "group" },
    "ui-panel": { display: "block", role: "region" },
    "ui-badge": { display: "inline-flex", role: "status" },
    "ui-sla": { display: "inline-flex", role: "status" },
    "ui-activity": { display: "flex", role: "listitem" },
    "ui-chat-message": { display: "block", role: "article" },
    "ui-process-node": { display: "block", role: "group" }
  };

  Object.entries(definitions).forEach(([name, config]) => {
    if (customElements.get(name)) return;
    customElements.define(name, class extends HTMLElement {
      connectedCallback() {
        if (!this.style.display) this.style.display = config.display;
        if (config.role && !this.hasAttribute("role")) this.setAttribute("role", config.role);
        if (config.label && !this.hasAttribute("aria-label")) this.setAttribute("aria-label", config.label);
      }
    });
  });

  // Make custom-element tags visually predictable without shadow DOM.
  document.documentElement.classList.add("agency-components-ready");
})();
