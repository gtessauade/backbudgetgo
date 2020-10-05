const Presupuestos = require("../Tablas/presupuestos");
const { validationResult } = require("express-validator");

exports.getPresupuestos = async (req, res) => {
  try {
    const {user} = req.params;
    if (user) {
      presupuestos = await Presupuestos.find({ user:user}).sort({});
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

exports.createPresupuestos = async (req, res) => {
  
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        console.log("error");
      return res.status(400).json({ errores: errores.array() });
    }

    const { user, id_presupuestos } = req.body;

    
    const presupuestos = await Presupuestos.findOne({ user, id_presupuestos });
    if (presupuestos) {
       
    
      await Presupuestos.findOneAndUpdate({ _id: presupuestos._id }, presupuestos, {
        new: false,
      });
    } else {
      
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