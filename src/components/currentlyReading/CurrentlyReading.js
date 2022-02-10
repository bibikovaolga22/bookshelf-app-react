import './CurrentlyReading.css';
import React from 'react'

import BookList from '../booklist/BookList';


const CurrentlyReading = (props) => {


    return (

        <section className='currently-reading'>
            <h2>Curretly Reading  </h2>
            <div className='current-books'>{props.newBooks.map((newBook) => (

                <div className='image-container' >         <img src={newBook.volumeInfo.imageLinks.thumbnail} alt={newBook.title} ></img> </div>
            ))





            }</div>

        </section>

    );

}

export default CurrentlyReading;
