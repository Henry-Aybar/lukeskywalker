import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import People from './Components/People';
import Planets from './Components/Planets';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'


function App() {

  const [resData, setResData] = useState([])
  const [ categories, setCategories] = useState([])
  
  // const fetchLuke = () =>{
  //   axios.get('https://swapi.dev/api/planets/1/')
  //     .then(res=>{ setResData(res.data) })
  //     console.log(resData)
  // }

  // const callCategories = () =>{
  //   axios.get('https://swapi.dev/api')
  //     .then( response => {setCategories(response.data)}, console.log(categories) )
  // }
  // useEffect(()=>{
  //   callCategories()
  // },[])

  return (
    <BrowserRouter className="App">
      <header className="App-header">
        <h1>StarWars Stuff</h1>
      </header>
      <div className="App">
        <Form />
        {/* <button onClick={ fetchLuke }> Submit </button> */}
        

        <Switch>
          <Route path='/people/:searchId'><People/></Route>

          <Route path='/planets/:searchId'><Planets/></Route>

        </Switch>
      </div>
  </BrowserRouter>
  );
}

export default App;
