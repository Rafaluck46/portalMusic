const Model = require('./../database/models/artista.model');


module.exports = class ArtistaService {
    constructor() {

    }

    async cadastrarArtista(artista) {
        if (!artista) throw 'artista vazio';
        let model = new Model();

        model.nome = artista.nome;
        
        await model.save();
    }

    async recuperarArtistas() {
        let result = await Model.find();
        return result;
    }
}