/**
 * Created by bpc on 16/11/15.
 */
var express = require('express');

module.exports =function(app,passport){

    app.get('/',isLoggedIn,function(req,res){
        res.render('users');
    });

    app.get('/login',function(req,res){
        res.render('login',{ message: req.flash('loginMessage') });
    })

    app.post('/login',passport.authenticate('local-login',{
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

}

function isLoggedIn(req,res,next){
    console.log("called");
    if(req.isAuthenticated())
        return next();
   res.redirect('/login');
}
