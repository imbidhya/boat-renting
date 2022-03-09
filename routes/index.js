// import fetch from "node-fetch";
var express = require('express');
var router = express.Router();
var weather = require('./weather');
const fetch = require('node-fetch')
// import weather from './weather';

/* GET home page. */
router.get('/', function(req, res, next) {
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=28.2096&lon=83.9856&appid=780a4551ff3e6ac4892ab54ec1e701ec&units=metric`)
  .then(response => {
    console.log("response yo ho",response.json())
    // return response.json()
  }).then(data => {
    console.log("data",data)
  })
  // res.render('index', { title: 'Express' }); 
  // res.render('weather', weather);
});

// router.get('/weather', function(req , res , next));
module.exports = router;
