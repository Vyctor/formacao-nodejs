const express = require("express");
const app = express();

// Dizendo para o Express usar o EJS como View Engine
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  const nome = "Vyctor Guimarães";
  const lang = "JavaScript";
  const error = false;

  const produtos = [
    { nome: "Doritos", preco: 3.14 },
    { nome: "Coca Cola", preco: 5.9 },
    { nome: "Leite", preco: 3.15 },
  ];

  res.render("index", { nome, lang, error, produtos });
});

app.listen(8080, () => {
  console.log("App rodando!");
});
