const Inversiones = require("../Tablas/inversiones");
const { validationResult } = require("express-validator");

exports.getInversiones = async (req, res) => {
  try {
    const {user} = req.params;
    if (user) {
      inversiones = await Inversiones.find({ user:user}).sort({});
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

exports.createInversiones = async (req, res) => {
  
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }

    const { user, id_inversion } = req.body;

    
    const inversiones = await Inversiones.findOne({ user, id_inversion });
    if (inversiones) {
      await Movimientos.findOneAndUpdate({ _id: inversiones._id }, inversiones, {
        new: false,
      });
    } else {
      const inversiones = new Inversiones(req.body);
      await inversiones.save();
    }

    res.json({ inversiones });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Hubo un error al crear la inversion" });
  }
};