/**
 * Created by bpc on 14/11/15.
 */

var express = require('express');
var router = express.Router();
var Brand = require('../models/brands');

router.use(function timeLog(req,res,next){
    next();
});

router.get('/view',function(req,res){

});

router.post('/addbrand',function(req,res){
    var brands = new Brand();
    brands.brand = req.body.brand;
    console.log(req.body.brand);
    brands.save(function(err,data){
        if(err)
        {
            res.json({status:0,errmsg:err});
            return;
        }
        res.json({status:1,brand:data});
    });
});

module.exports = router;