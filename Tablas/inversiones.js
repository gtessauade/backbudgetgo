const mongoose = require("mongoose");
var id = mongoose.Types.ObjectId();

const inversionesSchema = mongoose.Schema({
  tipo: {
    type: String,
    require: true,
  }, 
  flag_deposito: {
    type: String,
    require: true,
  },
  monto: {
    type: Number,
    require: true,
  },
  rendimiento: {
    type: Number,
    require: true,
  },
 vencimiento: {
    type: String,
    require: true,
  },
  cuenta: {
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

module.exports = mongoose.model("inversiones", inversionesSchema);