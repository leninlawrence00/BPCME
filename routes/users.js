var express = require('express');
var User = require('../models/users.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});


router.post('/adduser',function(req,res){
  //console.log(req.body);
  var user = new User();
  user.name = req.body.name;
  user.username = req.body.username;
  user.password = user.generateHash(req.body.password);
  user.email = req.body.email;
  console.log(user);
  user.save(function(err){
    if(err)
      res.json(err);
    res.json({status:true,message:'Successful'});
})
})
module.exports = router;
