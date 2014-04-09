var express = require('express');

var LISTEN_PORT = 8296;

/* Create an express application. `app` is a common variable name used in many express.js tutorials */
var app = express();

/**
 * The bodyParser automatically handles the parsing of JSON requests for us. Don't forget to include it
 * if you expect to process JSON data in your HTTP requests.
 */
app.use(express.bodyParser());

/*
 * app.post() defines an handler for HTTP GET requests. You can peek into the request data inside req.body.
 */
app.post('/chat', function (req, res) {
    // Add the information received from the client as a new high score
    if (req.body.message) {
        console.log('message received: "' + req.body.message + '"');
    }
});

/*
 * app.listen() starts the HTTP server on the given TCP port.
 */
app.listen(LISTEN_PORT, function () {
    console.log('Listening on ' + LISTEN_PORT + '...');
});