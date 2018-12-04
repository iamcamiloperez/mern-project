const express = require('express')
const router = express.Router()

//Impporto modelo para consultas
const Task = require('../models/task')

    //Establecer ruta inicial GET
    router.get('/', async (req, res) =>{
    //consulta y retorna datos task
    const task = await Task.find()
    //console.log(task)
    res.json(task)
    })

    //Obtener una sola
    router.get('/', async (req, res) => {
        const task = await Task.findById(req.params.id)
        res.json(task)
    })


    //Agregar datos //El navegador envia datos y los recibo en body
    router.post('/', async (req, res) => {
        //console.log(req.body)
        //Creo el objeto de datos y lo lleno con el body recibido
        const { titulo, descripcion } = req.body
        //Asigna el objeto - incluye generación de Id
        const task = new Task({
            titulo, 
            descripcion
        })
        await task.save();
        //res.json('Recived')
        res.json({status: 'saved'})
    })

    //Actualizar
    router.put('/:id', async (req, res) => {
        const { titulo, descripcion } = req.body
        const newTask = {titulo, descripcion}
        await Task.findByIdAndUpdate(req.params.id, newTask)
        res.json({status: 'updated'})
    })

    //Eliminar
    router.delete('/:id', async (req, res) =>{
        await Task.findByIdAndRemove(req.params.id)
        res.json({status: 'deleted'})
    })

//Importar modulo
module.exports = router