const express = require("express");
const router = express.Router()


router.get("/", (req, res) => {
    res.send({ data: "Aqui iria la informacion del usuario" });
});

router.post("/", (req, res) => {
    res.send({ data: "Usuario Creado" });
});

router.put("/", (req, res) => {
    res.send({ data: "Usuario Actualizado" });
});

router.delete("/", (req, res) => {
    res.send({ data: "Usuario Eliminado" });
});

module.exports= router