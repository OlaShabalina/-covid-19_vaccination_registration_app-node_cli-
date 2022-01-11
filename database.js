require("dotenv").config();

// Loading and initializing the library:
const pgp = require('pg-promise')();

// db connection details separate for production and dev mode
const cn = {
connectionString: process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB}`,
ssl: process.env.NODE_ENV === 'production' ? {rejectUnauthorized: false} : false
}


// Creating a new database instance from the connection details:
const db = pgp(cn);

// Exporting the database object for shared use:
module.exports = db;
