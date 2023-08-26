import { useEffect, useContext, useState } from 'react';
import BookCreate from './BookCreate';
import BookList from './BookList';
import BooksContext from './context/books';

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className='app'>
      <h1>Here is my favorite book list!<br /> If you have one too, please add it</h1>
      <div className='tips'>
        space = new line<br />
        image = open image on google in new tab and copy link
      </div>
      <BookCreate />
      <BookList />
    </div>
  );
}

export default App;
