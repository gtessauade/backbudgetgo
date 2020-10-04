const express = require("express");
const router = express.Router();
const movimientosControlador = require("../Controladores/movimientosControlador");
const { check } = require("express-validator");

// api de movimientos
router.post(
    
  "/",
  [
    //check("amount", "El Monto es obligatorio.").not().isEmpty(),
    //check("category", "La Categoría es obligatoria").not().isEmpty(),
    //check("paymentMethod", "El método de Cobro es obligatorio").not().isEmpty(),
  ], 
  movimientosControlador.createMovimientos
);

// get de movimientos
router.get("/:user", movimientosControlador.getMovimientos);

module.exports = router;