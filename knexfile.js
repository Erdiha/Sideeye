import { knex } from "knex";

const config = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  migrations: {
    // Specify migration configurations here
  },
};

export const db = knex(config);
