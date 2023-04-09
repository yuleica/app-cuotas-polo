const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors');


const app = express();
const rutas = require('../server/routes');

//configuraciones

    require('dotenv').config({path: './.env'})


//configuración del puerto salida
app.set('port', process.env.PORT || 9000);
app.listen(app.get('port'), () => {
    console.log('server is running on port', app.get('port'));
});

const baseDatos= process.env.DATABASE;
const contraseña = process.env.DB_PASSWORD;
const usuarioDB = process.env.DB_USER;
const puertoDB = process.env.DB_PORT;


//configuración BD
const dbOptions = {
    host: 'localhost',
    port: puertoDB,
    user: usuarioDB,
    password: contraseña,
    database: baseDatos
};

//middleware
app.use(myconn(mysql, dbOptions, 'single') );
app.use(express.json());
app.use(cors());

//ruta principal de la app
app.get('/', (req,res) => {
    res.send('bienvenido a mi api de conexión')
});

//rutas
app.use('/api', rutas);
