import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { executeSearch } from '../../redux/actions/addNewFriend';
import Modal from '../../components/modal/modal';
import './style.css';

function Search({executeSearch}) {

  const [fieldData, setFieldData] = useState({
    author: null,
    title: null
  });

  // TODO refactor this later since we have two responses
  const [response, setReponse] = useState(null);
  const [bookDescription, setBookDescription] = useState(null);

  const handleChange = e => {
    const value = e.target.value;
    const type = e.target.id;

    const fieldDataCopy = Object.assign({}, fieldData, {
      ...fieldData
    });

    if (type === 'author') {
      fieldDataCopy.author = value;
    } else {
      fieldDataCopy.title = value;
    }
    setFieldData(fieldDataCopy);
  };

  const renderResponse = books => {
    const listOfBooks = books.map((book, index) => {
      return <li data-bookId={book.key} key={index}>{book.title}</li>;
    });
    setReponse(listOfBooks);
  }

  const handleSubmit = e => {
    e.preventDefault();
    // fetch(`http://openlibrary.org/search.json?author=${fieldData.author}&limit=10`)
    // .then(result => result.json())
    // .then(data => renderResponse(data.docs));
    executeSearch(fieldData.author, fieldData.title);
  }

  const handleClick = e => {
    const bookId = e.target.getAttribute('data-bookId');
    fetch(`http://openlibrary.org${bookId}.json`)
    .then(result => result.json())
    .then(data => setBookDescription(data.description));
  }

  const closeModal = () => {
    setBookDescription(null);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
          <label htmlFor="author">Author</label>
          <input id="author" onChange={handleChange} type="text" />
        </div>
        <div className="form__field">
          <label htmlFor="title">Title</label>
          <input id="title" onChange={handleChange} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div className="results">
          <h2>Search Results</h2>
          <ul className="results__books" onClick={handleClick}>{response}</ul>
        </div>
      )}
      {bookDescription && (
        <Modal description={bookDescription} closeModal={closeModal} />
      )}
      <Outlet />
    </>
  );
}

const mapDispatchToProps = {
  executeSearch
}

export default connect(null, mapDispatchToProps)(Search);
