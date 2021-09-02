import React from "react";

const Book = ( { title, author} ) => {
  return (
    <div style={{margin: "6px", border: "6px solid teal"}}>
    <h1> {title} </h1>
    <h2> By: {author} </h2>
    </div>
  );
};

export default Book;