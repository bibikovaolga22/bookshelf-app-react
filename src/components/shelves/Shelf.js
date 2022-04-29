import './Shelf.css';
import React from 'react'

import Book from '../book/Book';

const Shelf = ({ shelfBooks, headline, handleCurrentlyReading, handleWantToRead, handleRead, removeFromShelves }) => {


    return (

        <main className='shelf-container'>
            <div className='shelf-box'>
                <h2>{headline}</h2>
                <Book books={shelfBooks} handleCurrentlyReading={handleCurrentlyReading} handleWantToRead={handleWantToRead} handleRead={handleRead} removeFromShelves={removeFromShelves} />
            </div>
        </main>

    );

}

export default Shelf;
