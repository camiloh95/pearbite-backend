const testController = (req, res, next) => {
    res.status(200).send({ mensaje: 'Esta webada esta funcionando desde aws'});
};

module.exports = testController;