const express = require('express');
const morgan = require('morgan');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function(req, res) {
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets });
});

router.use(function(req, res, next) {
    console.log(req.method)
    console.log(req.path)
    next();
})

router.use(morgan('dev'))


module.exports = router;





// app.get('/news', function(req, res) {
//     res.send("Rob says hi!")
// })
