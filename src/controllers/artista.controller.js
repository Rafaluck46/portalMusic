let Artista = require('../entities/Artista');

module.exports = class ArtistaController {

    constructor() {

    }

    cadastrarArtista(req, res) {
        if(req.body)
            Object.assign(new Artista, req.body);

        
    }

    recuperarArtistas(req, res) {
        throw 'Not implemented';
    }

}






