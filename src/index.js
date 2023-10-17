require("dotenv").config();

const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());

const peleadorRoute = require("./routers/peleador");
app.use(peleadorRoute);


app.listen(process.env.SERVER_PORT, function(request, response){
    console.log(">>>Escuchando puerto " + process.env.SERVER_PORT);
});
