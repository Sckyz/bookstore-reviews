const knex = require("../../../database/index");

module.exports = {
  Query: {
    showReviews: async (_, __, ___) => {
      return await knex("reviews");
    },
    getReviewByTitle: async (_, { title }, ___) => {
      return await knex("reviews").select("*").where({ title });
    },
    getReviewByAuthor: async (_, { author }, ___) => {
      return await knex("reviews").select("*").where({ author });
    },
    getReviewByYear: async (_, { dateOfRelease }, ___) => {
      return await knex("reviews").select("*").where({ dateOfRelease });
    },
    getReviewByBook: async (_, { book }, ___) => {
      return await knex("reviews").select("*").where({ book });
    },
  },
};
