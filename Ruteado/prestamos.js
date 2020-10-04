const express = require("express");
const router = express.Router();
const prestamosControlador = require("../Controladores/prestamosControlador");
const { check } = require("express-validator");

// api de movimientos
router.post(
    
  "/",
  [
    //check("amount", "El Monto es obligatorio.").not().isEmpty(),
    //check("category", "La Categoría es obligatoria").not().isEmpty(),
    //check("paymentMethod", "El método de Cobro es obligatorio").not().isEmpty(),
  ], 
  prestamosControlador.createPrestamos
);

// get de movimientos
router.get("/:user", prestamosControlador.getPrestamos);

module.exports = router;