const express = require('express');
const app = express();
const passport = require('passport');


const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

mongoose.connect(keys.authDB.mongoURI,{
    useNewUrlParser: true,
    useFindAndModify: false
},(err) => {
    if(err){
        console.log(err)
    }else{
        console.log('Mongo connection successful')
    }})


require('./models/User');
require('./models/Request');
require('./services/passport');


const cookieDuration = 30;

app.use(cookieSession({
    maxAge: cookieDuration * 24 * 60 * 60 * 1000,
    keys: [keys.authDB.cookieKey]
}))

app.use( passport.initialize());
app.use( passport.session());



app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

require('./routes/searchRoutes')(app);
require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    //express will serve up production assets
    app.use(express.static('client/build'))
    //

    const path = require('path');

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.get('/', (req,res) => {
    res.send({"server status":"up and running!!"})
})




