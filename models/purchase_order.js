/**
 * Created by bpc on 24/11/15.
 */

var mongoose = require('mongoose');
var itemSchema = mongoose.Schema({
    item_id:mongoose.Schema.Types.ObjectId,
    quantity : Number,
    unit_price : Number

})
var SalesOrderSchema = mongoose.Schema({
    customer :mongoose.Schema.Types.ObjectId,
    currency : {type:String},
    inv_no   : {type:String,unique:true,required:true},
    inv_date : Date,
    bpc_no   :{type:String,unique:true,required:true},
    p_o_no   :{type:String,unique:true,required:true},
    p_o_date :Date,
    itemlist :[itemSchema]
});
