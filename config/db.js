const mongoose = require("mongoose");
require("dotenv").config({ path: "var.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.CN_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Se conecto a la base");
  } catch (error) {
    console.log("hubo un error en la conexion");
    console.log(error);
    process.exit(1); // Detener la app
  }
};

module.exports = conectarDB;