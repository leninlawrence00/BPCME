/**
 * Created by bpc on 14/11/15.
 */

var express = require('express');
var router = express.Router();

router.use(function timeLog(req,res,next){
    next();
});

router.get('/view',function(req,res){

})