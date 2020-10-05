const Usuarios = require("../Tablas/usuarios");
const { validationResult } = require("express-validator");



exports.getUsuarios = async (req, res) => {
  try {
    const {user} = req.params;
    
    if (user) {
      usuarios = await Usuarios.find({ id_usuario:user}).sort({});
      res.json({ usuarios });
    } else {
      return res.status(400).json({ msg: "No se ha indicado un usuario" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Hubo un error al obtener el usuario" });
  }
};


exports.createUsuarios = async (req, res) => {
  
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        
      return res.status(400).json({ errores: errores.array() });
    }

    const { user, id_usuario } = req.body;

    
    const usuarios = await Usuarios.findOne({ user, id_usuario });
    if (usuarios) {
       
      await Usuarios.findOneAndUpdate({ _id: usuarios._id }, usuarios, {
        new: false,
      });
    } else {
      const usuarios = new Usuarios(req.body);
      await usuarios.save();
    }

    res.json({ usuarios });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Hubo un error al crear el usuario" });
  }
};

