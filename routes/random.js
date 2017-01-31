
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    var randomnumber = Math.random();

    res.render('random', {title:'random number',
        randomNumber: randomnumber
    })


});

module.exports = router;





/**
 * Created by Maddy on 2017-01-31.
 */
