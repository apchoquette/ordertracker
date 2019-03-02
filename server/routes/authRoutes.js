const passport = require('passport');

module.exports = app => {


    
    app.post('/api/login', 
        passport.authenticate('local', { failureRedirect: process.env.NODE_ENV === 'production' ? '/login' : 'http://localhost:3000/login' }),
        (req, res) => {
            res.redirect(process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000/');
    });

    app.get('/api/currentuser', (req,res) => {
        res.send(req.user);
    })

    app.get('/api/login', (req,res) => {
        res.redirect(process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000/');
    })

    app.get('/api/logout', (req, res) => { 
        req.logout();
        process.env.NODE_ENV === 'production' 
        ?
        res.redirect('/login')
        :
        res.redirect('http://localhost:3000/login')
    })
    
}