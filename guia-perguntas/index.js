const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

// Database
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

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
    order: [["id", "DESC"]],
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

app.get("/pergunta/:id", (req, res) => {
  const id = req.params.id;
  Pergunta.findOne({
    where: {
      id: id,
    },
  }).then((pergunta) => {
    if (pergunta != undefined) {
      Resposta.findAll({
        where: { perguntaId: pergunta.id },
        order: [["id", "DESC"]],
      }).then((respostas) => {
        res.render("pergunta", { pergunta: pergunta, respostas: respostas });
      });
    } else {
      res.redirect("/");
    }
  });
});

app.post("/responder", (req, res) => {
  const corpo = req.body.corpo;
  const perguntaId = req.body.pergunta;

  Resposta.create({
    corpo,
    perguntaId,
  }).then(() => {
    res.redirect(`/pergunta/${perguntaId}`);
  });
});

app.listen(8080, () => {
  console.log("App rodando!");
});
