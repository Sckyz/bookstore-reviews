const books = require('../../books.json');

const allBooks = books.books;

const resolver = {
  Query: {
    getBookByTitle: (_, { title }) => {
      return allBooks.filter((val) => val.title === title);
    },
  },
};

module.exports = {
  resolver,
};
