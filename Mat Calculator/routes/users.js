const express = require('express');
const router = express.Router();
const db = require('../config/dbconfig');
const hash = require('../utils/hash');
// import saltHashPassword from '../utils/hash.js';

router
  .get('/:username/:pwd', (req, res) => {
    const username = req.params.username;
    const pwd = req.params.pwd;
    db.query(`Select "Password", "Salt" from "Users" where "Username"='${username}'`)
      .then((data) => {
        console.log(data[0]);
        
        if(data[0] !== undefined) {
          const pwdFromDB = data[0]['Password'];
          const salt = data[0]['Salt'];
          
          const hashedPwd = hash.saltHashPassword(pwd, salt);
          if(hashedPwd === pwdFromDB) {
            res.status(200).send(data);
          } else {
            res.status(401).send();
          }
        } else {
          res.status(404).send();
        }
      }).catch((error) => {
        console.log("ERROR:" + error);
        
      })
  })
  .post('/:username/:pwd', (req, res) => {
    const username = req.params.username;
    const pwd = req.params.pwd;
    db.query(`Select * FROM "Users" WHERE "Username"='${username}'`)
      .then((data) => {
        if(data[0] !== undefined) {
          res.status(409).send({"message": "User already exists!"});
        } else {
          db.query(`INSERT INTO "Users" () VALUES ()`)
          res.status(200).send();
        }
      })
  })
  .put('/:username/:pwd/:sessionToken', (req, res) => {

  })
  .delete('/:username/:pwd/:sessionToken', (req, res) => {

  });


module.exports = router;