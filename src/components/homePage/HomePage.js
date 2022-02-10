import React from "react";
import './HomePage.css'
import Header from '../header/Header';
import CurrentlyReading from '../currentlyReading/CurrentlyReading';
// import WantToRead from '../wantToRead/WantToRead';
// import Read from '../read/Read';
import { motion } from 'framer-motion/dist/es/index';
import { animationOne, transitionOne } from '../animation'


const HomePage = (props) => {

    return (
        <motion.main
            initial='out'
            animate='in'
            exit='out'
            variants={animationOne}
            transition={transitionOne}
        >


            <Header />
            <CurrentlyReading newBooks={props.newBooks} />

            {/* <WantToRead />
            <Read /> */}
        </motion.main>


    )
}
export default HomePage