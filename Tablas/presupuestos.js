const mongoose = require("mongoose");
var id = mongoose.Types.ObjectId();

const presupuestosSchema = mongoose.Schema({
  mes: {
    type: Number,
    require: true,
  },
  anio: {
    type: Number,
    require: true,
  },
  rubro: {
    type: String,
    require: true,
  }, 
  categoria: {
    type: String,
    require: true,
  },
  monto: {
    type: Number,
    require: true,
  },
  user: {
    type: String,
    require: true,
  },
  id_presupuestos: {
    type: Number,
  },
});

module.exports = mongoose.model("presupuestos", presupuestosSchema);