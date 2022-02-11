import React from 'react';
import './SelectionControl.css'
// import { BsCheck } from "react-icons/bs";


const SelectionControl = ({ setSelection }) => {

    // const [checked, setChecked] = useState(false)

    // const handleOnClick = () => {
    //     setChecked(!checked)
    // }
    // {checked && <BsCheck />} 


    return (
        <div className='selection-menu'
            onMouseLeave={() => setSelection('')}
        >

            <p>move to...</p>
            <ul className='selection-menu-box'>

                <li className='currentrly-reading-button' 
                > <span>Currently Reading</span>  </li>
                <li className='want-to-read-button'><span>Want To Read</span></li>
                <li className='read-button'><span>Read</span></li>
                <li className='none-button'><span>None</span></li>
            </ul>

        </div>

    );
}

export default SelectionControl;