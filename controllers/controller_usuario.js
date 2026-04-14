const Sequelize = require('sequelize')
const db = require('../models');
const Usuario = db.tbc_usuarios;
module.exports = {
   create(req, res) {
    return Usuario
    .create({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        password: req.body.password,
        rol: req.body.rol
    })
    .then(Usuario => res.status(200).send(Usuario))
    .catch(error => res.status(400).send(error));
   },
   list(_,res){
   return Usuario.findAll({})
     .then(Usuario => res.status(200).send(Usuario))
     .catch(error => res.status(400).send(error));
   },
   find (req,res){
    return Usuario.findAll({
       where:{
        nombre: req.params.nombre,
       }
    })
    .then(Usuario => res.status(200).send(Usuario))
    .catch(error => res.status(400).send(error));
   },
   delete(req,res){
    return Usuario.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(Usuario => res.status(200).send(Usuario))
    .catch(error => res.status(400).send(error));
   },
   update(req,res){
    return Usuario.update({
     nombre: req.body.nombre,
     direccion: req.body.direccion,
     telefono: req.body.telefono,
     email: req.body.email,
     password: req.body.password,
     rol: req.body.rol
    },
    {
        where:{
            id: req.params.id
        }
    })
    .then(Usuario => res.status(200).send(Usuario))
    .catch(error => res.status(400).send(error));
   }
};

