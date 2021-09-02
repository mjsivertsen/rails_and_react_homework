import React, {useState} from "react";

const BookForm = (props) => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBookProp({
      title: bookTitle,
      author: bookAuthor});
    };
  
  
  return(
    <div style={{margin:"6px", border:"6px solid purple"}}>
    <h3>Add Book to Library</h3>
    <form onSubmit={handleSubmit}>
      <p>Book Title:</p>
      <input value={bookTitle}
      onChange={(e) => {
        setBookTitle(e.target.value);}}/>

      <p>Book Author:</p>
      <input value={bookAuthor} 
      onChange={(e) => {
        setBookAuthor(e.target.value);}}/>

      <button type="submit"> Add </button>
    </form>
    </div>
  );
};


export default BookForm;