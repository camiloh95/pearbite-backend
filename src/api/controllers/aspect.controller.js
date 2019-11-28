const AspectService = require('../../services/aspect.service');
const aspectSchema = require('../../lib/schemas/aspect.schema');

class VideogameController {

    constructor() {}    

    async read(req, res) {
        let anAspectService = new AspectService();
        let response = await anAspectService.read();
        return res.status(200).json(response);
    }

    async save(req, res) {
        let response = {};

        let { error } = aspectSchema.save.validate(req.body)
        if (error) {
            response.error = true;
            response.code = 'ERR_VALID_DATA'
            response.message = error.details[0].message
            return res.status(400).json(response)
        }

        let anAspectService = new AspectService();
        response = await anAspectService.save(req.body);
        return res.status(200).json(response);
    }
}

module.exports = VideogameController;