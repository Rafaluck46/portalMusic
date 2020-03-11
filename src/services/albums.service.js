const Model = require('./../database/models/album.model');

module.exports = class AlbumService {
    constructor() {

    }

    async cadastrarAlbum(album) {
        let model = new Model();
        try {
            model.nome = album.nome;
            model.dataLancamento = album.dataLancamento;
            model.quantidadeFaixas = album.quantidadeFaixas;
            await model.save();
        } catch (err) {
            console.log(err);
        }
    }

    async recuperarAlbums() {
        let result = await Model.find();
        return result;
    }
}