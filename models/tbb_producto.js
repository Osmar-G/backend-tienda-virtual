'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbb_producto extends Model {
    static associate(models) {
      // Relación con categoría
      tbb_producto.belongsTo(models.tbc_categoria, {
        foreignKey: 'id_categoria',
        as: 'categoria'
      });

      // ✅ MOVIDO AQUÍ
      tbb_producto.hasMany(models.tbc_carrito_detalle, {
        foreignKey: 'id_producto',
        as: 'detalles'
      });
    }
  }

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
    },
    url_imagen: {
  type: DataTypes.STRING,
  allowNull: true
}

  }, {
    sequelize,
    modelName: 'tbb_producto',
    tableName: 'tbb_producto',
    timestamps: true
  });

  return tbb_producto;
};