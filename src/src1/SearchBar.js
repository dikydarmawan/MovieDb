import React, {useState} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import './Nav.css';

function SearchBar({callback}) {
    const [state, setState] = useState('');
    // const timeOut = useRef(null);

    const handleOnChange = event => {
        const { value } = event.target;

        // clearTimeout(timeOut.current);
        setState(value);
        console.log(event.target.value);

        // timeOut.current = setTimeout(() => {
        //     callback(value);
        // }, 500);

    }
    return (
        <div className="nav__search"> 
        <SearchIcon />
        {/* <form onSubmit={handleOnSubmit}> */}
        <input 
            className="search"
            type="text"
            placeholder="Search Movie" 
            value={state}
            onChange={handleOnChange}
            /> 
        {/* </form> */}
        </div>
    )
}

export default SearchBar
