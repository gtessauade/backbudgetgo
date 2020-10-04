const express = require("express");
const router = express.Router();
const presupuestosControlador = require("../Controladores/presupuestosControlador");
const { check } = require("express-validator");

// api de movimientos
router.post(
    
  "/",
  [
    //check("amount", "El Monto es obligatorio.").not().isEmpty(),
    //check("category", "La Categoría es obligatoria").not().isEmpty(),
    //check("paymentMethod", "El método de Cobro es obligatorio").not().isEmpty(),
  ], 
  presupuestosControlador.createPresupuestos
);

// get de movimientos
router.get("/:user", presupuestosControlador.getPresupuestos);

module.exports = router;