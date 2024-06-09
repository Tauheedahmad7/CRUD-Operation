var express = require('express');
var router = express.Router();

const userModel = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// create Route
router.post('/create',async function(req, res, next) {
  // res.render('create');
  res.send('User Created')

  const newUser = await userModel.create({
    name:req.body.name,
    username:req.body.username,
    password:req.body.password
  })
  console.log(newUser);
});

// Read Route
router.get('/readuser',async function(req, res, next) {
  const read =await userModel.find()
  res.send(read)


  /*
    // read by particular value
    const read = await userModel.find({
      name:'Tauheed'
    })
    res.send(read)

  */
});

// Update Route
router.get('/updateuser',async function(req, res, next) {
   await userModel.findOneAndUpdate(
   {username:'mashira_fatma3'},
   {name:'Mashira Siddique'}
   )
  //  console.log(update);
   res.send('User Updated')
});


// Delete Route
router.get('/deleteuser',async function(req, res, next) {
  await userModel.findOneAndDelete(
    {name:'Mashira Siddique'}
  )
  res.send('User Deleted')
});

module.exports = router;
