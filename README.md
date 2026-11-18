# AgencyAI — комплект редизайна

Этот архив содержит план редизайна, задания для Claude Code, отдельные HTML-референсы для каждого экрана/view и обязательную инструкцию по проверке каждого этапа.

## Что внутри

- `docs/redesign-plan.md` — общая стратегия, архитектурные ограничения, экраны, этапы, Definition of Done.
- `docs/claude-code-redesign-tasks.md` — последовательные задания для Claude Code. Запускать строго по одному этапу.
- `docs/deepseek-harness-guide.md` — отдельная инструкция для официального DeepSeek Harness (`dsh`): подготовка окружения, безопасные разрешения, стартовый промпт, задания по этапам и формат отчётов.
- `docs/redesign-visual-implementation-guide.md` — визуальная система и правила использования эталонов.
- `docs/redesign-validation-guide.md` — пошаговая проверка каждого этапа, сценарии, viewport, скриншоты и критерии PASS.
- `docs/redesign-reference/index.html` — каталог отдельных HTML-макетов.
- `docs/redesign-reference/*.html` — по одному HTML на каждый экран/view.
- `docs/redesign-reference/assets/` — общие CSS и JS для офлайн-прототипов.

## Как открыть

1. Распаковать архив.
2. Открыть `docs/redesign-reference/index.html` в браузере.
3. Выбрать нужный экран по карточке.
4. Для реализации объединить содержимое папки `docs/` из архива с `docs/` в корне репозитория AgencyAI. Не удалять другие существующие документы и не заменять весь каталог `docs/` целиком.
5. Для Claude Code сначала выполнить только Этап 0 из `docs/claude-code-redesign-tasks.md`. Для официального DeepSeek Harness следовать `docs/deepseek-harness-guide.md` и выполнять строго один этап за раз.

Все HTML-страницы открываются локально без внешних библиотек. Общие `assets/reference.css` и `assets/reference.js` должны оставаться рядом в папке `redesign-reference/assets/`.

## Важное о маршрутах

Существующие маршруты демо: `#timeline?at=...&view=git`, `#timeline?at=...&view=gantt`, `#chat/З-015?at=...`, `#model`. Новые страницы «Обзор» (`#dashboard`), «Обращения» (`#incidents`) и «Карточка обращения» (`#incident/З-015`) помечены как предлагаемые маршруты. Их финальную форму необходимо подтвердить по текущему router на Этапе 0.

## Важное о данных

Это визуальные прототипы. Все номера, значения KPI, имена ролей, адреса, даты, SLA и сообщения в HTML условные. Не копировать их в рабочее приложение. Источник данных и бизнес-правил — текущие модули AgencyAI.

## Проверки комплекта

HTML синтаксически проверены встроенным Python HTML parser; `reference.js` проверен `node --check`. Полноценная браузерная отрисовка в среде подготовки была заблокирована политикой браузера, поэтому визуальную проверку нужно выполнить локально в Chrome/Edge/Firefox по `docs/redesign-validation-guide.md`.


## Использование DeepSeek Harness

Для работы через официальный DeepSeek Harness (`dsh`) см. [`docs/deepseek-harness-guide.md`](./docs/deepseek-harness-guide.md). В документе описаны установка/запуск на уровне официальных инструкций, безопасная подготовка рабочей копии, стартовый промпт и отдельные задания для этапов 0–5. Harness находится в Developer Preview; перед запуском проверьте актуальную документацию и ограничения безопасности.


## Компонентная версия HTML-эталонов

- Повторяемые блоки размечены custom elements `ui-*` без UI-фреймворка.
- `docs/redesign-reference/assets/components.js` — базовая регистрация компонентов.
- `docs/redesign-reference/assets/components.css` — базовые правила custom elements.
- `docs/redesign-reference/components/COMPONENTS.md` — карта компонентов и их контракт.
- `docs/componentized-implementation-plan.md` — этапы реализации и gate-проверки.

Открывайте `docs/redesign-reference/index.html` через локальный сервер или браузер. Эталонные компоненты — presentation-only и не заменяют `src/core`.
