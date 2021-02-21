const express = require("express");
const app = express();

app.get("/", () => {
  res.end("Seja bem vindo ao guia do programador");
});

app.get("/blog/:artigo?", (req, res) => {
  const artigo = req.params.artigo;
  res.write("Este é o nosso blog!");
  if (artigo) {
    res.write(artigo);
  }
  res.end();
});

app.get("/canal/youtube", (req, res) => {
  const queryParams = req.query["canal"];
  res.write("Este é o nosso canal do YouTube!");
  res.end(queryParams);
});

app.get("/ola/:nome/:empresa", (req, res) => {
  res.send(`<h1>Olá ${req.params.nome} da ${req.params.empresa}</h1>`);
});

app.listen(4000, (error) => {
  if (error) {
    console.log("Ocorreu um erro: ", error);
  } else {
    console.log("Servidor iniciado!");
  }
});
