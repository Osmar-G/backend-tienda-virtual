const Sequelize = require('sequelize')
const db = require('../models');
const Categoria = db.tbc_categoria;

module.exports = {
   create(req, res) {
    return Categoria
    .create({
        nombreCategoria: req.body.nombreCategoria
    })
    .then(Categoria => res.status(200).send(Categoria))
    .catch(error => res.status(400).send(error));
   },
   list(_,res){
   return Categoria.findAll({})
     .then(Categoria => res.status(200).send(Categoria))
     .catch(error => res.status(400).send(error));
   },
   find (req,res){
    return Categoria.findAll({
       where:{
        nombreCategoria: req.params.nombreCategoria,
       }
    })
    .then(Categoria => res.status(200).send(Categoria))
    .catch(error => res.status(400).send(error));
   },
   delete(req,res){
    return Categoria.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(Categoria => res.status(200).send(Categoria))
    .catch(error => res.status(400).send(error));
   },
   update(req,res){
    return Categoria.update({
     nombreCategoria: req.body.nombreCategoria
    },
    {
        where:{
            id: req.params.id
        }
    })
    .then(Categoria => res.status(200).send(Categoria))
    .catch(error => res.status(400).send(error));
   }
};

