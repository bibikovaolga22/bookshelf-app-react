import React from 'react';
import './SearchBox.css';
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';



const SerachBox = (props) => {

    const handleOnChange = (event) => {
        event.preventDefault();
        const searchValue = event.target.value;
        props.setSearchValue(searchValue);


    }



    return (


        <div className='search-input-box'>
            <div className='icon-container'>
                <Link to="/" className='arrow-icon'>
                    <FaAngleLeft className='icon' />
                </Link>
            </div>
            <div className='input-cintainer'>
                <input
                    className='form-control'
                    value={props.searchValue}
                    onChange={handleOnChange}
                    placeholder='Type to search...'

                >
                </input>
            </div>


        </div>

    )

}

export default SerachBox;