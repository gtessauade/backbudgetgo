const Prestamos = require("../Tablas/prestamos");
const { validationResult } = require("express-validator");
//const { createIncomeService } = require("../services/incomeService");

// traigo movimientos
exports.getPrestamos = async (req, res) => {
  try {
    const {user} = req.params;
    if (user) {
      prestamos = await Prestamos.find({ user:user}).sort({
        //date: -1,
      });
      res.json({ prestamos });
    } else {
      return res.status(400).json({ msg: "No se ha indicado un usuario" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Hubo un error al obtener los prestamos" });
  }
};

// alta de ingreso
exports.createPrestamos = async (req, res) => {
  
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        console.log("error");
      return res.status(400).json({ errores: errores.array() });
    }

    const { user, id_prestamo } = req.body;

    
    const prestamos = await Prestamos.findOne({ user, id_prestamo });
    if (prestamos) {
       
      // ya existe, actualiza
      await Prestamos.findOneAndUpdate({ _id: prestamos._id }, prestamos, {
        new: false,
      });
    } else {
      // no existe, lo crea
      const prestamos = new Prestamos(req.body);
      console.log(req.body);
      await prestamos.save();
    }

    res.json({ prestamos });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Hubo un error al crear el prestamo" });
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