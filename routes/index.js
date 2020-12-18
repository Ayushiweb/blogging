var express = require('express');
const users = require('./users');
var router = express.Router();
var User = require('./users');

/* GET home page. */
router.get('/', function(req, res){
  User.find()
  .then(function(alldata){
    res.render('index',{foundpost:alldata});
  })
});

router.get('/write', function(req, res){
  res.render('write');
});

router.post('/written',function(req,res){
User.create({
  post:req.body.post
})
.then(function(readdata){
  res.redirect('/');
})
});

router.get('/updatekaro/:idname', function(req,res){
 User.findOne({_id:req.params.idname})
 .then(function(oldpost){
   res.render('update',{oldpost:oldpost})
 })
});

router.post('/update/:idkaname', function(req,res){
  User.findOneAndUpdate({_id:req.params.idkaname},{post:req.body.post})
  .then(function(updateddata){
    res.redirect('/');
  })
 });

 router.get('/delete/:iddelete', function(req,res){
  User.findOneAndDelete({_id:req.params.iddelete})
  .then(function(deleted){
    res.redirect('/');
  })
 });
 



module.exports = router;
