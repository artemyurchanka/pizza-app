# Пицца — личный кабинет для заказа

Веб-приложение личного кабинета для заказа пиццы: меню с поиском по названию и составу, страница товара, корзина с изменением количества.

## Стек

- React 19
- TypeScript
- Vite 8
- React Router (v7, data router)
- Axios
- json-server (моковый API)
- CSS Modules

## Запуск

```bash
npm install
npm run dev
```

Команда `npm run dev` одновременно запускает:

- `json-server` на порту `3000` (данные из `data/data.json`),
- Vite dev-сервер с проксированием `/api` на `http://localhost:3000`.

После запуска откройте http://localhost:5173

## Скрипты

| Команда           | Описание                                   |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Запуск json-server и Vite dev-сервера      |
| `npm run build`   | Проверка типов и production-сборка          |
| `npm run preview` | Локальный просмотр production-сборки        |
| `npm run lint`    | Проверка кода ESLint                        |

## API

В режиме разработки данные приходят из мокового API на `json-server` (источник — `data/data.json`):

- `GET /api/products` — список блюд
- `GET /api/products/:id` — отдельное блюдо

В production-сборке `data/data.json` зашивается в бандл, поэтому сайт работает на статическом хостинге без сервера.

## Публикация на GitHub Pages

Репозиторий содержит GitHub Actions workflow (`.github/workflows/deploy.yml`), который при каждом пуше в ветку `main` собирает проект и публикует его на GitHub Pages.

1. Отправьте код в репозиторий (`git push -u origin main`).
2. В репозитории откройте **Settings → Pages**.
3. В поле **Source** выберите **GitHub Actions** и сохраните.
4. Сайт будет доступен по адресу `https://<логин>.github.io/<имя-репозитория>/`.

## Структура

```
src/
  components/     UI-компоненты (Layout, Heading, Search, ProductCard, Product)
  context/        Контекст корзины и провайдер
  helpers/        Конфигурация API
  hooks/          useCart
  interfaces/     Общие типы
  pages/          Страницы (Menu, Cart, Error)
```