const express = require('express') //Permite ejecutar un servidor
const morgan = require('morgan') //Permite ver por consola peticiones que llegan del cliente
const path = require('path') //Permite la navegación entre archivos estaticos

//Servidor express
const app = express();


//Settings
//Toma el puerto del servicio donde está
app.set('port', process.env.PORT || 3000)

//Middkewares
//FuncionesSe ejecutan antes de llegar a las rutas
app.use(morgan('dev')) //Permite ver un mensaje formateado
app.use(express.json()) // cada vez que llega un dato comprueba si es json y podemos acceder a él -Enviar too

//Routes
app.use('/api/task', require('./routes/task.routes'))


//Static files //Maneja archivos estaticos
//Obtiene la direccion de la carpeta public
//console.log(path.join(__dirname, 'public'))
//Indico a express donde esta la carpeta estatica
app.use(express.static(path.join(__dirname, 'public')))

//Crea el servidor express en 3000
//app.get('port') obtiene el puerto ofrecido
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})

