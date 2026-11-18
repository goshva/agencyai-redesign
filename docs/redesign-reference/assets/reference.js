(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const toast = (message) => {
    const node = $('#toast');
    if (!node) return;
    node.textContent = message;
    node.classList.add('show');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => node.classList.remove('show'), 2200);
  };

  // Prototype-only interactions. These never mutate AgencyAI or remote data.
  const search = $('#case-search');
  if (search) {
    const rows = $$('#cases-table tbody tr[data-search]');
    const status = $('#status-filter');
    const priority = $('#priority-filter');
    const count = $('#visible-count');
    const apply = () => {
      const q = search.value.trim().toLowerCase();
      let visible = 0;
      rows.forEach(row => {
        const matchText = row.dataset.search.toLowerCase().includes(q);
        const matchStatus = !status || status.value === 'all' || row.dataset.status === status.value;
        const matchPriority = !priority || priority.value === 'all' || row.dataset.priority === priority.value;
        const show = matchText && matchStatus && matchPriority;
        row.classList.toggle('hide', !show);
        if (show) visible++;
      });
      if (count) count.textContent = `${visible} обращения`;
    };
    search.addEventListener('input', apply);
    status?.addEventListener('change', apply);
    priority?.addEventListener('change', apply);
    apply();
  }

  $$('[data-toast]').forEach(button => button.addEventListener('click', () => toast(button.dataset.toast)));
  $$('[data-open-detail]').forEach(element => element.addEventListener('click', () => {
    const href = element.dataset.href || 'incident-detail.html';
    window.location.href = href;
  }));

  const drawer = $('#detail-drawer');
  const openDrawer = () => {
    if (!drawer) return;
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    $('#drawer-close')?.focus();
  };
  const closeDrawer = () => {
    if (!drawer) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  };
  $$('[data-drawer-open]').forEach(el => el.addEventListener('click', openDrawer));
  $('#drawer-close')?.addEventListener('click', closeDrawer);
  drawer?.addEventListener('click', e => { if (e.target === drawer) closeDrawer(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  // Read-only conversation player sample.
  const messages = $$('.chat-message');
  let messageIndex = Math.max(0, messages.findIndex(node => node.dataset.current === 'true'));
  const showMessage = () => {
    messages.forEach((node, i) => node.classList.toggle('hide', i > messageIndex));
    const counter = $('#message-counter');
    if (counter) counter.textContent = `Показано ${messageIndex + 1} из ${messages.length}`;
    const prev = $('#message-prev');
    const next = $('#message-next');
    if (prev) prev.disabled = messageIndex <= 0;
    if (next) next.disabled = messageIndex >= messages.length - 1;
  };
  $('#message-prev')?.addEventListener('click', () => { messageIndex = Math.max(0, messageIndex - 1); showMessage(); });
  $('#message-next')?.addEventListener('click', () => { messageIndex = Math.min(messages.length - 1, messageIndex + 1); showMessage(); });
  $('#role-switch')?.addEventListener('click', () => toast('Демонстрация: смена роли доступна в сценарном просмотре'));
  if (messages.length) showMessage();

  // Timeline slider sample.
  const range = $('#time-range');
  const rangeLabel = $('#time-range-label');
  range?.addEventListener('input', () => {
    const n = Number(range.value);
    if (rangeLabel) rangeLabel.textContent = n < 25 ? '08:00' : n < 50 ? '12:00' : n < 75 ? '16:00' : '20:00';
    $$('[data-future="true"]').forEach(node => node.classList.toggle('dimmed', n < Number(node.dataset-at || 0)));
  });

  // No form in this demo is connected to a backend.
  $$('form[data-demo-form]').forEach(form => form.addEventListener('submit', e => { e.preventDefault(); toast('Это визуальный прототип — действие не отправляется'); }));
})();
