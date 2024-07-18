const express = require('express');
const router = express.Router();

router.get('/inventory.html', function(req, res) {
  setTimeout(function() {
    res.json({data: 'some data'})
  }, 2000);
});

module.exports = router;