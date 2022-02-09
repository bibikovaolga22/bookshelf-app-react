import React  from 'react';
import './SearchBox.css';




const SerachBox = (props) => {

    const handleOnChange = (event) => {
        event.preventDefault();
        const searchValue = event.target.value;
        props.setSearchValue(searchValue);
 

    }
  


    return (

        <div className='search-input-box'>
            <input
                className='form-control'
                value={props.searchValue}
                onChange={handleOnChange}
                placeholder='Type to search...'

            >
            </input>



        </div>

    )

}

export default SerachBox;