const Sequelize = require('sequelize')
const db = require('../models');
const Producto = db.tbb_producto;
module.exports = {
   create(req, res) {
    return Producto
    .create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        id_categoria: req.body.id_categoria,
        url_imagen: req.body.url_imagen
        
    })
    .then(Producto => res.status(200).send(Producto))
    .catch(error => res.status(400).send(error));
   },
   list(_,res){
   return Producto.findAll({})
     .then(Producto => res.status(200).send(Producto))
     .catch(error => res.status(400).send(error));
   },
   find (req,res){
    return Producto.findAll({
       where:{
        nombre: req.params.nombre,
       }
    })
    .then(Producto => res.status(200).send(Producto))
    .catch(error => res.status(400).send(error));
   },
   delete(req,res){
    return Producto.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(Producto => res.status(200).send(Producto))
    .catch(error => res.status(400).send(error));
   },
   update(req,res){
    return Producto.update({
     nombre: req.body.nombre,
     descripcion: req.body.descripcion,
     precio: req.body.precio,
     stock: req.body.stock,
     id_categoria: req.body.id_categoria,
     url_imagen: req.body.url_imagen
    },
    {
        where:{
            id: req.params.id
        }
    })
    .then(Producto => res.status(200).send(Producto))
    .catch(error => res.status(400).send(error));
   }
};

