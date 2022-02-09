import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';


 

const Header = () => {

  
    return (

        <header>
            <nav className="header-box">
                <h1> MyBookshelf </h1>
                <div className="books-search-button">
                    <Link to="/searchPage" className="books-search-link">
                        Find Books 
                    </Link>
                </div>
            </nav>





        </header>
   
    );

}

export default Header;