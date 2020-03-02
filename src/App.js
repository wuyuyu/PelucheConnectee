import React from 'react';
import logo from './img/logo.svg';
import './styleSheets/App.css';
import Menu from './Menu';
import Firebase, { FirebaseContext } from './components/Firebase';
import Content from './Content.jsx';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Clock from './clock';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './redux/reducers';

function App() {
  return (
    <div>
      <body>
        <Header />
       
        <Content />
        <Footer/>
      </body>
     </div> 
  );
}

class Header extends React.Component {
  render() {
     return (
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
     );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div id='footer'>
        <p>Romain, Antoine, Tania et Yuyuan.</p>
        <Clock/>
     </div>
     );
  }
}

function formatDate(date) {
  return date.toLocaleDateString();
}

export function RepondreMessage(){
  return(
  <div>ddddddd</div>
  );
}


{/* <Link to="/forum"><Bouton name ="Forum" onClick={props.maFonction}/></Link> */}

export default App;