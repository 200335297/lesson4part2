var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');

  //create a list of users
    var userList = ['Dmytro','Spencer','Minnie'];
    res.render('users',{
      title: 'User List',
        users:userList
    })
});

module.exports = router;
