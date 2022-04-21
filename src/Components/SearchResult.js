import React from "react";


const SearchResults = (props) => {
    const img = `https://source.unsplash.com/400×300/?${props.name}`;
    return (
        <div>
            <img src={img} alt='search'/>
        </div>
    )
}

export default SearchResults