var express = require('express');
var router = express.Router();

var contestants = [];

var Submission = function(githubName, githubURL, githubImage){
  this.githubName = githubName;
  this.githubURL = githubURL;
  this.githubImage = githubImage;
};


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', function(req,res,next){
  var newUser = new Submission(req.body.name, req.body.url, req.body.avi);
  if (contestants.length > 7)
    res.redirect('/contest');
  else {
    contestants.push(newUser);
      res.redirect('/addUser');
}
});

router.get('/adduser', function(req, res, next) {
  res.render('addUser', {title: "Add User"});
});

router.get('/contest', function(req, res, next) {
  res.render('contest', {title: "Github Contest"});
});

module.exports = router;
