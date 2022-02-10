import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion/dist/es/index';
import './SearchPage.css';
import BookList from '../booklist/BookList';
import SearchBox from '../searchBox/SearchBox'
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { animationOne, transitionOne } from '../animation'

const SearchPage = (props) => {

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

            <div className='search'>
                <div className='icon-box'>
                    <Link to="/" className='arrow-icon'>
                        <FaAngleLeft className='icon' />
                    </Link>
                </div>
                <div className='search-input-box'>

                    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

                </div>
                <div className='book-list'></div>

            </div>
            <div className='books-menu'> <BookList books={books} handleCurrentlyReading={props.handleCurrentlyReading} /> </div>

        </motion.main>)


}
export default SearchPage;