# Проверка компонентной HTML-версии

| Экран | Custom elements | Подключение компонентов | Статическая проверка |
|---|---:|---|---|
| `overview.html` | 20 | CSS + JS | PASS |
| `incidents.html` | 21 | CSS + JS | PASS |
| `incident-detail.html` | 9 | CSS + JS | PASS |
| `timeline-git.html` | 4 | CSS + JS | PASS |
| `timeline-gantt.html` | 2 | CSS + JS | PASS |
| `chat.html` | 12 | CSS + JS | PASS |
| `model.html` | 8 | CSS + JS | PASS |

Дополнительно: `components.js` проверен через `node --check`; все семь HTML-документов разобраны HTML parser без синтаксических ошибок.

Это статическая техническая проверка структуры. Визуальный PASS и адаптивная приёмка требуют запуска в браузере по `redesign-validation-guide.md`.
