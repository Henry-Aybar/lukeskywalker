import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';


const Form = props =>{
    const [searchType, setSearchType] = useState ("people");
    const [searchId, setSearchId] = useState (1)
    const history = useHistory()
    console.log(searchId)
    console.log(searchType)

    const findItem = (e)=> {
        e.preventDefault();
        // console.log("hello i am here")
        history.push(`/${searchType}/${searchId}`)
    }

    return(
        
        <form onSubmit = { findItem }>
            <h1>Serch for:</h1>
            <select onChange={ (e)=> setSearchType(e.target.value) } value={searchType}>
                {/* {
                    Object.entries(props.categories)
                    .map(([category, url])=>(
                    <option value={url} key={url}>{ category }</option>))
                } */}
                <option>people</option>
                <option>planets</option>
            </select>
            <p> ID: </p>
            <input type="number" onChange={ (e)=> setSearchId(e.target.value) } value={searchId}/>
            <input type="submit" value="Search"/>
        </form>
        
    )
}

export default Form