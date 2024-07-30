const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const directoryPath = path.join(__dirname, 'ui'); // Ändern Sie dies auf Ihr Hauptverzeichnis

app.use(express.static(directoryPath));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    fs.readFile('./ui/conversion.html', 'utf-8', (err, html) =>  {

      if(err) {
        res.status(500).send('sorry, out of order');
      }

      res.send(html);

    })
});

app.get('/ressources', (req, res) => {
  const ressourcePath = './public/images/ressources';

  fs.readFile('./public/data/items.json', 'utf-8', (err, file) => {

    if(err) {
      res.status(500).send('Ressource API out of order!');
    }

    let f = JSON.parse(file);
    
    res.send(f);

  });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});