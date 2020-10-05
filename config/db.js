const mongoose = require("mongoose");
require("dotenv").config({ path: "var.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.CN_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Se conecto a la base de Budget GO");
  } catch (error) {
    console.log("Hubo un error en la conexión a Budget GO");
    console.log(error);
    process.exit(1); 
  }
};

module.exports = conectarDB;