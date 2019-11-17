const IterationService = require('../../services/iteration.service');

class IterationController {

    constructor() {}    

    async read(req, res) {
        let anIterationService = new IterationService();
        let response = await anIterationService.read();
        res.status(200).json(response);
    }

    async save(req, res) {
        let anIterationService = new IterationService();
        let response = await anIterationService.save(req.body);
        res.status(200).json(response);
    }
    
    async update(req, res) {
        let anIterationService = new IterationService();
        let response = await anIterationService.update(req.body);
        res.status(200).json(response);
    }

    async delete(req, res) {
        let anIterationService = new IterationService();
        let response = await anIterationService.delete(req.body.iterationId);
        res.status(200).json(response);
    }
}

module.exports = IterationController;