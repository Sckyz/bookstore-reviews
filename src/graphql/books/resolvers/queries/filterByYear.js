const books = require("../../books.json");

const allBooks = books.books;

const resolver = {
  Query: {
    getBookByYear: (_, { dateRelease }) => {
      return allBooks.filter((val) => val.dateRelease === dateRelease);
    },
  },
};

module.exports = {
  resolver,
};
