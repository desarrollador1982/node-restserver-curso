const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un role válido'
}

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email:{
        type: String,
        unique: true,
        required: [true, 'El correo es obligatorio']
    },
    password:{
        type: String,
        required: [true, 'El password es obligatorio']
    },
    img:{
        type: String,
        required: false
    },
    role:{
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
});

//para no regresar la contraseña al cliente ya que no nos interesa que se vea
usuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObj = user.toObject();
    delete userObj.password;

    return userObj;
}

//para usar el plugin unique validator
usuarioSchema.plugin(uniqueValidator,{message: '{PATH} debe de ser único' } )

module.exports = mongoose.model('Usuario', usuarioSchema);