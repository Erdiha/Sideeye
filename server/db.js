const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Karap..1988",
  host: "localhost",
  post: "5432",
  database: "sideeye",
});

module.exports = pool;
