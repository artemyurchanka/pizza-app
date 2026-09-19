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

Моковый API реализован на `json-server`. Источник данных — `data/data.json`.

- `GET /api/products` — список блюд
- `GET /api/products/:id` — отдельное блюдо

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