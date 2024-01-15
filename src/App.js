import logo from './logo.svg';
import './App.css';
//import Heading from './Heading';
import React, { useState } from 'react';
//import ReactPlayer from 'react-player/youtube'; //will accept youtube urls
//import component from "./name";
import {Routes, Route} from 'react-router-dom';

//const or function? using function and cost for var makes it easier to differentiate between var and function

function App() {
  return (
    <div className="App Name">

     {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

  </header>*/}

      <nav className='nav'>
        <a href='#' className='nav-item'>page name</a>
      </nav>

      {/*<Routes>
        <Route path='/'element={<page name />}/>
        </Routes>*/}

      {
      /*<video/>
      const Video =()+return (<ReactPlayer url="video url"/>);*/}
     
    {/*const [word.setWord]=React.useState("")*/}
      

    </div>
  );
}

export default App;
