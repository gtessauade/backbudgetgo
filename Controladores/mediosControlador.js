const Medios = require("../Tablas/medios");
const { validationResult } = require("express-validator");

exports.getMedios = async (req, res) => {
  try {
    const {user} = req.params;
    if (user) {
      medios = await Medios.find({ user:user}).sort({});
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
       
    
      await Medios.findOneAndUpdate({ _id: medios._id }, medios, {
        new: false,
      });
    } else {
      
      const medios = new Medios(req.body);
      
      await medios.save();
    }

    res.json({ medios });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Hubo un error al crear el medio" });
  }
};

