import React, {useState} from "react";

const BookForm = (props) => {
  const [title, setTitle] = useState(props.title ? props.title : "");
  const [author, setAuthor] = useState(props.author ? props.author : "");

  
  const handleSubmit = (e) => {
    e.preventDefault()
    };
  
  
  return(
    <div style={{margin:"6px", border:"6px solid purple"}}>
    <h3>Add Book to Library</h3>
    <form onSubmit={handleSubmit}>
      <p>Book Title:</p>
      <input value={title}
      onChange={(e) => {
        setTitle(e.target.value);}} />

      <p>Book Author:</p>
      <input value={author} 
      onChange={(e) => {
        setAuthor(e.target.value);}}/>

      <button type="submit"> Add </button>
    </form>
    </div>
  );
};


export default BookForm;