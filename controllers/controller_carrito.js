const Sequelize = require('sequelize')
const db = require('../models');
const Carrito = db.tbb_carrito;
module.exports = {
   create(req, res) {
    return Carrito
    .create({
        id_usuario: req.body.id_usuario,
        estado: req.body.estado,
        fecha_creacion: req.body.fecha_creacion,
        total: req.body.total
    })
    .then(Carrito => res.status(200).send(Carrito))
    .catch(error => res.status(400).send(error));
   },
   list(_,res){
   return Carrito.findAll({})
     .then(Carrito => res.status(200).send(Carrito))
     .catch(error => res.status(400).send(error));
   },
   find (req,res){
    return Carrito.findAll({
       where:{
        id_usuario: req.params.id_usuario,
       }
    })
    .then(Carrito => res.status(200).send(Carrito))
    .catch(error => res.status(400).send(error));
   },
   delete(req,res){
    return Carrito.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(Carrito => res.status(200).send(Carrito))
    .catch(error => res.status(400).send(error));
   },
   update(req,res){
    return Carrito.update({
     id_usuario: req.body.id_usuario,
        estado: req.body.estado,
        fecha_creacion: req.body.fecha_creacion,
        total: req.body.total
    },
    {
        where:{
            id: req.params.id
        }
    })
    .then(Carrito => res.status(200).send(Carrito))
    .catch(error => res.status(400).send(error));
   }
};


