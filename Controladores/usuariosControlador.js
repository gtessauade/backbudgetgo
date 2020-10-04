const Usuarios = require("../Tablas/usuarios");
const { validationResult } = require("express-validator");
//const { createIncomeService } = require("../services/incomeService");

// traigo movimientos
exports.getUsuarios = async (req, res) => {
  try {
    const {user} = req.params;
    if (user) {
      usuarios = await Usuarios.find({ user:user}).sort({
        //date: -1,
      });
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

// alta de ingreso
exports.createUsuarios = async (req, res) => {
  
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        console.log("error");
      return res.status(400).json({ errores: errores.array() });
    }

    const { user, id } = req.body;

    
    const usuarios = await Usuarios.findOne({ user, id });
    if (usuarios) {
       
      // ya existe, actualiza
      await Usuarios.findOneAndUpdate({ _id: usuarios._id }, usuarios, {
        new: false,
      });
    } else {
      // no existe, lo crea
      const usuarios = new Usuarios(req.body);
      console.log(req.body);
      await usuarios.save();
    }

    res.json({ usuarios });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Hubo un error al crear el usuario" });
  }
};

// exports.bulkInsertIncome = async (req, res) => {

// }

// baja de ingreso
/* exports.deleteIncome = async (req, res) => {
  try {
    let income = await Income.findById(req.params.id);

    if (!income) {
      return res.status(404).json({ msg: "No existe el ingreso" });
    }

    await Income.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Ingreso Eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
}; */

// modificacion de ingreso