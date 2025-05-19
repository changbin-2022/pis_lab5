const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    const login = req.query.login;
    if (!login) {
        res.send('Введіть ваш логін у Moodle у адресний рядок');
    } else {
        res.send(`Ваш логін у Moodle: ${login}`);
    }
});

app.get("/is-33fiot-23-129", (req, res) => {
    res.send("Каленіченко Варвара, ІС-33");
});

app.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
});
