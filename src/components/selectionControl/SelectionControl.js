import React from 'react';
import './SelectionControl.css'
import SelectionItem from './SelectionItem'

const SelectionControl = ({ setSelection, handleCurrentlyReading, handleWantToRead, handleRead, book, removeFromShelves }) => {



    return (
        <div className='selection-menu'
            onMouseLeave={() => setSelection('')}
        >

            <p>move to...</p>
            <ul className='selection-menu-box'>
                <SelectionItem putOnShelf={handleCurrentlyReading} book={book} shelfDescription='Currently Reading' shelfName='currently-reading' />
                <SelectionItem putOnShelf={handleWantToRead} book={book} shelfDescription='Want To Read' shelfName='want-to-read' />
                <SelectionItem putOnShelf={handleRead} book={book} shelfDescription='Read' shelfName='read' />
                <SelectionItem putOnShelf={removeFromShelves} book={book} shelfDescription='No Shelf' shelfName={undefined} />

            </ul>

        </div >

    );
}

export default SelectionControl;