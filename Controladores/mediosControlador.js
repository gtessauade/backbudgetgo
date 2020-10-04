const Medios = require("../Tablas/medios");
const { validationResult } = require("express-validator");
//const { createIncomeService } = require("../services/incomeService");

// traigo movimientos
exports.getMedios = async (req, res) => {
  try {
    const {user} = req.params;
    if (user) {
      medios = await Medios.find({ user:user}).sort({
        //date: -1,
      });
      res.json({ medios });
    } else {
      return res.status(400).json({ msg: "No se ha indicado un usuario" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Hubo un error al obtener los medios" });
  }
};

// alta de ingreso
exports.createMedios = async (req, res) => {
  
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        console.log("error");
      return res.status(400).json({ errores: errores.array() });
    }

    const { user, id_medio } = req.body;

    
    const medios = await Medios.findOne({ user, id_medio });
    if (medios) {
       
      // ya existe, actualiza
      await Medios.findOneAndUpdate({ _id: medios._id }, medios, {
        new: false,
      });
    } else {
      // no existe, lo crea
      const medios = new Medios(req.body);
      
      await medios.save();
    }

    res.json({ medios });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Hubo un error al crear el medio" });
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