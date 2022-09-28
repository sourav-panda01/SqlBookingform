const User = require('../models/user');

exports.getUser = (req, res, next) => {
  User.findAll()
  .then(user => {
    console.log(user)
    console.log("Hello your products are",user)
    res.status(200).json({data:user})
  })
  .catch(err=>console.log(err));
};

exports.postUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number;
  User.create({
    number: number,
    email: email,
    name: name
 })    .then(result => {
       console.log(result);
      console.log('Created user');
      res.json("user created")
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
};