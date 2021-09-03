import React, {useState} from "react";
import BookForm from "./BookForm";

const Book = (props) => {
  const { id, title, author, updateBook, deleteBook} = props;
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{margin: "6px", border: "6px solid teal"}}>
    <h1> {title} </h1>
    <h2> By: {author} </h2>
  
    <button onClick={() => setShowForm(!showForm)}>
      {showForm ? "Nevermind": "Update Book"}
    </button>
    {showForm && <BookForm id={id} title={title} author={author} updateBook={updateBook}/>}

    <button onClick={() => deleteBook(id)}>Delete Book</button>
    
    </div>
  );
};

export default Book;