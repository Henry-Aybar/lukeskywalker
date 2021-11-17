import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import axios from 'axios'


const Planets = props =>{
    const [planet, setPlanet] = useState ("");
    const {searchId} = useParams()
    console.log(planet)
    
    

    useEffect(()=>{
      axios.get(`https://swapi.dev/api/planets/${searchId}`)
        .then( response => {setPlanet(response.data)})
    },[searchId])

    return(
        <>
            <h1>{planet.name}</h1>
            <h4>Climate: {planet.climate}</h4>
            <h4>Terrain: {planet.terrain}</h4>
            <h4>Surface Water: {planet.surface_water}</h4>
            <h4>Population: {planet.population}</h4>
        </>
    )
}

export default Planets