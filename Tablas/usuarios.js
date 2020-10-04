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
  id: {
     //type: mongoose.Schema.Types.ObjectId,
    type: Number,
     //createIndexes: true,
   // required: true,
     //auto: true,
  },
});

module.exports = mongoose.model("usuarios", usuariosSchema);
