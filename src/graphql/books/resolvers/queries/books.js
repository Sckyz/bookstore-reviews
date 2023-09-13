const knex = require("../../../../database/index");

module.exports = {
  Query: {
    showBooks: async (_, __, ___) => {
      return await knex("books");
    },
    getBookByTitle: async (_, { title }, ___) => {
      return await knex("books").select("*").where({ title });
    },
    getBookByAuthor: async (_, { author }, ___) => {
      return await knex("books").select("*").where({ author });
    },
    getBookByYear: async (_, { dateOfRelease }, ___) => {
      return await knex("books").select("*").where({ dateOfRelease });
    },
  },
};
