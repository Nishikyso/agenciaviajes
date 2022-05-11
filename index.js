import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conexión a DB
db.authenticate()
    .then( () => console.log('Conexión exitosa a la base de datos'))
    .catch( err => console.log('Error al conectar a la base de datos: ', err));

// Puerto y host donde va a estar el proyecto
const host = process.env.HOST || "0.0.0.0"; // Heroku asigna el host que corresponde gracias al 0.0.0.0
const port = process.env.PORT || 4400;

// Habilita pug
app.set('view engine', 'pug');

// Obtiene el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.siteName = "Agencia de Viajes";
    next();
});

// Body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta public
app.use(express.static('public'));

// agrega el router (/)
app.use('/', router);

app.listen(port, host, () => {
    console.log(`Server is running on port ${port}`);
})