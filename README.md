# Лендинг для компании "Lomaemvse.ru"

## Запуск
```aiignore
npm install
npm run preview
```

## Для переноса на MODX Revolution

1. Выполните `npm run build`
2. Скопируйте содержимое `dist/assets/` в папку `assets/` вашего MODX-сайта
3. В шаблоне MODX подключите:
   ```html
   <link rel="stylesheet" href="assets/main.css">
   <script src="assets/main.js"></script>