const videogameModel = require('../models/videogame.model');

module.exports = class VideogameService {
    constructor() {}

    async read() {
        return await videogameModel.find();
    }
}