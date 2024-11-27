const express = require('express');
const router = express.Router();
const db = require('../config/dbconfig');

router.get('/:username', (req, res) => {
  let username = req.params.username;
  db.query(`Select "Salt" from "Users" where "Username"='${username}'`)
    .then((data) => {
      if(data[0] !== undefined) {
        res.status(200).send(data);
      } else {
        res.status(404).send();
      }
    }).catch((error) => {
      console.log("ERROR:" + error);
      
    })
});


module.exports = router;