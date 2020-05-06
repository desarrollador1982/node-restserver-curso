


//el process es un objeto global que esta corriendo a lo largo de toda la applicaicon node

///=============
// Puerto
///=============
process.env.PORT = process.env.PORT || 3000;

///=============
// Entorno
///=============
//saber si estamos en desarrollo o produccion
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

///=============
// Base de datos
///=============
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = process.env.MONGO_URI; //ojo con esto es una variable de entorno de heroku, mirar videos explicativos 113 del curso node: DE cero a experto udemy
}

process.env.URLDB = urlDB;
