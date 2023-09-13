const knex = require("../../../database/index");

module.exports = {
  Mutation: {
    addBook: async (_, { data }, ___) => {
      return await knex("books").insert(data).returning("*");
    },
    updateBook: async (_, { id, data }, ___) => {
      return await knex("books").where({ id }).update(data);
    },
    deleteBook: async (_, { id }, ___) => {
      return await knex("books").where({ id }).delete() ;
    },
  },
};
