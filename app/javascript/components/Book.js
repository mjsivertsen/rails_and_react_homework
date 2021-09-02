import React from "react";

const Book = ( { id, title, author, deleteBook} ) => {
  return (
    <div style={{margin: "6px", border: "6px solid teal"}}>
    <h1> {title} </h1>
    <h2> By: {author} </h2>
    
    <button onClick={() => deleteBook(id)}>Delete Book</button>
    
    </div>
  );
};

export default Book;