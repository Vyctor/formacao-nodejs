const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

// Database
const perguntaModel = require("./database/Pergunta");

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
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarPergunta", (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  res.send(`Formulário recebido! ${titulo} - ${descricao}`);
});

app.listen(8080, () => {
  console.log("App rodando!");
});
