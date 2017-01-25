var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST


//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
var moviesSchema = mongoose.Schema({
  movieID: String,
  movieName: String,
  movieType: String,
  movieYear: Number,
  movieDuration : Number
 });

router.get('/movies', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Movie.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/movies/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Movie.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/movies', function(req, res){
  console.log(req.body);
  var id= req.body.movieID;
  var Name = req.body.movieName;
  var Type =  req.body.movieType;
  var Year =  req.body.movieYear;
  var Duration =  req.body.movieDuration;
  var movie = new Movie({

    movieID: id,
    movieName: Name,
    movieType: Type,
    movieYear: Year,
    movieDuration : Duration
  });

  movie.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/movies/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Movie.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/movies/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Movie.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
