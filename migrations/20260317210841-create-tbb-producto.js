'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbb_producto', { // 👈 singular para coincidir
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      nombre: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      descripcion: {
        type: Sequelize.STRING(200),
        allowNull: true
      },

      precio: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      stock: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      id_categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbc_categoria', // 👈 tabla correcta
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      url_imagen: {
  type: DataTypes.STRING,
  allowNull: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbb_producto');
  }
};