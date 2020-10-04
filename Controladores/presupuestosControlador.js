const Presupuestos = require("../Tablas/presupuestos");
const { validationResult } = require("express-validator");
//const { createIncomeService } = require("../services/incomeService");

// traigo movimientos
exports.getPresupuestos = async (req, res) => {
  try {
    const {user} = req.params;
    if (user) {
      presupuestos = await Presupuestos.find({ user:user}).sort({
        //date: -1,
      });
      res.json({ presupuestos });
    } else {
      return res.status(400).json({ msg: "No se ha indicado un usuario" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Hubo un error al obtener los presupuestos" });
  }
};

// alta de ingreso
exports.createPresupuestos = async (req, res) => {
  
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        console.log("error");
      return res.status(400).json({ errores: errores.array() });
    }

    const { user, id } = req.body;

    
    const presupuestos = await Presupuestos.findOne({ user, id });
    if (presupuestos) {
       
      // ya existe, actualiza
      await Presupuestos.findOneAndUpdate({ _id: presupuestos._id }, presupuestos, {
        new: false,
      });
    } else {
      // no existe, lo crea
      const presupuestos = new Presupuestos(req.body);
      console.log(req.body);
      await presupuestos.save();
    }

    res.json({ presupuestos });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Hubo un error al crear el presupuesto" });
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