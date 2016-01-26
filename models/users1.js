/**
 * Created by BPC-ME on 1/26/2016.
 */

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var userSchema = new mongoose.Schema({
    name :{type:String,required:true},
    email:{type:String,required:true,unique:true},
    username:{type:String,unique:true},
    password:{type:String}
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('User',userSchema);
