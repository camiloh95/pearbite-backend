const VideogameService = require('../../services/videogame.service');
const videogameSchema = require('../../lib/schemas/videogame.schema');

class VideogameController {

    constructor() {}    

    async read(req, res) {
        let aVideogameService = new VideogameService();
        let response = await aVideogameService.read();
        res.status(200).json(response);
    }

    async save(req, res) {
        let response = {};

        let { error } = videogameSchema.save.validate(req.body)
        if (error) {
            response.error = true;
            response.code = 'ERR_VALID_DATA'
            response.message = error.details[0].message
            return res.status(400).json(response)
        }
        
        let aVideogameService = new VideogameService();
        response = await aVideogameService.save(req.body);
        return res.status(200).json(response);
    }
}

module.exports = VideogameController;