const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mongooseConnection = require('./database/MongooseConnection');
mongooseConnection.initConnection();


const ArtistaController = require('./controllers/artista.controller');
const AlbumController = require('./controllers/album.controller');

app.use(express.json());


app.get('/', (req, res) => {
    res.send('default');
})

app.get('/api/album', AlbumController.recuperarAlbums);
app.post('/api/album', AlbumController.cadastrarAlbum);

app.get('/api/artista', ArtistaController.recuperarArtistas);
app.post('/api/artista', ArtistaController.cadastrarArtista);


app.listen(port, () => {
    process.stdout.write(`O servidor está rodando em: ${port} `);
});