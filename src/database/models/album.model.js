const mongoose = require('mongoose');
module.exports = mongoose.model('albums', new mongoose.Schema({
    nome: { type: String },
    dataLancamento: { type: Date },
    quantidadeFaixas: { type: Number }
}));