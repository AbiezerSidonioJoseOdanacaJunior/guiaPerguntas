const Sequelize = require("sequelize");
const connection = require("./database");

//Defenir os campos da tabela e os tipos
const Pergunta = connection.define("pergunta", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

//Sincronizar sua tabela com seu banco de dados
Pergunta.sync({ force: false }).then(() => {
  console.log("Tabela criado com sucesso!");
});

module.exports = Pergunta;
