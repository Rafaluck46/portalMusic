const mongoose = require('mongoose');
module.exports = mongoose.model('albums', new mongoose.Schema({
    nome: { type: String },
    anoLancamendo: { type: Date },
    quantidadeFaixas: { type: Number }
}));