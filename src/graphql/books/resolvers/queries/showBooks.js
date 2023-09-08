const books = require("../../books.json");

const allBooks = books.books;

const resolver = {
  Query: {
    showBooks: () => allBooks,
  },
};

module.exports = {
  resolver,
};
