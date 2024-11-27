const pgp = require('pg-promise')();

const db = pgp(`postgresql://${process.env.dbUsername}:${process.env.dbPassword}@${process.env.dbHost}:${process.env.dbPort}/${process.env.dbName}`);

module.exports = db;