const EmpController = {
    index(req, res) {
        res.json({msg: 'Kontrollerből működik'})
    },
    store(req, res) {
        res.json({msg: req.body.city })
    }
}

module.exports = EmpController;