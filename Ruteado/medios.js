const express = require("express");
const router = express.Router();
const mediosControlador = require("../Controladores/mediosControlador");
const { check } = require("express-validator");

router.post( "/",[ ], mediosControlador.createMedios);

router.get("/:user", mediosControlador.getMedios);

module.exports = router;