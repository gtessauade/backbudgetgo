const express = require("express");
const router = express.Router();
const prestamosControlador = require("../Controladores/prestamosControlador");
const { check } = require("express-validator");

router.post("/",[], prestamosControlador.createPrestamos);

router.get("/:user", prestamosControlador.getPrestamos);

module.exports = router;