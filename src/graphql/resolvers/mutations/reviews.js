const knex = require("../../../database/index");

module.exports = {
  Mutation: {
    createReview: async (_, { data }, ___) => {
      return await knex("reviews").insert(data).returning("*");
    },
    updateReview: async (_, { id, data }, ___) => {
      return await knex("reviews").where({ id }).update(data);
    },
    deleteReview: async (_, { id }, ___) => {
      return await knex("reviews").where({ id }).delete() ;
    },
  },
};
