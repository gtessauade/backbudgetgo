const Prestamos = require("../Tablas/prestamos");
const { validationResult } = require("express-validator");

exports.getPrestamos = async (req, res) => {
  try {
    const {user} = req.params;
    if (user) {
      prestamos = await Prestamos.find({ user:user}).sort({});
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
       
     
      await Prestamos.findOneAndUpdate({ _id: prestamos._id }, prestamos, {
        new: false,
      });
    } else {
     
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