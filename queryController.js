const express = require('express');
const router = express.Router();

const { queryData } = require('./queryModel');

var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
  queryData.find((err, docs) => {
    if(!err) {
      res.send(docs);
    } else {
      console.log(err);
    }
  })
})

router.post('/', (req, res) => {
    var data = new queryData({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
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
      queryData.findByIdAndDelete(req.params.id, (err, docs) => {
        if(!err) {
          res.json({msg: 'Data deleted successfully'});
        } else {
          console.log(err);
        }
      })
    }
  })

module.exports = router;