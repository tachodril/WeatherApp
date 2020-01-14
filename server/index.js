const express = require("express");
const app = express();
const cors = require("cors");
const port = 7000;
const fetch = require("node-fetch");
app.use(cors());
console.log("heyy");

app.get("/weather/:zipCode", (req, res) => {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?zip=110001,in&appid=40099ca65b8dbe7c1d8936ce418b4f50&units=imperial"
  )
    .then(res => res.json())
    .then(json => res.send(json))
    .catch(console.error());
});
app.get("/", (req, res) => res.send("Hello Tachodril!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
