import React from 'react';
import Menu from './Menu';
import './styleSheets/headerStyle.css';

export default class Header extends React.Component {
    render() {
       return (
           <div>
               <header>
             <div className="App">
                  <div class="logo-container">
                        <div class="logo-image-section">
                          <img className= "brush" src={require('./img/fond-logo.png')} />
                        </div>  
                        <div class="logo-section">
                          <h1 className="titre">Peluche c<span><img className="panda" src={require('./img/panda.svg')} /></span>nnectée</h1>
                        </div>
                  </div>
                  <Menu maFonction="" /> 
            </div>
            </header>
            </div>
       );
    }
  }