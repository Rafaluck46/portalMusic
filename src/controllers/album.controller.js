
let AlbumService = require('./../services/albums.service');
const albumService = new AlbumService();
const os = require('os');

module.exports = class AlbumController {

    constructor() { }

    static async cadastrarAlbum(req, res) {
        let album = req.body;
        try {
            await albumService.cadastrarAlbum(album);
            res.status(200);
            res.send({ message: os.hostname() })
        } catch (err) {
            res.status(500);
            res.send({ message: `os name: ${os.hostname()} \n ${err}` });
        }
    }

    static async recuperarAlbums(req, res) {
        try {
            res.status(200);
            res.send({
                message: os.hostname(),
                object: await albumService.recuperarAlbums()
            });
        } catch (err) {
            res.status(500);
            res.send({ message: `os name: ${os.hostname()} \n ${err}` });
        }
    }

}






