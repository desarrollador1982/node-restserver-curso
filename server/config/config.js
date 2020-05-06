


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

//if(process.env.NODE_ENV === 'dev'){
//    urlDB = 'mongodb://localhost:27017/cafe';
//}else{
    urlDB = 'mongodb+srv://raul:Raulaviana82@cluster0-3ll62.mongodb.net/cafe';
//}

process.env.URLDB = urlDB;
