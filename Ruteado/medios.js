const express = require("express");
const router = express.Router();
const mediosControlador = require("../Controladores/mediosControlador");
const { check } = require("express-validator");

// api de movimientos
router.post(
    
  "/",
  [
    //check("amount", "El Monto es obligatorio.").not().isEmpty(),
    //check("category", "La Categoría es obligatoria").not().isEmpty(),
    //check("paymentMethod", "El método de Cobro es obligatorio").not().isEmpty(),
  ], 
  mediosControlador.createMedios
);

// get de movimientos
router.get("/:user", mediosControlador.getMedios);

module.exports = router;