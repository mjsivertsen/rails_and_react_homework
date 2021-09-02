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
      alert("FUCK!")
    }
  };

  // const addBook = async () => {
  //   try {

  //   }
  // };



  return (
    <div>
    <h1> App </h1>
    {getBooks}
    <button onClick={() => setShowForm(!showForm)}>
      {!showForm ? "Add Book" : "Nevermind"}
    </button>
    {showForm && <BookForm />}


{/* can't get getBooks to work with the toggle */}
    
    
    <button onClick={getBooks}>   
      {!showBooks ? "Show Books" : "Hide Books"}
    </button>
    {showBooks && <Books getBooks={getBooks} books={books}/>}
    </div>
  );
};

export default App;