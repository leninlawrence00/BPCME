/**
 * Created by bpc on 14/11/15.
 */
var express = require('express');
var router = express.Router();
var countries = require('country-list')();
var CounterParties = require('../models/counter_parties.js');

router.use(function(req,res,next){
    next();
})

router.get('/',function(req,res){
    CounterParties.find({},function(err,data){
        if(err)
            res.json({status:0,error:'error occured'});
        countrylist = countries.getNames();
        console.log(countrylist);
        res.render('couter_parties',{parties:data,countries:countrylist});
    })

});

router.get('/add',function(req,res){
    CounterParties.find({},function(err,data){
        if(err)
            res.json({status:0,error:'error occured'});
        res.json({status:1,data:data});
    })
})

router.post('/add',function(req,res){
    var counter_parties = new CounterParties();
    counter_parties.company_name = req.body.company_name;
    counter_parties.email = req.body.email;
    counter_parties.phone = req.body.phone;
    counter_parties.website = req.body.website;
    counter_parties.street = req.body.street;
    counter_parties.city = req.body.city;
    counter_parties.state = req.body.state;
    counter_parties.country = req.body.country;
    counter_parties.p_o_box = req.body.p_o_box;
    counter_parties.save(function(err,cou_part){
        if(err)
            res.json({status:0,err:err});
        res.json({status:1,data:cou_part});
    })
});

module.exports = router;

