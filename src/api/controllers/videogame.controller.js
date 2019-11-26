const VideogameService = require('../../services/videogame.service');

class VideogameController {

    constructor() {}    

    async read(req, res) {
        let aVideogameService = new VideogameService();
        let response = await aVideogameService.read();
        res.status(200).json(response);
    }

    async save(req, res) {
        let aVideogameService = new VideogameService();
        let response = await aVideogameService.save(req.body);
        res.status(200).json(response);
    }

    // async save(req, res) {
    //     let aVideogameService = new VideogameService();
    //     let response = await aVideogameService.save(req.body);
    //     res.status(200).json(response);
    // }
    
    // async update(req, res) {
    //     let aVideogameService = new VideogameService();
    //     let response = await aVideogameService.update(req.body);
    //     res.status(200).json(response);
    // }

    // async delete(req, res) {
    //     let aVideogameService = new VideogameService();
    //     let response = await aVideogameService.delete(req.body.iterationId);
    //     res.status(200).json(response);
    // }
}

module.exports = VideogameController;