const mongoose = require('mongoose');
module.exports = mongoose.model('artistas', new mongoose.Schema({
    nome: String
}));