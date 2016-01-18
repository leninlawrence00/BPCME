/**
 * Created by bpc on 14/11/15.
 */

var mongoose = require('mongoose');
var modelSchema = new mongoose.Schema({
   model_name:{type:String,required:true,unique:true},

});

module.exports = mongoose.model('model',modelSchema);