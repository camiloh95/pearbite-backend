const iterationModel = require('../models/iteration.model');

module.exports = class IterationService {
    constructor() {}

    async read() {
        return await iterationModel.find();
    }

    async save(data, res) {
        let anIteration = new iterationModel(data);
        await anIteration.save(function(err, iteration) {
            if (err) return console.error(err);
        });
        return anIteration;
    }
}