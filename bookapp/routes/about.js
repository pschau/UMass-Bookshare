var express         = require("express")
  , http            = require('http')
  , fs              = require('fs')
  , url             = require('url')
  , bodyParser      = require('body-parser')
  ;

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('about');
});

module.exports = router;

