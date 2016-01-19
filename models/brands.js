/**
 * Created by bpc on 14/11/15.
 */

var mongoose = require('mongoose');

var brandsSchema = new mongoose.Schema({
   brand : {type:String,unique:true,required:true}
});

module.exports = mongoose.model('Brands',brandsSchema);
