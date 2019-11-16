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
        let response = await anIterationService.save(req.body, res);
        res.status(200).json(response);
    }
}

module.exports = IterationController;