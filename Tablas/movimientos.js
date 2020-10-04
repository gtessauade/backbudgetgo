const mongoose = require("mongoose");
var id = mongoose.Types.ObjectId();

const movimientosSchema = mongoose.Schema({
  fecha: {
    type: String,
    require: true,
  }, 
  detalle: {
    type: String,
    require: true,
  },
  monto: {
    type: Number,
    require: true,
  },
  medio: {
    type: String,
    require: true,
  },
  tipo_mov: {
    type: String,
    require: true,
  },
  comprobante: {
    type: String,
    require: false,
  },
  dia: {
    type: Number,
    require: true,
  },
  mes: {
    type: Number,
    require: true,
  },
  anio: {
    type: Number,
    require: true,
  },
  sem: {
    type: Number,
    require: true,
  }, 
  user: {
    type: String,
    require: true,
  },
  id: {
     //type: mongoose.Schema.Types.ObjectId,
    type: Number,
     //createIndexes: true,
   // required: true,
     //auto: true,
  },
});

module.exports = mongoose.model("movimientos", movimientosSchema);