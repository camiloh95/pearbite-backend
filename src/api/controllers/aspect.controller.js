const AspectService = require('../../services/aspect.service');

class VideogameController {

    constructor() {}    

    async read(req, res) {
        let anAspectService = new AspectService();
        let response = await anAspectService.read();
        res.status(200).json(response);
    }

    async save(req, res) {
        let anAspectService = new AspectService();
        let response = await anAspectService.save(req.body);
        res.status(200).json(response);
    }
    
    // async update(req, res) {
    //     let anAspectService = new AspectService();
    //     let response = await anAspectService.update(req.body);
    //     res.status(200).json(response);
    // }

    // async delete(req, res) {
    //     let anAspectService = new AspectService();
    //     let response = await anAspectService.delete(req.body.iterationId);
    //     res.status(200).json(response);
    // }
}

module.exports = VideogameController;