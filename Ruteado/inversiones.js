const express = require("express");
const router = express.Router();
const inversionesControlador = require("../Controladores/inversionesControlador");
const { check } = require("express-validator");

// api de movimientos
router.post(
    
  "/",
  [
    //check("amount", "El Monto es obligatorio.").not().isEmpty(),
    //check("category", "La Categoría es obligatoria").not().isEmpty(),
    //check("paymentMethod", "El método de Cobro es obligatorio").not().isEmpty(),
  ], 
  inversionesControlador.createInversiones
);

// get de movimientos
router.get("/:user", inversionesControlador.getInversiones);

module.exports = router;