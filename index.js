const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors"); 
const cron = require("node-cron");

const app = express();

conectarDB();


app.use(cors());


app.use(express.json({ extended: true }));


const port = process.env.PORT || 4000;


app.use("/api/movimientos", require("./Ruteado/movimientos"));
app.use("/api/inversiones", require("./Ruteado/inversiones"));
app.use("/api/medios", require("./Ruteado/medios"));
app.use("/api/prestamos", require("./Ruteado/prestamos"));
app.use("/api/presupuestos", require("./Ruteado/presupuestos"));
app.use("/api/usuarios", require("./Ruteado/usuarios"));


app.listen(port, "0.0.0.0", () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});



