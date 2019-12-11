const express = require('express');
const router = express.Router();

const { roomsData } = require('./roomModel.js');

var ObjectId = require('mongoose').Types.ObjectId;

//Routes
router.get('/',(req,res) => {
  roomsData.find((err, docs) => {
    if(!err) {
      res.send(docs);
    } else {
      console.log(err);
      
    }
  });
});

router.post('/', (req, res) => {
  var data = new roomsData({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
    room: req.body.room
  });
  data.save((err, docs) => {
    if(!err) {
      res.send(docs);
    } else {
      console.log(err);
      
    }
  })
});

router.delete('/:id', (req, res) => {
  if(!ObjectId.isValid(req.params.id)) {
    res.send(`No Data found at id ${req.params.id}`);
  } else {
    roomsData.findByIdAndDelete(req.params.id, (err, docs) => {
      if(!err) {
        res.json({msg: 'Field deleted successfully'});
      } else {
        console.log(err);
      }
    });
  }
});



module.exports = router;