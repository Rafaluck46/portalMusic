let ArtistaService = require('../services/artista.service');
const artistaService = new ArtistaService();
const os = require('os');

module.exports = class ArtistaController {

    constructor() { }

    static async cadastrarArtista(req, res) {
        let artista = req.body;
        try {
            artistaService.cadastrarArtista(artista);
            res.status(200);
            res.send({ message: os.hostname() })
        } catch (err) {
            res.status(500);
            res.send({ message: `os name: ${os.hostname()} \n ${err}` });
        }
    }

    static async recuperarArtistas(req, res) {
        try {
            res.status(200);
            res.send({
                message: os.hostname(),
                object: await artistaService.recuperarArtistas()
            });
        } catch (err) {
            res.status(500);
            res.send({ message: `os name: ${os.hostname()} \n ${err}` });
        }
    }

}






