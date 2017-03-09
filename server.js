var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beers');
var Beer = require("./public/BeerModel");

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function(req, res, next) {
  res.send('Testing Server')
})

app.get('/beers', function (req, res, next) {
  Beer.find(function (error, beers) {
    if (error) {
      console.error(error)
      return next(error);
    } else {
      res.send(beers);
    }
  });
});

app.post('/beers', function(req, res, next) {
  Beer.create(req.body, function(err, beer) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.json(beer);
    }
  });
});

app.delete('/beers/:id', function(req, res, next) {
  Beer. findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.send("Beer Deleted");
    }
  });
});


/*app.get('/beers', function(req, res, next) {
  res.json({
    beers: [{
      name: '512 IPA',
      style: 'IPA',
      image_url: 'http://bit.ly/1XtmB4d',
      abv: 5
    }, {
      name: '512 Pecan Porter',
      style: 'Porter',
      image_url: 'http://bit.ly/1Vk5xj4',
      abv: 4
    }]
  });
});
*/
app.listen('8000', function() {
  console.log("yo yo yo, on 8000 bro");
});