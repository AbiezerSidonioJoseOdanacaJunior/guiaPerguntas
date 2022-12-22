const Sequelize = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", "@bibi#14", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
