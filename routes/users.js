var express = require('express');
var User = require('../models/users.js');
var jwt  = require('jsonwebtoken');
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
});

router.post('/authenticate',function(req,res){
  var email = req.body.email;
  var password = req.body.password;
  User.findOne({email:email},function(err,user){
    if(err)
      return res.json({status:false,code:0,errmsg:err});
    if(!user)
      return res.json({status:true,code:1,msg:'User Not Found'});
    if(!user.validPassword(password))
      return res.json({status:true,code:2,msg:'Incorrect password'});
    var token = jwt.sign(user,'secretsecret',{ expiresInMinutes:1440});
    res.json({status:true,code:3,msg:'Login Successful',token:token});

  })
})
module.exports = router;
