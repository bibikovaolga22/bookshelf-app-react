import React, { useState } from 'react';
import './BookList.css'
import noimage from '../images/noimage.jpg';
import { motion } from 'framer-motion/dist/es/index';
import { FaAngleDown } from "react-icons/fa";
import { animationOne, transitionTwo } from '../animation'
import SelectionControl from '../selectionControl/SelectionControl'


const BookList = (props) => {
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



    const [selection, setSelection] = useState('')




    

    return (


        <div className='book-list'>

            {props.books.map((book) => (
                <motion.div className='image-container' key={book.id} onMouseLeave={() => setSelection('')}
                    onClick={() => props.handleCurrentBooks(book)}

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
                    {selection === book.id && <SelectionControl func={setSelection} />}
                    <h2>{handleTitle(book.volumeInfo.title)}</h2>
                    < p >{book.volumeInfo.authors && book.volumeInfo.authors[0]}</p>



                </motion.div>

                
            ))}

        </div>




    );
}

export default BookList;