const aspectModel = require('../models/aspect.model');

module.exports = class IterationService {
    constructor() {}

    async read() {
        return await aspectModel.find();
    }

    async save(data) {
        let anAspect = new aspectModel(data);
        await anAspect.save(function(err) {
            if (err) return console.error(err);
        });
        return anAspect;
    }

    async update(data) {
        let id = {_id: data._id};
        delete data._id;

        return await aspectModel.updateOne(id, data, function(err, res) {
            if (err) console.log(err);
        });
    }

    async delete(iterationId) {
        console.log(iterationId)
        return await aspectModel.deleteOne({ _id: iterationId });
    }
}