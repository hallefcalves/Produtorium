const express = require('express');

const router = express.Router();

function calc (m,n){
    var r = m+(1.0/m);
    if(m > n)
        return 1.0;
    return r * calc(m+1, n);
}
router.post('/', async (req, res) => {
    try {
        let {
            m,
            n
        } = req.body;
        let r = calc(m,n)
        return res.send({
            r
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            error: 'Operation failed'
        });
    }
})

module.exports = app => app.use('/recursive', router)
