const express = require('express')
const router = express.Router()

//Establecer ruta inicial
router.get('/', (req, res) =>{
    //Retorna
    res.json({
        status: 'API is run!'
    })
})

//Importar modulo
module.exports = router