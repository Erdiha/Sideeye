// import { Pool } from "pg";

// const pool = new Pool({
//   user: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   host: process.env.POSTGRES_HOST,
//   port: process.env.POSTGRES_PORT, // Corrected typo here
//   database: process.env.POSTGRES_DB,
// });

// const query = async (text, params) => {
//   const client = await pool.connect();
//   try {
//     const res = await client.query(text, params);
//     return res;
//   } finally {
//     client.release();
//   }
// };

// export { query };
