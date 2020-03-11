let ArtistaService = require('../services/artista.service');
const artistaService = new ArtistaService();

module.exports = class ArtistaController {

    constructor() { }

    static async cadastrarArtista(req, res) {
        let artista = req.body;
        artistaService.cadastrarArtista(artista);
        res.send();
    }

    static async recuperarArtistas(req, res) {
        res.send(await artistaService.recuperarArtistas());
    }
    
}






