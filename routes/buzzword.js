const express = require('express');
const router = express.Router();

let buzzwords = [];

router.route('/')
  .get( (req, res) => {
    res.send({"buzzwords": buzzwords.map(function(x){return x.buzzWord;})});
  })

  .post((req, res) => {
    if(buzzwords.map(function(x){return x.buzzWord;}).indexOf(req.body.buzz) === -1){
      buzzwords.push({"buzzWord": req.body.buzz, "points": Number(req.body.points) , "heard": false, "newScore": 0});
      res.send({"success": true});
    } else {
      res.send({"success": false});
    }
  })

  .put(function(req, res) {
    if(buzzwords.map(function(x){return x.buzzWord;}).indexOf(req.body.buzz) === -1){
      res.send({"success": false});
    } else {
      buzzwords[buzzwords.map(function(x){return x.buzzWord;}).indexOf(req.body.buzz)].newScore += buzzwords[buzzwords.map(function(x){return x.buzzWord;}).indexOf(req.body.buzz)].points;
      buzzwords[buzzwords.map(function(x){return x.buzzWord;}).indexOf(req.body.buzz)].heard = true;
      res.send({"success": true, "New score": buzzwords[buzzwords.map(function(x){return x.buzzWord;}).indexOf(req.body.buzz)].newScore });
    }
  })

  .delete(function(req, res) {
    if(buzzwords.map(function(x){return x.buzzWord;}).indexOf(req.body.buzz) === -1){
      res.send({"success": false});
    } else {
      buzzwords.splice(buzzwords.map(function(x){return x.buzzWord;}).indexOf(req.body.buzz),1);
      res.send({"success": true});
    }
  });

router.route('/reset')
  .post((req, res) => {
    buzzwords.forEach(function(x){ x.newScore = 0; });
    res.send({"success": true});
  });


module.exports = router;
