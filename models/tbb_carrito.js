'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tbb_carrito extends Model {
    static associate(models) {
      tbb_carrito.belongsTo(models.tbc_usuarios, {
        foreignKey: 'id_usuario',
        as: 'usuario'
      });
    }
  }
  tbb_carrito.hasMany(models.tbc_carritoDetalle, {
  foreignKey: 'id_carrito',
  as: 'detalles'
});

  tbb_carrito.init({
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'tbb_carrito',
    tableName: 'tbb_carritos',
    timestamps: false
  });

  return tbb_carrito;
};2