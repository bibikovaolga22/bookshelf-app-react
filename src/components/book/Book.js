import React, { useState } from 'react';
import './Book.css'
import noimage from '../images/noimage.jpg';
import { motion } from 'framer-motion/dist/es/index';
import { FaAngleDown } from "react-icons/fa";
import { animationOne, transitionTwo } from '../animation'
import SelectionControl from '../selectionControl/SelectionControl'


const Book = ({ books, handleCurrentlyReading }) => {
    const img = (book) => {
        try {
            return (
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} ></img>

            );
        } catch (error) {
            console.log(error);
            return (
                <img src={noimage} alt='NoImage'></img>
            );
        }
    };

    const handleTitle = (title) => {
        if (title.length > 50) {
            const i = title.lastIndexOf(' ', 50);
            if (i === -1) {
                return title;
            }
            return title.substring(0, i) + '...';
        }

        return title

    }

    const [selection, setSelection] = useState('');


    return (


        <div className='book-list'  >

            {books.map((book) => (
                <motion.div className='book ' key={book.id}>
                    <div className='image-container' onMouseLeave={() => setSelection('')}
                        onClick={() => handleCurrentlyReading(book)}
                        initial='out'
                        animate='in'
                        exit='out'
                        variants={animationOne}
                        transition={transitionTwo}
                    >
                        {img(book)}
                        <div className='arrow-drop-down'
                            onMouseEnter={() => setSelection(book.id)}
                        >
                            <FaAngleDown />

                        </div>
                        {selection === book.id && <SelectionControl setSelection={setSelection} />}
                        <h2>{handleTitle(book.volumeInfo.title)}</h2>
                        < p >{book.volumeInfo.authors && book.volumeInfo.authors[0]}</p>



                    </div>
                </motion.div>

            ))}

        </div>




    );
}

export default Book;