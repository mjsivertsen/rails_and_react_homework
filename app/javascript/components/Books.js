import React from "react";
import Book from "./Book";

const Books = ( {books, getBooks, deleteBook} ) => {
  return (
    <div style={{margin: "6px", border: "6px solid #25523B"}}>
      <h1> Some Books </h1>
      {getBooks}
      {books.map((book) => (
      <Book key={book.id} deleteBook={deleteBook} {...book} /> ))}
    </div>
  );
};

export default Books;
