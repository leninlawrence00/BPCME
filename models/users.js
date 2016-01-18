/**
 * Created by bpc on 14/11/15.
 */

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var userSchema = new mongoose.Schema({
    name :{type:String,required:true},
    email:{type:String,required:true,unique:true},
    username:{type:String,unique:true},
    password:{type:String}
});

/*
userSchema.methods.generateHash= function(password){
    console.log(password);
    return bcrypt.hashSync(password,bcrypt.genSalt(8),null);
};

*/
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('User',userSchema);
