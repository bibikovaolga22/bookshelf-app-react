import React from "react";
import './HomePage.css'
import Header from '../header/Header';
import Shelf from '../shelves/Shelf';

import { motion } from 'framer-motion/dist/es/index';
import { animationOne, transitionOne } from '../animation'


const HomePage = ({ currentlyReading }) => {

    return (
        <motion.main
            initial='out'
            animate='in'
            exit='out'
            variants={animationOne}
            transition={transitionOne}
        >
            <Header />
            {<Shelf currentlyReading={currentlyReading} />}

        </motion.main>


    )
}
export default HomePage