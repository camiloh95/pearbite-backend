const videogameModel = require('../models/videogame.model');

module.exports = class VideogameService {
    constructor() {}

    async read() {
        return await videogameModel.find();
    }

    async save(data) {
        let aVideogame = new videogameModel(data);
        await aVideogame.save(function(err) {
            if (err) return console.error(err);
        });
        return aVideogame;
    }
}