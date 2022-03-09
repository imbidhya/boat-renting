var express = require('express');
const booking = require('../model/booking');
var router = express.Router();
var Booking = require('../model/booking');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get("/gotobookingpage",function(req,res,next){  //it get the data from addtodo list
  res.render("bookafter");
});

router.get("/Save-data",function(req,res,next){  //it get the data from addtodo list
  res.render("bookafter");
});
router.post("/save-booking",function(req,res,next){   //it save the data from the form
  // console.log(req.body);  
  const booking=new Booking({
    name:req.body.name,
    contact : req.body.contact, 
    ticketNo:req.body.ticketNo,
    checkIn:req.body.checkIn,
    checkOut:req.body.checkOut
  });

  const promise = booking.save();
  promise.then((booking)=>{
    console.log("your booking is",booking);
    res.redirect('/gotobookingpage');
  })
});

module.exports = router;
