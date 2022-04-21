import React,{useState} from "react";
import './Search.css'
import SearchResults from "./SearchResult";


const Search = ()=>{

    const [Img, setImg] = useState('');

    const handleChange = (e)=>{
          const data = e.target.value;
           console.log(data)
            setImg(data)    
    }

    return(
        <div className="searchbar">
        <input type='text' placeholder="Search" value={Img} onChange={handleChange}/>
        {Img === '' ? null :  <SearchResults name={Img} />}
        </div>
    )
}

export default Search