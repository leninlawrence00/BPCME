/**
 * Created by bpc on 14/11/15.
 */

var express = require('express');
var router = express.Router();
var multer = require('multer');
var Items = require('../models/items.js');
var Brands = require('../models/brands');
var Models = require('../models/model');
var upload = multer({ dest: '../public/QRcode' });
router.use(function timeLog(req,res,next){
    next();
})

router.get('/viewitems',function(req,res){
    //res.render('items');
    res.send('Hello world');
})
router.get('/additem',function(req,res){
    Brands.find({},function(err,data){
        if(err)
            res.json({status:0,errmsg:err});
        //res.json(data);
        Models.find({},function(err1,modelsdata){
            if(err1)
                res.json({status:0,errmsg:err});
            res.render('items',{brands:data,models:modelsdata});
        })

    })

})
router.post('/add',upload.single('qr_code'), function(req,res){
    var item = new Items();
    console.log(req.file.filename);
    item.item_code = req.body.item_code;
    item.brand_id = req.body.brand_id;
    item.model_id = req.body.model_id;
    item.part_no = req.body.part_no;
    item.description = req.body.description;
    item.quantity = req.body.quantity;
    item.unitprice = req.body.unitprice;
    item.qr_code = req.file.filename;
    item.save(function(err,data){
        if(err)
            res.json({status:0,errmsg:err})
          res.json({status:1,data:data});
        //res.redirect('/viewitems');
    });

})

router.get('/get',function(req,res){
    Items.find({},function(err,data){
        if(err)
            res.json({status:0,errmsg:err});
        res.json({status:1,data:data});

    })
})

 module.exports = router;