require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

//importamos las rutas, de esta forma si tememos muchas rutas quedaria un codigo muy largo por ello creamos el archivo index.js en /routes
/*app.use(require ('./routes/usuario'));
app.use(require ('./routes/login'));*/
app.use(require ('./routes/index'));


//*Conertar a la BBDD*//
mongoose.connect(process.env.URLDB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true, useFindAndModify: false}, (err, res) => {
    if(err) throw err;
    console.log('Base de datos conectada')
});


app.listen(process.env.PORT, ()=>{
    console.log('Escuchando puerto', process.env.PORT);
});