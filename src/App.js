import React  from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/homePage/HomePage';
import SearchPage from './components/searchPage/SearchPage';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

function App(props) {
 

  return (


    <AnimatePresence>
      <Routes >
        <Route path='searchPage' element={<SearchPage  />} />
        <Route path='/' element={<HomePage />} />
      </Routes>

    </AnimatePresence>


  );
}

export default App;

