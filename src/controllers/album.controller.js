
let AlbumService = require('./../services/albums.service');
const albumService = new AlbumService();

module.exports = class AlbumController {

    constructor() { }

    static async cadastrarAlbum(req, res) {
        let album = req.body;
        try {
            await albumService.cadastrarAlbum(album);
        } catch (err) {
            console.log(err);
        } finally {
            res.send();
        }
        
    }

    static async recuperarAlbums(req, res) {
        res.send(await albumService.recuperarAlbums());
    }

}






