export const createListOfBooks = books => {
  const listOfBooks = books && books.length > 0 && books.map((book, index) => {
    return <li data-bookid={book.key} key={index}>{book.title}</li>;
  });
  return listOfBooks;
}
