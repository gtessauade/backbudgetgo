const express = require("express");
const router = express.Router();
const presupuestosControlador = require("../Controladores/presupuestosControlador");
const { check } = require("express-validator");

router.post("/",[], presupuestosControlador.createPresupuestos);

router.get("/:user", presupuestosControlador.getPresupuestos);

module.exports = router;