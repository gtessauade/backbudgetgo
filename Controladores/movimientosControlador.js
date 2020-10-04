const Movimientos = require("../Tablas/movimientos");
const { validationResult } = require("express-validator");
//const { createIncomeService } = require("../services/incomeService");

// traigo movimientos
exports.getMovimientos = async (req, res) => {
  console.log("get movimientos")
  try {
    const { user } = req.params;
    if (user) {
      movimientos = await Movimientos.find({ user: user }).sort({
        //date: -1,
      });
      res.json({ movimientos });
    } else {
      return res.status(400).json({ msg: "No se ha indicado un usuario" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Hubo un error al obtener los movimientos" });
  }
};

// alta de ingreso
exports.createMovimientos = async (req, res) => {
  
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        console.log("error");
      return res.status(400).json({ errores: errores.array() });
    }

    const { user, id } = req.body;

    console.log("user",user,id,req.body);
    const movimientos = await Movimientos.findOne({ user, id });
    if (movimientos) {
        console.log("existe");
      // ya existe, actualiza
      await Movimientos.findOneAndUpdate({ _id: movimientos._id }, movimientos, {
        new: false,
      });
    } else {
      // no existe, lo crea
      const movimientos = new Movimientos(req.body);
      console.log(req.body);
      await movimientos.save();
    }

    res.json({ movimientos });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Hubo un error al crear el movimiento" });
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