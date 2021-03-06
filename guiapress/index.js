const express = require("express");
const app = express();
const jsonParser = require("body-parser/lib/types/json");
const urlencodedParser = require("body-parser/lib/types/urlencoded");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");

// View engine
app.set("view engine", "ejs");

// Static
app.use(express.static("public"));

// Body parser
app.use(urlencodedParser({ extended: false }));
app.use(jsonParser());

// Db connection
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    })
    .catch((error) => {
        console.log(error);
    });

app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, () => {
    console.log("App rodando...");
});