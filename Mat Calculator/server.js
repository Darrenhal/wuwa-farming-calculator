const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const directoryPath = path.join(__dirname, 'ui'); // Ändern Sie dies auf Ihr Hauptverzeichnis

const dynloader = require('./public/js/dynloader.js');

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

  fs.readdir('./public/images/ressources', (err, files) =>  {

    if(err) {
      res.status(500).send('sorry, out of order');
    }

    const fileStructure = [];


    function throughDirectory(directory) {
      fs.readdirSync(directory).forEach(file => {
        const absolute = path.join(directory, file);
        if(fs.statSync(absolute).isDirectory()) {
          return throughDirectory(absolute);
        } else {
          return fileStructure.push(absolute);
        }
      })
    }

    throughDirectory(ressourcePath);

    const imageFiles = fileStructure.filter(file => {
      return /\.(jpg|jpeg|png|gif|webp)$/.test(file);
    });
    
    res.json(imageFiles);

  })
});


app.use('/', dynloader);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});