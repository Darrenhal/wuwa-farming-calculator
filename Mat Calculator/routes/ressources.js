const express = require('express');
const router = express.Router();

const fs = require('fs');


router.get('/', (req, res) => {
  fs.readFile('./public/data/items.json', 'utf-8', (err, file) => {

    if(err) {
      res.status(500).send('Ressource API out of order!');
    }

    let f = JSON.parse(file);
    
    res.send(f);

  });
});

module.exports = router;