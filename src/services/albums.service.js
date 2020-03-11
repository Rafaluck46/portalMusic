const Model = require('./../database/models/album.model');

module.exports = class AlbumService {
    constructor() {

    }

    async cadastrarAlbum(album) {

        if (!album) throw 'album vazio';

        let model = new Model();

        model.nome = album.nome;
        model.dataLancamento = album.dataLancamento;
        model.quantidadeFaixas = album.quantidadeFaixas;
        
        await model.save();
    }

    async recuperarAlbums() {
        let result = await Model.find();
        return result;
    }
}