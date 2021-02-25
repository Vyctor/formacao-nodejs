const Sequelize = require("sequelize");

const connection = new Sequelize("guia-perguntas", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
