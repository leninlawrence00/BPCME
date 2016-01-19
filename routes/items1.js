var express = require('express');
var router = express.Router();
var Items = require('../models/items.js');

router.use(function timeLog(req,res,next){
    next();
})