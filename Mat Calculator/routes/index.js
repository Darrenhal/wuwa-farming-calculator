const express = require('express');
const router = express.Router();

const fs = require('fs');


router.get('/', (req, res) => {
  fs.readFile('./public/conversion.html', 'utf-8', (err, html) =>  {

    if(err) {
      res.status(500).send('sorry, out of order');
    }

    res.send(html);

  })
});

module.exports = router;