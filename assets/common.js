const rootPath = window.location.pathname.includes("/rezume50plus/") ? "/rezume50plus" : "";

const navItems = [
  ["/", "Главная"],
  ["/uslugi/", "Услуги"],
  ["/kak-rabotaet/", "Как это работает"],
  ["/ob-eksperte/", "Об эксперте"],
  ["/otzyvy/", "Отзывы"],
  ["/kontakty/", "Контакты"]
];

function pathTo(url) {
  if (url === "/") return `${rootPath}/`;
  return `${rootPath}${url}`;
}

function currentMatch(url) {
  const path = window.location.pathname.replace(rootPath, "") || "/";
  return path === url || (url !== "/" && path.startsWith(url));
}

function renderHeader() {
  document.write(`
    <a class="skip-link" href="#main">К содержимому</a>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="${pathTo("/")}" aria-label="Резюме 50+">
          <span class="brand-mark">50+</span>
          <span>Резюме 50+</span>
        </a>
        <nav class="nav" aria-label="Основная навигация">
          ${navItems.map(([url, label]) => `<a href="${pathTo(url)}" ${currentMatch(url) ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
        </nav>
        <div class="header-actions">
          <a class="phone-link" href="tel:+79990000000">+7 999 000-00-00</a>
          <a class="button button-primary" href="${pathTo("/kontakty/")}#lead">Записаться на созвон</a>
          <button class="menu-toggle" type="button" aria-label="Открыть меню" aria-expanded="false" data-menu-toggle>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `);
}

function renderFooter() {
  document.write(`
    <div class="floating-actions" aria-label="Быстрые контакты">
      <a class="float-button float-wa" href="https://wa.me/79990000000" aria-label="WhatsApp">W</a>
      <a class="float-button float-tg" href="https://t.me/rezume50plus" aria-label="Telegram">T</a>
      <a class="float-button float-phone" href="tel:+79990000000" aria-label="Позвонить">☎</a>
    </div>
    <a class="mobile-call button button-primary" href="tel:+79990000000">Позвонить эксперту</a>
    <footer class="site-footer">
      <div class="section footer-grid">
        <div>
          <a class="brand" href="${pathTo("/")}"><span class="brand-mark">50+</span><span>Резюме 50+</span></a>
          <p class="muted">Персональная подготовка резюме для опытных специалистов и руководителей. Личный созвон, понятный процесс, результат за 48 часов.</p>
        </div>
        <nav aria-label="Навигация в подвале">
          <strong>Разделы</strong>
          ${navItems.map(([url, label]) => `<a href="${pathTo(url)}">${label}</a>`).join("")}
          <a href="${pathTo("/privacy/")}">Политика конфиденциальности</a>
        </nav>
        <div>
          <strong>Контакты</strong>
          <a href="tel:+79990000000">+7 999 000-00-00</a>
          <a href="mailto:hello@rezume50plus.ru">hello@rezume50plus.ru</a>
          <a href="https://t.me/rezume50plus">Telegram</a>
          <a href="https://wa.me/79990000000">WhatsApp</a>
        </div>
      </div>
      <div class="section copy">© 2026 Резюме 50+. Прототип сайта-витрины.</div>
    </footer>
    <script src="${rootPath}/assets/site.js" defer></script>
  `);
}
