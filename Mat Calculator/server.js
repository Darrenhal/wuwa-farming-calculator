const express = require('express');
const fs = require('fs');
const path = require('path');
require('dotenv').config();


const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const indexRoute = require('./routes/index');
app.use('/', indexRoute);

const ressourceRoute = require('./routes/ressources');
app.use('/ressources', ressourceRoute);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const inventoryBaseline = require('./routes/inventory');
app.use('/inventoryBaseline', inventoryBaseline);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});