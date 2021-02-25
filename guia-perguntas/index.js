const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

// Database
const Pergunta = require("./database/Pergunta");

connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com um banco de dados!");
  })
  .catch((error) => {
    consoele.log(error);
  });

// Dizendo para o Express usar o EJS como View Engine
app.set("view engine", "ejs");
app.use(express.static("public"));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {
  const perguntas = Pergunta.findAll({
    raw: true,
  }).then((perguntas) => {
    res.render("index", { perguntas });
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarPergunta", (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  Pergunta.create({
    titulo,
    descricao,
  }).then(() => {
    res.redirect("/");
  });
});

app.listen(8080, () => {
  console.log("App rodando!");
});
