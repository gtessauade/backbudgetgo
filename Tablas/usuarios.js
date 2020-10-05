const mongoose = require("mongoose");
var id = mongoose.Types.ObjectId();

const usuariosSchema = mongoose.Schema({
  mail: {
    type: String,
    require: true,
  }, 
  pass: {
    type: String,
    require: true,
  },
  id_usuario: {
    type: Number,
  },
});

module.exports = mongoose.model("usuarios", usuariosSchema);
