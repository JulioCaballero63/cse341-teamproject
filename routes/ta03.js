// //TA03 PLACEHOLDER
const http = require("https");
const fs = require('fs');
const express = require('express');
const { response } = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
  const url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';
  http.get(url, function (response) {
    let body = '';
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function () {
      const jsonResponse = JSON.parse(body);
      const data = jsonResponse
      res.render('pages/ta03', {
        data,
        title: 'Team Activity 03',
        path: '/ta03'
      });
    });
  }); response.on('error', function (e) {
    console.log("Got an error: ", e);
  });
});

module.exports = router;
