const mongoose = require('mongoose');

module.exports = class DatabaseConnection {

    constructor() { }

    async initConnection() {
        mongoose.connect('mongodb://localhost/portalMovie', {
            useNewUrlParser: true,
            user: 'root',
            pass: 'root'
        });
    }

    async _connectionEvents() {
        let db = mongoose.connection;

        db.on('error', console.error.bind(console, 'connection error.'));
        db.on('open', () => {
            console.log('database is open.');
        })
    }
}


