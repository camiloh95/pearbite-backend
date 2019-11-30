const IterationService = require('../../services/iteration.service');
const iterationSchema = require('../../lib/schemas/iteration.schema');

class IterationController {

    constructor() {}    

    async read(req, res) {
        let anIterationService = new IterationService();
        let response = await anIterationService.read();
        res.status(200).json(response);
    }   

    async readById(req, res) {
        let response = {};

        let { error } = iterationSchema.iterationId
                                        .validate(req.query.iterationId)
        if (error) {
            response.error = true;
            response.code = 'ERR_VALID_DATA'
            response.message = error.details[0].message
            return res.status(400).json(response)
        }

        let anIterationService = new IterationService();
        response = await anIterationService.readById(req.query.iterationId);
        return res.status(200).json(response);
    }

    async readByVideogameId(req, res) {
        let response = {};

        let { error } = iterationSchema.iterationId
                                        .validate(req.query.videogameId)
        if (error) {
            response.error = true;
            response.code = 'ERR_VALID_DATA'
            response.message = error.details[0].message
            return res.status(400).json(response)
        }

        let anIterationService = new IterationService();
        response = await anIterationService.readByVideogameId(req.query.videogameId);
        return res.status(200).json(response);
    }

    async save(req, res) {
        let response = {};

        let { error } = iterationSchema.save.validate(req.body)
        if (error) {
            response.error = true;
            response.code = 'ERR_VALID_DATA'
            response.message = error.details[0].message
            return res.status(400).json(response)
        }

        let anIterationService = new IterationService();
        response = await anIterationService.save(req.body);
        return res.status(200).json(response);
    }
    
    async update(req, res) {
        let response = {};

        let { error } = iterationSchema.update.validate(req.body)
        if (error) {
            response.error = true;
            response.code = 'ERR_VALID_DATA'
            response.message = error.details[0].message
            return res.status(400).json(response)
        }

        let anIterationService = new IterationService();
        response = await anIterationService.update(req.body);
        return res.status(200).json(response);
    }

    async delete(req, res) {
        let response = {};

        let { error } = iterationSchema.iterationId
                                        .validate(req.query.iterationId)
        if (error) {
            response.error = true;
            response.code = 'ERR_VALID_DATA'
            response.message = error.details[0].message
            return res.status(400).json(response)
        }

        let anIterationService = new IterationService();
        response = await anIterationService.delete(req.query.iterationId);
        return res.status(200).json(response);
    }
}

module.exports = IterationController;