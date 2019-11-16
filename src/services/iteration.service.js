const iterationModel = require('../models/iteration.model');

module.exports = class IterationService {
    constructor() {}

    read() {
        return iterationModel.find();
    }
}