import './Shelf.css';
import React from 'react'

import Book from '../book/Book';

const Shelf = ({ currentlyReading }) => {


    return (

        <main className='shelf-container'>
            <h2>Curretly Reading  </h2>
            <div className='currently-reading-box'>
                <div className='currently-reading-container'>
                    <Book books={currentlyReading} />
                </div>
            </div>
        </main>

    );

}

export default Shelf;
