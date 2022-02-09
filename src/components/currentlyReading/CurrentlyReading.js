import './CurrentlyReading.css';
import React from 'react'
 



const CurrentlyReading = (props) => {


    return (

        <section className='currently-reading'>
            <h2>Curretly Reading {props.title}</h2>

        </section>

    );

}

export default CurrentlyReading;
