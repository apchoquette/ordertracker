const passport = require('passport');

module.exports = app => {
    
    app.post('/api/login', 
        passport.authenticate('local', { failureRedirect: 'http://localhost:3000/login' }),
        (req, res) => {
            res.redirect('http://localhost:3000/');
    });

    app.get('/api/currentuser', (req,res) => {
        res.send(req.user);
    })

    app.get('/api/login', (req,res) => {
        res.redirect('/');
    })

    app.get('/api/logout', (req, res) => { 
        req.logout();
        res.redirect('http://localhost:3000/login')
    })
    
}