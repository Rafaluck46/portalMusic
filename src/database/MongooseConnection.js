const mongoose = require('mongoose');

const _connectionEvents = () => {
    let db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error.'));
    db.on('open', () => {
        console.log('database is open.');
    });

    process.on('SIGINT', function () {
        db.close(function () {
            console.log("A conexão padrão do mongoose foi desconectada.");
            process.exit(0);
        });
    });
}

module.exports = {
    initConnection: () => {
        mongoose.connect('mongodb://localhost/portalMusic', {
            useNewUrlParser: true});
        _connectionEvents();
    }
}




