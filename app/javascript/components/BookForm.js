import React, {useState} from "react";

const BookForm = (props) => {
  const [bookTitle, setBookTitle] = useState(props.title ? props.title : "");
  const [bookAuthor, setBookAuthor] = useState(props.author ? props.author : "");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.id) {
      props.updateBook({
        id: props.id,
        title: bookTitle,
        author: bookAuthor});
    } else {
      props.addBookProp({
      title: bookTitle,
      author: bookAuthor});
    };
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

      <button type="submit">{props.id ? "Update" : "Add"}</button>
    </form>
    </div>
    );
  };

export default BookForm;