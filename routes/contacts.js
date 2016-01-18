/**
 * Created by bpc on 20/11/15.
 */

var express = require('express');
var router = express.Router();
var Contacts = require('../models/contacts');

router.use(function(req,res,next){
    next();
})

router.get('/',function(req,res){
    res.render('contacts');
})
router.post('/add',function(req,res){
    var contact = new Contacts();
    contact.first_name = req.body.first_name;
    contact.last_name = req.body.last_name;
    contact.email= req.body.email;
    contact.phone = req.body.phone;
    contact.company = req.body.company;
    contact.type = req.body.type;
    contact.comments= req.body.comments;

    contact.save(function(err,con){
        if(err)
            res.json({status:0});
        res.json({status:1,contacts:con});
    })
});

router.get('/get',function(req,res){
    Contacts.find({},function(err,data){
        if(err)
            res.json({status:0,err:err});
        res.json({status:1,data:data});
    })
});

module.exports = router;
