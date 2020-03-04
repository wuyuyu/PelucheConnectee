import React from 'react';
import Menu from './Menu.jsx';
import './styleSheets/headerStyle.css';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="App">
            <div className="logo-container">
              <div className="logo-image-section">
                <img className= "brush" src={require('./img/fond-logo.png')} />
              </div>  
              <div className="logo-section">
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