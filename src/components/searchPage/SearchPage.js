import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion/dist/es/index';
import './SearchPage.css';

import Book from '../book/Book'
import SearchBox from '../searchBox/SearchBox'

import { animationOne, transitionOne } from '../animation'

const SearchPage = ({ handleCurrentlyReading, handleWantToRead, handleRead, removeFromShelves, shelvedBooks }) => {

    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const getBooks = async () => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyChEqxgQ-Sj66hoqcpcH3_zqv5MgauGrDI&maxResults=40`;

        const res = await fetch(url);
        const resJson = await res.json();
        console.log(resJson.items);

        if (resJson.items) {
            const books = resJson.items;
            const newBooks = [];
            const ids = {};
            // API sometimes returns books with duplicate ids. Book ids need to be unique as they are used in motion.div as keys 
            for (let i in books) {
                if (books[i].id in shelvedBooks) {
                    books[i] = shelvedBooks[books[i].id];
                }
                if (books[i].id in ids) {
                    continue;
                }
                ids[books[i].id] = true;
                newBooks.push(books[i]);

            }
            setBooks(newBooks);
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
                <Book books={books} handleCurrentlyReading={handleCurrentlyReading} handleWantToRead={handleWantToRead} handleRead={handleRead} removeFromShelves={removeFromShelves} />
            </div>

        </motion.main>)


}
export default SearchPage;