/**
 * Created by bpc on 14/11/15.
 */

var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    item_code :{type:String,required:true,unique:true},
    brand_id : {type:mongoose.Schema.Types.ObjectId,required:true},
    model_id : {type:mongoose.Schema.Types.ObjectId,required:true},
    part_no : {type:String,required:true,unique:true},
    description: String,
    quantity :Number,
    unitprice : Number

});

module.exports = mongoose.model('Items',itemSchema);

