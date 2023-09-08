const books = require('../../books.json');

const allBooks = books.books;

const resolver = {
  Query: {
    getBookByAuthor: (_, { author }) => {
      return allBooks.filter((val) => val.author === author);
    },
  },
};

module.exports = {
  resolver,
};
