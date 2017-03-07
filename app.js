const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application
const tweetBank = require('./tweetBank');
const routes = require('./routes');


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates

// app.use('/', function(req, res) {
//     // in some file that is in the root directory of our application... how about app.js?

//     nunjucks.configure('views', { noCache: true });
//     nunjucks.render('index.html', function(err, output) {
//         console.log(output);
//         res.send(output)
//     });

// })

app.use(express.static('public'));

app.use('/', routes);

app.listen(3000, function() {
    console.log("Server listening...")
});
