require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DB,
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations',
    }
  },
};