import react from "react";
import './search-box.css'

export const SearchBox = ({placeholder,click}) => {
    return <input className = 'search'type="search"
       placeholder= {placeholder}
       onChange={click}/>
}