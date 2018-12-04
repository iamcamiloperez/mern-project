const mongoose = require('mongoose')
const { Schema } = mongoose

//Esquema de datos a usar
const TaskSchema = new Schema({
    titulo: { type: String, required: true},
    descripcion: { type: String, required: true}
})


//Exporta esquema
module.exports = mongoose.model('Task', TaskSchema);