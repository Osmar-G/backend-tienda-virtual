const Sequelize = require('sequelize')
const db = require('../models');
const carritoDetalle = db.tbc_carrito_detalle;
module.exports = {
   create(req, res) {
    return carritoDetalle
    .create({
        id_carrito: req.body.id_carrito,
        id_producto: req.body.id_producto,
        cantidad: req.body.cantidad,
        precio_unitario: req.body.precio_unitario,
        
        
    })
    .then(carritoDetalle => res.status(200).send(carritoDetalle))
    .catch(error => res.status(400).send(error));
   },
   list(_,res){
   return carritoDetalle.findAll({})
     .then(carritoDetalle => res.status(200).send(carritoDetalle))
     .catch(error => res.status(400).send(error));
   },
   find (req,res){
    return carritoDetalle.findAll({
       where:{
        id_carrito: req.params.id_carrito,
       }
    })
    .then(carritoDetalle => res.status(200).send(carritoDetalle))
    .catch(error => res.status(400).send(error));
   },
   delete(req,res){
    return carritoDetalle.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(carritoDetalle => res.status(200).send(carritoDetalle))
    .catch(error => res.status(400).send(error));
   },
   update(req,res){
    return carritoDetalle.update({
     id_carrito: req.body.id_carrito,
     id_producto: req.body.id_producto,
     cantidad: req.body.cantidad,
     precio_unitario: req.body.precio_unitario
     
     
    },
    {
        where:{
            id: req.params.id
        }
    })
    .then(carritoDetalle => res.status(200).send(carritoDetalle))
    .catch(error => res.status(400).send(error));
   }
};

