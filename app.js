const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('Welcome to chat service')
        //  next();
});

app.get('/demo', (req, res, next) => {
    res.send('Welcome to chat service demo page')
        //  next();
});

app.listen(3000, () => {
    console.log('App is running on 3000');
})