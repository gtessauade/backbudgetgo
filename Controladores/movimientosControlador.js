const Movimientos = require("../Tablas/movimientos");
const { validationResult } = require("express-validator");
const movimientos = require("../Tablas/movimientos");

exports.getMovimientos = async (req, res) => {
  console.log("get movimientos")
  try {
    const { user } = req.params;
    if (user) {
      const movimientos = await Movimientos.find({ user: user });
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


exports.createMovimientos = async (req, res) => {
  
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
       
      return res.status(400).json({ errores: errores.array() });
    }

    const { user, id_movimiento } = req.body;

    
    const movimientos = await Movimientos.findOne({ user, id_movimiento });
    if (movimientos) {
       
      await Movimientos.findOneAndUpdate({ _id: movimientos._id }, movimientos, {
        new: false,
      });
    } else {
     
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

