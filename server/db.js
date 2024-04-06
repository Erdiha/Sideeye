const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.NEXT_PUBLIC_POSTGRES_USER,
  password: process.env.NEXT_PUBLIC_POSTGRES_PASSWORD,
  host: process.env.NEXT_PUBLIC_POSTGRES_HOST,
  post: NEXT_PUBLIC_POSTGRES_PORT,
  database: process.env.NEXT_PUBLIC_POSTGRES_DB,
});

const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } finally {
    client.release();
  }
};

module.exports = {
  query,
};
