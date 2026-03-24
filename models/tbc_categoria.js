'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbc_categoria extends Model {
    
   static associate(models) {
  tbc_categoria.hasMany(models.tbb_producto, {
    foreignKey: 'id_categoria',
    as: 'productos'
  });
}
  }
  

  tbc_categoria.init({
    nombreCategoria: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbc_categoria',
    tableName: 'tbc_categoria', // ✅ IMPORTANTE
    timestamps: true // solo si tu migración tiene createdAt/updatedAt
  });

  return tbc_categoria;
};