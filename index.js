const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    const catImageUrl = response.data[0].url;

    res.send(`
      <html>
        <head><title>Random Cat</title></head>
        <body style="text-align:center; font-family:sans-serif;">
          <h1>Випадковий кіт 🐱</h1>
          <img src="${catImageUrl}" alt="cat" style="max-width:500px;">
          <br><br>
          <a href="/">🔄 Оновити</a>
        </body>
      </html>
    `);
  } catch (error) {
    res.send('Помилка при завантаженні кота 🐾');
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
});
