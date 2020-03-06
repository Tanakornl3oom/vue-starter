var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ test: 'hello world' });
});

router.get('/datas', function(req, res, next) {
    let datas = [{ id: 1, info: {} }];
    res.json({ datas });
});

router.post('/data', function(req, res, next) {
    console.log('vody', req.body);
    const { datas, info } = req.body;
    datas.push(info);
    res.json(datas);
});

module.exports = router;
