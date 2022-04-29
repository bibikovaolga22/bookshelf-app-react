import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/homePage/HomePage';
import SearchPage from './components/searchPage/SearchPage';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

function App() {

  const [currentlyReadingBooks, setCurrentlyReading] = useState([]);
  const [wantToReadBooks, setWantToRead] = useState([]);
  const [readBooks, setRead] = useState([]);

  const [shelvedBooks, setShelvedBooks] = useState({});

  const CURRENTLY_READING_SHELF = 'currently-reading';
  const WANT_TO_READ_SHELF = 'want-to-read';
  const READ_SHELF = 'read';



  const putOnShelf = (currentBook, shelf) => {

    const newShelvedBooks = shelvedBooks;
    currentBook.shelf = shelf;
    newShelvedBooks[currentBook.id] = currentBook;
    setShelvedBooks(newShelvedBooks);
    updateBooks(CURRENTLY_READING_SHELF, setCurrentlyReading);
    updateBooks(WANT_TO_READ_SHELF, setWantToRead);
    updateBooks(READ_SHELF, setRead);
  }

  const updateBooks = (shelf, setBooks) => {
    let books = [];
    for (let id in shelvedBooks) {

      if (shelvedBooks[id].shelf === shelf) {
        books.push(shelvedBooks[id]);
      }
    }
    setBooks(books);
  }

  const handleCurrentlyReading = (currentBook) => {
    putOnShelf(currentBook, CURRENTLY_READING_SHELF);
  }

  const handleWantToRead = (wantToRead) => {
    putOnShelf(wantToRead, WANT_TO_READ_SHELF);
  }

  const handleRead = (read) => {
    putOnShelf(read, READ_SHELF);
  }


  const removeFromShelves = (book) => {
    const newShelvedBooks = shelvedBooks;
    delete newShelvedBooks[book.id];
    delete book.shelf;
    updateBooks(CURRENTLY_READING_SHELF, setCurrentlyReading);
    updateBooks(WANT_TO_READ_SHELF, setWantToRead);
    updateBooks(READ_SHELF, setRead);
  }

console.log(currentlyReadingBooks)

  return (


    <AnimatePresence>
      
      <Routes >
        <Route path='searchPage' element={<SearchPage handleCurrentlyReading={handleCurrentlyReading} handleWantToRead={handleWantToRead} handleRead={handleRead} removeFromShelves={removeFromShelves} shelvedBooks={shelvedBooks} />} />
        <Route path='/' element={<HomePage currentlyReading={currentlyReadingBooks} wantToReadBooks={wantToReadBooks} readBooks={readBooks} handleCurrentlyReading={handleCurrentlyReading} handleWantToRead={handleWantToRead} handleRead={handleRead} removeFromShelves={removeFromShelves} />} />
      </Routes>

    </AnimatePresence>


  );
}

export default App;

