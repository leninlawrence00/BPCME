/**
 * Created by bpc on 14/11/15.
 */
var mongoose = require('mongoose');

var CounterPartiesSchema = new mongoose.Schema({
    company_name : {type:String,required:true,unique:true},
    email : {type:String,required:true,unique:true},
    phone :{type:String,required:true},
    website :{type:String},
    street :{type:String},
    city :{type:String},
    state :{type:String},
    country:{type:String},
    p_o_box :{type:Number}

});

module.exports = mongoose.model('CounterParties',CounterPartiesSchema);