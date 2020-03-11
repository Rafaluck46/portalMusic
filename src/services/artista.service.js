const Model = require('./../database/models/artista.model');


module.exports = class ArtistaService {
    constructor() {

    }

    async cadastrarArtista(artista) {
        let model = new Model();
        await model.save(artista);
    }

    async recuperarArtistas() {
        let result = await Model.find();
        return result;
    }
}