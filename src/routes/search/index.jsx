import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { executeSearch, setModalMessage } from '../../redux/actions/actions';
import Modal from '../../components/modal/modal';
import { createListOfBooks } from '../../utils';
import './style.css';

function Search({executeSearch, modalMessage, results, setModalMessage}) {

  const [fieldData, setFieldData] = useState({
    author: null,
    title: null
  });
  const [listOfBooks, setListOfBooks] = useState('');
  

  useEffect(() => {
    const listOfBooks = createListOfBooks(results);
    setListOfBooks(listOfBooks)
  }, [results])

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

  const handleSubmit = e => {
    e.preventDefault();
    executeSearch(fieldData.author, fieldData.title);
  }

  const handleClick = e => {
    const bookId = e.target.getAttribute('data-bookid');
    fetch(`http://openlibrary.org${bookId}.json`)
    .then(result => result.json())
    .then(data => setModalMessage(data.description))
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
      {results && results.length > 0 && (
        <div className="results">
          <h2>Search Results</h2>
          <ul className="results__books" onClick={handleClick}>{listOfBooks}</ul>
        </div>
      )}
      <Outlet />
    </>
  );
}

const mapDispatchToProps = {
  executeSearch,
  setModalMessage
}

const mapStateToProps = state => ({
  modalMessage: state.modal.message,
  results: state.search.results
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
