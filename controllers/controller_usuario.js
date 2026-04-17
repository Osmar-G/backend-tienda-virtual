const Sequelize = require('sequelize');
const db = require('../models');
const Usuario = db.tbc_usuarios;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
  create(req, res) {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  return Usuario.create({
    nombre: req.body.nombre,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    email: req.body.email,
    password: hashedPassword,
    rol: req.body.rol
  })
  .then(usuario => res.status(200).send(usuario))
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
   },
   login(req, res) {
  const { email, password } = req.body;

  return Usuario.findOne({ where: { email } })
    .then(usuario => {
      if (!usuario) {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }

      const passwordValido = bcrypt.compareSync(password, usuario.password);

      if (!passwordValido) {
        return res.status(401).send({ message: "Contraseña incorrecta" });
      }

      const token = jwt.sign(
        { id: usuario.id, email: usuario.email, rol: usuario.rol },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      return res.status(200).send({
        auth: true,
        token
      });
    })
    .catch(error => res.status(500).send(error));
}
};

