const Pool = require("pg").Pool;
const { db, user, password } = require("./config");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

module.exports = pool;
//client\src\Components\Headers\Headers.js
