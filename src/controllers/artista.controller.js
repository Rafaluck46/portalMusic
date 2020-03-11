let ArtistaService = require('../services/artista.service');
const artistaService = new ArtistaService();

module.exports = class ArtistaController {

    constructor() { }

    static async cadastrarArtista(req, res) {
        let artista = req.body;
        try {
            artistaService.cadastrarArtista(artista);
            res.send();
        } catch (err) {
            res.status(500);
            res.send({ message: err })
        }
    }

    static async recuperarArtistas(req, res) {
        try {
            res.send(await artistaService.recuperarArtistas());
        } catch (err) {
            res.status(500);
            res.send({ message: err })
        }
    }

}






