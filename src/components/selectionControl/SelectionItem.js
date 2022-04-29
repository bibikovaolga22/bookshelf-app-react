import { BsCheck } from "react-icons/bs";
import React from 'react';


const SelectionItem = ({ putOnShelf, book, shelfDescription, shelfName }) => {


    return (

        <li onClick={() => { putOnShelf(book) }}>
            <span>{shelfDescription}</span> {book.shelf === shelfName && <BsCheck />}
        </li>



    );
}

export default SelectionItem;