const mongoose = require('mongoose')

//direccion de base de datos
const URI = 'mongodb://localhost/mern-task'

//Establezco la direccion de la conexion - url
mongoose.connect(URI)
    .then(db => console.log('DB connection is runing'))
    .catch(err => console.error(err))

//Exportamos la conexión
module.exports = mongoose
