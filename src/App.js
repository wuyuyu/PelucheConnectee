import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './redux/reducers';

function App() {
  return (


    <div className="App">
      <span>
      <h1 className="titre">Peluche c</h1>  
      <img className="panda" src={ require('./img/panda.svg') } />
      <h1 className="titre">nnectée</h1> 
      </span>
      <Menu maFonction="" />
      
     </div> 
   
      
  );
}


function formatDate(date) {
  return date.toLocaleDateString();
}

export function Connexion(){
return(
  <div>
  <div className="divCo">
  <div> Nom d'utilisateur: </div>
  <label>
 <input type="text" />
  </label>
  </div>
  <div className="divC  O">
  <div>   Mot de passe :  </div>
  <label>
<input type="text" />
  </label>
  </div>
  </div>

);

}


export function Boutique(){

  return (
    <div>
      je suis la boutique
    </div>
  );
}
export function Jeux(){
 
  return (
    <div>
       jeux éducatifs pour les mômes
    </div>
  );
}
export function Quizz(){
 
  return (
    <div>
      je suis le quizz
    </div>
  );
}
export function Conseils(){
 
  return (
    <div>
      je suis composé d'articles pour les parents
    </div>
  );
}
export function About(){
 
  return (
    <div>
     Romain, Antoine, Tania et Yuyuan.
    </div>
  );
}


{/* <Link to="/forum"><Bouton name ="Forum" onClick={props.maFonction}/></Link> */}

export default App;
