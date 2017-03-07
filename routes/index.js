
const express = require('express');
const morgan = require('morgan');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');




module.exports = function routes(io) {

    router.get('/users/:name', function(req, res) {
        var name = req.params.name;
        var tweets = tweetBank.find({ name: name });
        res.render('index', { tweets: tweets, name: name, showForm: true });
    });

    router.get('/tweets/:id', function(req, res) {
        var id = Number(req.params.id);
        console.log(typeof id)
        var tweets = tweetBank.find({ id: id });
        res.render('index', { tweets: tweets });
    });

    router.get('/', function(req, res) {
        let tweets = tweetBank.list();
        res.render('index', { tweets: tweets,
 showForm: true });
    });

    router.use(function(req, res, next) {
        console.log(req.method)
        console.log(req.path)
        next();
    })

    router.post('/tweets', function(req, res) {
        var name = req.body.name;
        var text = req.body.text;
        tweetBank.add(name, text);
        io.sockets.emit('newTweet', {
            name: name,
            text: text
        })
        res.redirect('/');
    });

    router.use(morgan('dev'));

    return router;
}





// app.get('/news', function(req, res) {
//     res.send("Rob says hi!")
// })
