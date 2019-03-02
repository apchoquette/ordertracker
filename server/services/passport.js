const LocalStrategy = require('passport-local').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const passport = require('passport');

const User = mongoose.model('users');

//FOR SETTING UP TEST USER -- DO NOT UNCOMMENT>>>
// let testCredentials = new User({
//     firstName: 'Andy',
//     lastName: 'Choquette',
//     email: 'andy.choquette@akdo.com',
//     password: 'Lanyon135!'
// })

// testCredentials.save();

passport.serializeUser((user, done)=>{
    
  done(null, user.id);
  console.log('user serialized')

})

passport.deserializeUser((id, done) => {
  User.findById(id)
      .then((user)=>{
          done(null, user);
          
      })
})
  


passport.use(new LocalStrategy(
    async function(username, password, done) {
      await User.findOne({ email: username,password:password }, function (err, user) {
        if (err) { 
            console.log(err);
            return done(err); }
        if (!user) { 
            console.log('no user found') 
            return done(null, false); }
        
        console.log('User found: ',user)
        return done(null, user);
      });
    }
  ));