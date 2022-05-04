const express = require("express");
const router = express.Router()


router.get("/", (req, res) => {
    res.send({ data: "Aqui iria la informacion del usuario" });
});

router.post("/", (req, res) => {
    res.send({ data: "Comentario Creado" });
});

router.put("/", (req, res) => {
    res.send({ data: "Comentario Actualizado" });
});

router.delete("/", (req, res) => {
    res.send({ data: "Comentario Eliminado" });
});

module.exports= router