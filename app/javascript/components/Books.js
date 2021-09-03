import React from "react";
import Book from "./Book";

const Books = ( {books, updateBook, deleteBook} ) => {
  return (
    <div style={{margin: "6px", border: "6px solid #25523B"}}>
      <h1> Some Books </h1>
      {books.map((book) => (
      <Book key={book.id} updateBook={updateBook} deleteBook={deleteBook} {...book} /> ))}
    </div>
  );

};

export default Books;
