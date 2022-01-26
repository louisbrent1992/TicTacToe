// Update with your config settings.
const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {

  development: {
    client: 'postgresql',
    connection: '',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      // tells Knex to store migration files in the migrations folder at src/db/migrations
      // CLI syntax for creating a new migration file is as follows:
      // npx knex migrate:make [migration_name]
      // CLI syntax for running latest migration files is as follows:
      // npx knex migrate:latest
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      // tells Knex to store seed files in the seeds folder at src/db/seeds
      // CLI syntax for creating a seed file is as follows:
      // npx knex seed: make seed_name
      // CLI syntax for executing seed files is as follows:
      // npx knex seed:run
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: 'postgresql',
    connection: '',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
