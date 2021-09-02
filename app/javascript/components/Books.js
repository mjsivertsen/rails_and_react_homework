import React from "react";
import Book from "./Book";

const Books = ( {books, getBooks} ) => {
  return (
    <div style={{margin: "6px", border: "6px solid #25523B"}}>
      <h1> Some Books </h1>
      {getBooks}
      {books.map((book) => (
      <Book key={book.id} {...book} /> ))}
    </div>
  );

};

export default Books;
