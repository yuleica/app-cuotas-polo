const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors');

const app = express();
const rutas = require('../server/routes');

//configuración del puerto salida
app.set('port', process.env.PORT || 9000);
app.listen(app.get('port'), () => {
    console.log('server is running on port', app.get('port'));
});

//configuración BD
const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'sqluser',
    password: '123456',
    database: 'registroCuotas'
};

/*const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'admin_cuotas',
    password: '123456ac',
    database: 'registroCuotas'

   // rehacer la creación de usuario
};*/

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
