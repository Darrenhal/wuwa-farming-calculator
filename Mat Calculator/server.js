const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const directoryPath = path.join(__dirname, 'ui'); // Ändern Sie dies auf Ihr Hauptverzeichnis

app.get('/', (req, res) => {
    fs.readFile('./ui/conversion.html', 'utf-8', (err, html) =>  {

      if(err) {
        response.status(500).send('sorry, out of order');
      }

      res.send(html);

    })
});

app.use(express.static(directoryPath));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});