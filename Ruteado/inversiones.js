const express = require("express");
const router = express.Router();
const inversionesControlador = require("../Controladores/inversionesControlador");
const { check } = require("express-validator");

router.post("/",[],inversionesControlador.createInversiones);

router.get("/:user", inversionesControlador.getInversiones);

module.exports = router;