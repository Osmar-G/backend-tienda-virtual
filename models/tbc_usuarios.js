'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasMany(models.tbb_carritos, {
        foreignKey: 'id_usuario',
        as: 'tbb_carritos'
      });
    }
  }

  Usuario.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },

    direccion: {
      type: DataTypes.STRING(150),
      allowNull: false
    },

    telefono: {
      type: DataTypes.STRING(15),
      allowNull: false
    },

    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

    rol: {
      type: DataTypes.ENUM('cliente', 'admin'),
      allowNull: false,
      defaultValue: 'cliente'
    },

    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }

  }, {
    sequelize,
    modelName: 'tbc_usuarios',
    tableName: 'tbc_usuarios',
    timestamps: true
  });

  return Usuario;
};