const mongoose = require("mongoose");
var id = mongoose.Types.ObjectId();

const mediosSchema = mongoose.Schema({
  banco: {
    type: String,
    require: true,
  }, 
  numero: {
    type: String,
    require: true,
  },
  cbu: {
    type: String,
    require: true,
  },
  debito: {
    type: String,
    require: true,
  },
 saldo: {
    type: Number,
    require: true,
  },
  entidad: {
    type: String,
    require: false,
  },
  vencimiento: {
    type: String,
    require: true,
  },
  cierre_resumen: {
    type: String,
    require: true,
  },
  vencimiento_resumen: {
    type: String,
    require: true,
  },
  esCuentaBancaria: {
    type: Number,
    require: true,
  }, 
  esTarjetaCredito: {
    type: Number,
    require: true,
  },
  esEfectivo: {
    type: Number,
    require: true,
  },
  vencimientoResumenDia: {
    type: Number,
    require: true,
  },
  vencimientoResumenMes: {
    type: Number,
    require: true,
  },
  vencimientoResumenAnio: {
    type: Number,
    require: true,
  },
  vencimientoResumenSem: {
    type: Number,
    require: true,
  },
  user: {
    type: String,
    require: true,
  },
  id_medio: {
     //type: mongoose.Schema.Types.ObjectId,
    type: Number,
     //createIndexes: true,
   // required: true,
     //auto: true,
  },
});

module.exports = mongoose.model("medios", mediosSchema);