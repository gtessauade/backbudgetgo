const mongoose = require("mongoose");
var id = mongoose.Types.ObjectId();

const prestamosSchema = mongoose.Schema({
    tipo: {
        type: String,
        require: true,
      },   
      monto: {
        type: Number,
        require: true,
      },
      cuenta: {
        type: String,
        require: true,
      },
      cuotas: {
        type: Number,
        require: true,
      },
  vencimiento: {
    type: String,
    require: true,
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
  id_prestamo: {
    type: Number,
  },
});

module.exports = mongoose.model("prestamos", prestamosSchema);