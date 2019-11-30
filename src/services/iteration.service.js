const iterationModel = require('../models/iteration.model');

module.exports = class IterationService {
    constructor() {}

    async read() {
        return await iterationModel.find();
    }

    async readById(iterationId) {
        return await iterationModel.findById(iterationId);
    }

    async readByVideogameId(videogameId) {
        return await iterationModel.find({ videogameId: videogameId});
    }

    async save(data) {
        let anIteration = new iterationModel(data);
        await anIteration.save(function(err) {
            if (err) return console.error(err);
        });
        return anIteration;
    }

    async update(data) {
        let id = {_id: data._id};
        delete data._id;

        return await iterationModel.updateOne(id, data, function(err, res) {
            if (err) console.log(err);
        });
    }

    async delete(iterationId) {
        return await iterationModel.deleteOne({ _id: iterationId });
    }
}