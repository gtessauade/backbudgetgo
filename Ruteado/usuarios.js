const express = require("express");
const router = express.Router();
const usuariosControlador = require("../Controladores/usuariosControlador");
const { check } = require("express-validator");

router.post("/",[],usuariosControlador.createUsuarios);

router.get("/:user", usuariosControlador.getUsuarios);

module.exports = router;