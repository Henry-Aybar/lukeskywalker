import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import axios from 'axios'


const People = props =>{
    const [person, setPerson] = useState ("");
    const {searchId} = useParams()
    console.log(person)
    
    

    useEffect(()=>{
      axios.get(`https://swapi.dev/api/people/${searchId}`)
        .then( response => {setPerson(response.data)})
    },[searchId])

    return(
        <>
            <h1>{person.name}</h1>
            <h4>Height: {person.height}cm</h4>
            <h4>Mass: {person.mass}kg</h4>
            <h4>Hair Color: {person.hair_color}</h4>
            <h4>Skin Color: {person.skin_color}</h4>
        </>
    )
}

export default People