'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbc_carrito_detalle', { // 👈 consistente
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      id_carrito: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbb_carritos', // 👈 tu tabla carrito
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      id_producto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tbb_producto', // 👈 tu tabla producto
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      precio_unitario: {
        type: Sequelize.FLOAT,
        allowNull: false
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
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbc_carrito_detalle');
  }
};