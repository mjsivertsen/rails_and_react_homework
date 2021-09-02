import axios from "axios";
import React, { useState } from "react";
import Books from "./Books";
import BookForm from "./BookForm";


const App = () => {
const [books, setBooks] = useState([]);
const [showBooks, setShowBooks] = useState(false);
const [showForm, setShowForm] = useState (false);

  const getBooks = async () => {
    try {
      let res = await axios.get('/books');
      console.log(res.data)
      setBooks(res.data);
      setShowBooks(!showBooks)
    } catch(err){
      alert("oh crap that didn't work")
    }
  };

  const addBook = async (book) => {
    console.log(book);
    try {
      let res = await axios.post("/books", book);
      console.log(res);
      setBooks([res.data, ...books]);
    } catch (err) {
      alert("oh crap that didn't work!")
    }
  };

  const deleteBook = async (id) => {
    try{
    await axios.delete(`/books/${id}`);
    const sansBookBooks = books.filter((i) => i.id !==id);
    setBooks(sansBookBooks);
    } catch{
      console.log("HellFire!");
    }
  };


  return (
    <div>
    <h1> App </h1>
    {getBooks}
    <button onClick={() => setShowForm(!showForm)}>
      {!showForm ? "Add Book" : "Nevermind"}
    </button>
    {showForm && <BookForm addBookProp={addBook}/>}


{/* can't get getBooks to work with the toggle */}
    
    
    <button onClick={getBooks}>   
      {!showBooks ? "Show Books" : "Hide Books"}
    </button>
    {showBooks && <Books getBooks={getBooks} books={books} deleteBook={deleteBook}/>}
    </div>
  );
};

export default App;