const express = require( 'express' );
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application

app.use(function(req, res, next) {
    console.log(req.method)
    console.log(req.path)
    next();
})
app.use(morgan('dev'))

app.get('/', function(req, res) {
    // in some file that is in the root directory of our application... how about app.js?
    var locals = {
        title: 'An Example',
        people: [
            { name: 'Gandalf'},
            { name: 'Frodo' },
            { name: 'Hermione'}
        ]
    };
    nunjucks.configure('views', {noCache: true});
    nunjucks.render('index.html', locals, function (err, output) {
        console.log(output);
        res.send(output)
    });
    
})

app.get('/news', function(req, res) {
    res.send("Rob says hi!")
})

app.listen(3000, function(){
    console.log("Server listening...")
});
