var path = require('path')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var Bear = require('../models/bear');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 3000;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

router.route('/bears')

// create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function(req, res) {

    var bear = new Bear();      // create a new instance of the Bear model
    bear.name = req.body.name;  // set the bears name (comes from the request)

    // save the bear and check for errors
    bear.save(function(err) {
      if (err)
        res.send(err);

      res.redirect('/success')
      //res.json({ message: 'Bear created!' });
    });

  })

  .get(function(req, res) {
    Bear.find(function(err, bears) {
      if (err)
        res.send(err);

      res.json(bears);
    });
  });

router.route('/bears/:bear_id')

// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
  .get(function(req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
      if (err)
        res.send(err);
      res.json(bear);
    });
  })

  // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
  .put(function(req, res) {

    // use our bear model to find the bear we want
    Bear.findById(req.params.bear_id, function(err, bear) {

      if (err)
        res.send(err);

      bear.name = req.body.name;  // update the bears info

      // save the bear
      bear.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Bear updated!' });
      });

    });
  })

  // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
  .delete(function(req, res) {
    Bear.remove({
      _id: req.params.bear_id
    }, function(err, bear) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:test1234@ds153239.mlab.com:53239/api'); // connect to our database

app.use('/', express.static(path.resolve('html')))
app.use('/success', express.static(path.resolve('html/success.html')))
app.use('/about', express.static(path.resolve('html/about.html')))
