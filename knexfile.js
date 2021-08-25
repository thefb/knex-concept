// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'test-db',
      user: 'postgres',
      password: '001122'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }

};
