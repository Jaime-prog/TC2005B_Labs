const express = require("express");
const router = express.Router()


router.get("/", (req, res) => {
    res.send({ data: "Informacion sobre productos" });
});

router.post("/", (req, res) => {
    res.send({ data: "Producto Registrado" });
});

router.put("/", (req, res) => {
    res.send({ data: "Producto Actualizado" });
});

router.delete("/", (req, res) => {
    res.send({ data: "Producto Eliminado" });
});

module.exports= router