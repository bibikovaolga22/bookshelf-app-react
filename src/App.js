import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/homePage/HomePage';
import SearchPage from './components/searchPage/SearchPage';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

function App() {

  const [currentlyReadingBooks, setCurrentlyReading] = useState([])


  const handleCurrentlyReading = (book) => {
    const newCurrentlyReading = [...currentlyReadingBooks, book];
    setCurrentlyReading(newCurrentlyReading);
    console.log(newCurrentlyReading)
  }

  return (


    <AnimatePresence>
      <Routes >
        <Route path='searchPage' element={<SearchPage handleCurrentlyReading={handleCurrentlyReading} />} />
        <Route path='/' element={<HomePage newBooks={currentlyReadingBooks} />} />
      </Routes>

    </AnimatePresence>


  );
}

export default App;

