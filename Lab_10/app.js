//fs: filesystem
const fs = require('fs');
const readline = require('readline');

const express = require("express");
const app = express();
const PORT = 3000;


const userRoute = require("./routes/user");
const commentRoute = require("./routes/comment");
const productRoute = require("./routes/product");
app.use('/user', userRoute);
app.use('/comment', commentRoute);
app.use('/product', productRoute);

app.post('/api', (req, res) => {
    console.log(request);
});

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto 3000");
});

app.get("*", (req, res) => {
    res.send("404-la pagina no existe");
});