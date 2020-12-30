import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Searchbar from '../Searchbar/Searchbar';
import { queryAllByAltText } from '@testing-library/react';

const SearchWiki = () => {

    const [search2,setSearch] = useState('');
    const [results,setResults] = useState([]);

    const handlesearch = async event => {
        setSearch(event.target.value);
        
    }

    useEffect(() => {
        
        const searchtest = async () => {
           const response =  await axios.get("https://api.unsplash.com/search/photos",{
      params:{
        query:search2
      },
      headers:{
        Authorization: "Client-ID bfaff13bb98a03a37ab4fd78b9c273a74c19ae7c3ffa47e8fb663471bbc9882e"
      }
    });

    setResults(response.data.results);
    
        };

        if (search2) {
            searchtest();
        }

        console.log(results);
        
    },[search2]);

    return (
        <div>
            <input type="text" value={search2} onChange={handlesearch}/><br/>
            {search2}<br/>
            {results.map((response) => {
                return (
                    <li key={response.id}>
                        {response.id}
                    </li>
                )
            })}
            
        </div>
    )

}


export default SearchWiki;