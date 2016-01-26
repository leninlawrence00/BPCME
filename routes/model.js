/**
 * Created by bpc on 14/11/15.
 */
var express = require('express');
var router = express.Router();
var Model = require('../models/model');

router.use(function timeLog(req,res,next){
    next();
});


router.post('/addmodel',function(req,res){
    var model = new Model();
    model.model_name = req.body.model_name;
    console.log(model);
    model.save(function(err,data){
        if(err)
        {
            res.json({status:0,errmsg:err});
            return;
        }
        res.json({status:1,model:data});
    });
});

module.exports = router;