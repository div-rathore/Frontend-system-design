const data = {
  authors: [
    { id: "1", name: "Divyanshu", bookIds: ["101", "102"] },
    { id: "2", name: "Aman", bookIds: ["103"] },
  ],
  books: [
    { id: "101", title: "JS Tales", publishedYear: 2000, authorId: "1" },
    { id: "102", title: "Lifelogy", publishedYear: 2010, authorId: "1" },
    {
      id: "103",
      title: "Mysqyque Sadness",
      publishedYear: 2020,
      authorId: "2",
    },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return data.authors.find(
        (authorDetail) => authorDetail.id === parent.authorId
      );
    },
  },
  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter((book) => parent.bookIds.includes(book.id));
    },
  },
  Query: {
    authors: () => {
      return data.authors;
    },
    books: () => {
      return data.books;
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
        const newBook = {...args, id:data.books.length+1}
        data.books.push(newBook)
      return newBook;
    },
  },
};
