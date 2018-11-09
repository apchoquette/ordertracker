const express = require('express');
const app = express();


const PORT = 4000;

app.listen(PORT,()=> {
    console.log('Listening on port: ', PORT);
})

app.get('/', (req,res) => {
    res.send({"server status":"up and running!!"})
})

require('./routes/searchRoutes')(app);

