var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/addData",function(req,res,next){  //it get the data from addtodo list
  res.render("bookprocess");
});

module.exports = router;
