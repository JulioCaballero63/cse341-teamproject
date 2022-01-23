// //TA03 PLACEHOLDER
// const fs = require('fs');
// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.render('pages/ta03', {
//     title: 'Team Activity 03',
//     path: '/ta03', // For pug, EJS
//     activeTA03: true, // For HBS
//     contentCSS: true, // For HBS
//   });
// });

const fs = require('fs');
const ejs = require('ejs');

const express = require('express');
var jsonEngine = require('./jsonEngine.js.js');
var app = express();

// web server setup
app
  .set('port', process.env.PORT || 5000)
  .use(express.static(__dirname + '/public'))
  .set('views', __dirname + '/views')
  .set('view engine', 'ejs')
  .get('/', jsonEngine.processJson)
  .listen(app.get('port'), function () {
    console.log('Listening on port: ' + app.get('port'));
  });

// module.exports = router;
