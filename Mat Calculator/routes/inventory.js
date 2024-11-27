const express = require('express');
const router = express.Router();
const db = require('../config/dbconfig');

router.get('/', (req, res) => {
  db.query('Select * from "Users"')
    .then((data) => {
      console.log('DATA:', data);
    })
    .catch((error) => {
      console.log('ERROR:', error);
    });
});

module.exports = router;