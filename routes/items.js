/**
 * Created by bpc on 14/11/15.
 */

var express = require('express');
var router = express.Router();
var Items = require('../models/items.js');
router.use(function(req,res,next){
    next();
})

router.get('/',function(req,res){
    res.render('items');
})
router.post('/add',function(req,res){
    var item = new Items();
    item.item_code = req.body.item_code;
    item.item_name = req.body.item_name;
    item.brand_id = req.body.brand_id;
    item.model_id = req.body.model_id;
    item.description = req.body.description;
    item.quantity = req.body.quantity;
    item.unitprice = req.body.unitprice;
    item.save(function(err,data){
        if(err)
            res.json({status:0,errmsg:err})
        res.json({status:1,data:data});
    })
})

router.get('/get',function(req,res){
    Items.find({},function(err,data){
        if(err)
            res.json({status:0,errmsg:err});
        res.json({status:1,data:data});
    })
})