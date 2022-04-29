import React from "react";
import './HomePage.css'
import Header from '../header/Header';
import Shelf from '../shelves/Shelf';

import { motion } from 'framer-motion/dist/es/index';
import { animationOne, transitionOne } from '../animation'


const HomePage = ({ currentlyReading, wantToReadBooks, readBooks, handleCurrentlyReading, handleWantToRead, handleRead, removeFromShelves }) => {

    return (
        <motion.main
            initial='out'
            animate='in'
            exit='out'
            variants={animationOne}
            transition={transitionOne}
        >
            <Header />
            <Shelf headline='Currently Reading' shelfBooks={currentlyReading} handleCurrentlyReading={handleCurrentlyReading} handleWantToRead={handleWantToRead} handleRead={handleRead} removeFromShelves={removeFromShelves} />
            <Shelf headline='Want To Read' shelfBooks={wantToReadBooks} handleCurrentlyReading={handleCurrentlyReading} handleWantToRead={handleWantToRead} handleRead={handleRead} removeFromShelves={removeFromShelves} />
            <Shelf headline='Read' shelfBooks={readBooks} handleCurrentlyReading={handleCurrentlyReading} handleWantToRead={handleWantToRead} handleRead={handleRead} removeFromShelves={removeFromShelves} />


        </motion.main>


    )
}
export default HomePage