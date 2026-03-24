'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbc_carritoDetalle extends Model {
    static associate(models) {
      tbc_carritoDetalle.belongsTo(models.tbb_carrito, {
        foreignKey: 'id_carrito',
        as: 'carrito'
      });

      tbc_carritoDetalle.belongsTo(models.tbb_producto, {
        foreignKey: 'id_producto',
        as: 'producto'
      });
    }
  }

  tbc_carritoDetalle.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    id_carrito: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    precio_unitario: {
      type: DataTypes.FLOAT,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'tbc_carrito_detalle',
    tableName: 'tbc_carrito_detalle',
    timestamps: true
  });

  return tbc_carritoDetalle;
};