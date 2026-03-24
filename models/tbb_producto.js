'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbb_producto extends Model {
    static associate(models) {
      tbb_producto.belongsTo(models.tbc_categoria, {
        foreignKey: 'id_categoria',
        as: 'categoria'
      });
    }
  }
tbb_producto.hasMany(models.tbc_carritoDetalle, {
  foreignKey: 'id_producto',
  as: 'detalles'
});
  tbb_producto.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },

    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },

    precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'tbb_producto',
    tableName: 'tbb_producto', // ✅ IMPORTANTE
    timestamps: true
  });

  return tbb_producto;
};