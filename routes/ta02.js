//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

// const users = [];
const userArray = ['Jack', 'Jill', 'Brian'];

router.post('/addUser', (req, res, next) => {
  // users.push({ name: req.body.newUser });
  const newUser = req.body.username;

  userArray.push(newUser);
  res.redirect('/ta02');
});


router.post('/removeUser', (req, res, next) => {
  const remUser = req.body.remUser;

  // Splice method removes from a const array
  const index = userArray.indexOf(remUser);
  if (index !== -1) {
    userArray.splice(index, 1);
  }

  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: userArray,
    path: '/ta02',
  });
});

module.exports = router;
// exports.routes = router;
// exports.users = users;
