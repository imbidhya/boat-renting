var express = require('express');
// const booking = require('../model/booking');
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

router.get("/Save-data",function(req,res,next){  //it get the data from addtodo list
  res.render("bookafter");
});

router.post("/save-booking", function(req,res,next){   //it save the data from the form
  console.log("bodyyyyyyyyyyyyy 1234", req.body); 

  const booking=new Booking({
    name:req.body.name,
    contact : req.body.contact, 
    ticketNo:req.body.ticketNo,
    checkIn:req.body.checkIn,
    checkOut:req.body.checkOut
  });

  // console.log('booooooooooooooooking', booking.name);
  // const savedbooking = await booking.save();
  // console.log("your booking is",savedbooking.name,savedbooking._id);
  // res.redirect(`/bookingInfo/`+ savedbooking._id);

  const promise = booking.save();
  promise.then((booking)=>{
    console.log("your booking is",booking,booking._id);
    // res.render("display",{booking});
    // booking.push({...req.body,id: booking._id})
    res.redirect(`/bookingInfo/`+booking._id);
  })
});

router.get("/bookingInfo/:id", async function(req,res,next){  //it get the data from addtodo list
  const bookingDetails = await Booking.findOne({_id:req.params.id});
  console.log("bookingDetails",bookingDetails)
  res.render("display",{bookingDetails:bookingDetails});

});

router.post('/booking-Info/:id',async function(req,res,next){
  await booking.findOne({_id:req.params.id},{
    $set:{
      name: req.body.name,
      contact: req.body.contact,
      ticket: req.body.ticket,
      startTime:req.body.startTime,
      endTime: req.body.endTime
    }
  })
  res.redirect(`/bookingInfo/`+booking._id);
})

module.exports = router;
