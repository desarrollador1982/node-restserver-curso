const express = require('express');
const Usuario = require('../models/usuario');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();


app.post('/login', (req, res) =>{

    //obtenemos el lo que trae el body
    let body = req.body;

    Usuario.findOne({email:body.email}, (err, usuarioDB) =>{
        //controlamos el error
        if(err){
            return res.status(500).json({
                ok: false,
                err
            });
        }
        //si el usuario no existe ne la bbdd hacemos esto
        if(!usuarioDB){
            return res.status(400).json({
                ok: false,
                err:{
                    message: 'Usuario o contraseña incorrectos'
                }
            });
        }

        //comprobar la contraseña, lo podemos hacer con una funcion ya existente en bcrypt, retorna true o false, comprobamos si es falso
        if( !bcrypt.compareSync( body.password, usuarioDB.password)){
            return res.status(400).json({
                ok: false,
                err:{
                    message: 'Usuario o contraseña incorrectos'
                }
            });
        }

        //esto es el tiempo en que expira, seg-min-horas-dias { expiresIn: 60 * 60 * 24 *30}
        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
    
        res.json({
            ok:true,
            usuario:usuarioDB,
            token
        })

    });


   

});





module.exports = app;