import { buildSchema } from "graphql";

const authors = [
  { id: 101, name: "Shakespeare" },
  { id: 102, name: "Daniel Defoe" },
  { id: 103, name: "Jean Paul Sartre" },
];

const books = [
  { id: 1, title: "Romeo and Juliet", price: 22.5, author: authors[0] },
  { id: 2, title: "Hamlet", price: 22.5, author: authors[0] },
  { id: 3, title: "Robinson Crusoe", price: 13.5, author: authors[1] },
  { id: 4, title: "The Storm", price: 15, author: authors[1] },
  { id: 5, title: "No Exit", price: 18.5, author: authors[2] },
  { id: 6, title: "Being and Nothingness", price: 45.5, author: authors[2] },
];

export const schema = buildSchema(`
    type Author{
    id: Int
    name: String}
    
    
    type Book{
    id: Int 
    title: String
    price: Float
    author: Author
    }
    
    type Query{
    books: [Book]
    authors: [Author]
    book(id: Int): Book
    }
    
    type Mutation{
    addBook(title: String, price: Float, author: String): Book
    deleteBook(id: Int): Book
    }
    
    `);

export const resolvers = {
  books: () => books,
  authors: () => authors,
  book: ({ id }) => books.find((book) => book.id === id),

  addBook: ({ title, price, author }) => {
    const newBook = {
      id: books.length + 1,
      title,
      price,
      author,
    };
    books.push(newBook);
    console.log(newBook, "newBook");
    console.log(books, "books");
    return newBook;
  },

  deleteBook: ({ id }) => {
    const book = books.find((book) => book.id === id);
    if (!book) {
      throw new Error("Book not found");
    }
    const index = books.indexOf(book);
    books.splice(index, 1);
    return book;
  },
};
