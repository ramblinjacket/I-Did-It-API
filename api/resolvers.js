// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

export default {
	Query: { books: () => books },

  Mutation: {
    addBook: (root, args) => {
      const newBook = { author: args.author, title: args.title };
      books.push(newBook);
      return newBook;
    },
  },
}