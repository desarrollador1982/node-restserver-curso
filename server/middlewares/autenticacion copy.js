const jwt = require('jsonwebtoken');

// ==========
//Verificar token
//============

let verificaToken = (req, res, next)=>{

    //obtenemos los headers 
    let token = req.get('token');

    //debemos conprobar que el token sea valido
    jwt.verify( token, process.env.SEED, (err, decoded) =>{
        if(err){
            return res.status(401).json({
                ok:false,
                err:{
                    message : 'Token no válido'
                }
            });
            //dento del decoded nos viene el usuario
            req.usuario = decoded.usuario
        }
        //llamar a next para que siga ejecutando el codigo, que esta dentro de usuario.js:
        //app.get('/usuario', verificaToken,  (req, res) => {   
        next();
    });

    
};


// ==========
//Verificar role ADMIN_ROLE
//============

let verificaAdmin_Role = (req, res, next)=>{

    //obtenemos los headers para ver si el usuario es administrador
    let usuario = req.usuario;

    //si el usuario es Admin
    if(usuario.role === "ADMIN_ROLE"){
        next();
    }else{
        return res.status(401).json({
            ok:false,
            err:{
                message : 'Usuario no es administrador, no tiene esos permisos'
            }
        });
    }
    
};

//lo exportamos
module.exports = {
    verificaToken,
    verificaAdmin_Role
}