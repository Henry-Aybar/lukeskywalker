import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'


function App() {

  const [resData, setResData] = useState([])
  
  const fetchLuke = () =>{
    axios.get('https://swapi.dev/api/planets/1/')
      .then(res=>{ setResData(res.data) })
      console.log(resData)
  }

  return (
    <BrowserRouter className="App">
    <header className="App-header">
      <h1>Routing fun</h1>
      <Link to='/'>Home</Link>
      <Link to='/bob'>Bobs</Link>
    </header>

    <button onClick={ fetchLuke }> Submit </button>
    {/* <div>
      { "" + resData }
    </div> */}

    <Switch>
      <Route exact path='/'>
        <p>Home</p>
      </Route>

      <Route exact path='/bob'>
        <p>Bob's Page</p>
      </Route>

    </Switch>

  </BrowserRouter>
  );
}

export default App;
