const express = require( 'express' );
const morgan = require('morgan');
const app = express(); // creates an instance of an express application

app.use(function(req, res, next) {
    console.log(req.method)
    console.log(req.path)
    next();
})
app.use(morgan)

app.get('/', function(req, res) {
    res.send("You made it, says Gabi!")
})

app.get('/news', function(req, res) {
    res.send("Rob says hi!")
})

app.listen(3000, function(){
    console.log("Server listening...")
});
