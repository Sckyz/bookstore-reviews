const context = require("../../../context");

module.exports = {
  Query: {
    showReviews: async (_, __, ___) => {
      return await context("reviews");
    },
    getReviewByTitle: async (_, { title }, ___) => {
      return await context("reviews").select("*").where({ title });
    },
    getReviewByAuthor: async (_, { author }, ___) => {
      return await context("reviews").select("*").where({ author });
    },
    getReviewByYear: async (_, { dateOfRelease }, ___) => {
      return await context("reviews").select("*").where({ dateOfRelease });
    },
    getReviewByBook: async (_, { book }, ___) => {
      return await context("reviews").select("*").where({ book });
    },
  },
};
