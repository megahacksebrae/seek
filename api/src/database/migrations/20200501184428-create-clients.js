'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('clientes', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        telefone: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        sexo: {
          type: Sequelize.STRING
        },
        tipo_pessoa: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        senha_hash: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cep: {
          type: Sequelize.STRING,
          allowNull: false
        },
        endereco: {
          type: Sequelize.String
        },
        numero: {
          type: Sequelize.INTEGER
        },
        complemento: {
          type: Sequelize.STRING
        },
        uf: {
          type: Sequelize.STRING
        }
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('clientes');
    
  }
};
