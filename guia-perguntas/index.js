const express = require("express");
const app = express();

// Dizendo para o Express usar o EJS como View Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var nome = "Vyctor Guimarães";
  var lang = "JavaScript";

  res.render("index", { nome, lang, error: false });
});

app.listen(8080, () => {
  console.log("App rodando!");
});
