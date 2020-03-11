
let AlbumService = require('./../services/albums.service');
const albumService = new AlbumService();

module.exports = class AlbumController {

    constructor() { }

    static async cadastrarAlbum(req, res) {
        let album = req.body;
        try {
            await albumService.cadastrarAlbum(album);
            res.send();
        } catch (err) {
            res.status(500);
            res.send({ message: err });
        }
    }

    static async recuperarAlbums(req, res) {
        try {
            res.send(await albumService.recuperarAlbums());
        } catch (err) {
            res.status(500);
            res.send({ message: err });
        }
    }

}






