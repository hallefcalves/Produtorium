const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {

    try {
        const {
            m,
            n
        } = req.body;

        var r = 1.0;
        for (var i = m; i <= n; i++) {
            r = (r * ((1.0 / i) + parseInt(i)));
        }

        return res.send({
            "resultado" : r
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            error: 'Operation failed'
        });
    }
})

module.exports = app => app.use('/iterative', router);