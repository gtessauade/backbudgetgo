const Inversiones = require("../Tablas/inversiones");
const { validationResult } = require("express-validator");
//const { createIncomeService } = require("../services/incomeService");

// traigo movimientos
exports.getInversiones = async (req, res) => {
  try {
    const {user} = req.params;
    if (user) {
      inversiones = await Inversiones.find({ user:user}).sort({
        //date: -1,
      });
      res.json({ inversiones });
    } else {
      return res.status(400).json({ msg: "No se ha indicado un usuario" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Hubo un error al obtener las inversiones" });
  }
};

// alta de ingreso
exports.createInversiones = async (req, res) => {
  
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        console.log("error");
      return res.status(400).json({ errores: errores.array() });
    }

    const { user, id } = req.body;

    
    const inversiones = await Inversiones.findOne({ user, id });
    if (inversiones) {
       
      // ya existe, actualiza
      await Movimientos.findOneAndUpdate({ _id: inversiones._id }, inversiones, {
        new: false,
      });
    } else {
      // no existe, lo crea
      const inversiones = new Inversiones(req.body);
      console.log(req.body);
      await inversiones.save();
    }

    res.json({ inversiones });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Hubo un error al crear la inversion" });
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