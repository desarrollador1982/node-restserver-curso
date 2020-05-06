require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

//importamos las rutas
app.use(require ('./routes/usuario'));

//*Conertar a la BBDD*//
mongoose.connect(process.env.URLDB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true}, (err, res) => {
    if(err) throw err;
    console.log('Base de datos conectada')
});


app.listen(process.env.PORT, ()=>{
    console.log('Escuchando puerto', process.env.PORT);
});