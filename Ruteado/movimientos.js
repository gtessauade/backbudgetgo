const express = require("express");
const router = express.Router();
const movimientosControlador = require("../Controladores/movimientosControlador");
const { check } = require("express-validator");

router.post("/", [], movimientosControlador.createMovimientos);

router.get("/:user", movimientosControlador.getMovimientos);

module.exports = router;