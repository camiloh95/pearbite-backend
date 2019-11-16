module.exports = class iterationController {

    constructor(IterationService) {
        this.anIterationService = new IterationService();
    }    

    read(req, res) {
        let response = this.anIterationService.read();
        res.status(200).json(response);
    }
}