/**
 * Created by bpc on 20/11/15.
 */

var mongoose = require('mongoose');
var contactSchema = new mongoose.Schema({
    first_name : {type:String,required:true},
    last_name :{type:String,required:true},
    email :{type:String,required:true,unique:true},
    phone :{type:String},
    company: mongoose.Schema.Types.ObjectId,
    type:{type:String},
    comments :String

});

module.exports = mongoose.model('contacts',contactSchema);