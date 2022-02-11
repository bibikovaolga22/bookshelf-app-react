import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion/dist/es/index';
import './SearchPage.css';

import Book from '../book/Book'
import SearchBox from '../searchBox/SearchBox'

import { animationOne, transitionOne } from '../animation'

const SearchPage = ({ handleCurrentlyReading }) => {

    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const getBooks = async () => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyChEqxgQ-Sj66hoqcpcH3_zqv5MgauGrDI&maxResults=40`;

        const res = await fetch(url);
        const resJson = await res.json();
        console.log(resJson.items);

        if (resJson.items) {
            setBooks(resJson.items);
        }

    }

    useEffect(() => {
        getBooks()

    }, [searchValue])

    return (

        <motion.main
            initial='out'
            animate='in'
            exit='out'
            variants={animationOne}
            transition={transitionOne}
        >


            <div className='search-container'>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='book-list'>
                <Book books={books} handleCurrentlyReading={handleCurrentlyReading} />
            </div>


            {/* <div className='books-menu'> <BookList books={books} handleCurrentlyReading={props.handleCurrentlyReading} /> </div> */}

        </motion.main>)


}
export default SearchPage;