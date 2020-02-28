import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Inscription from "./Inscription"
import Connexion from "./Connexion"
import Firebase, { FirebaseContext } from './components/Firebase';


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
    <div>
        <div className="App">
          <span>
            <h1 className="titre">Peluche c</h1>
            <img className="panda" src={require('./img/panda.svg')} />
            <h1 className="titre">nnectée</h1>
          </span>
          <Menu maFonction="" />
        </div>
     </div> 
  );
}

function formatDate(date) {
  return date.toLocaleDateString();
}

/*export function Connexion(){
return(
  <div>
  <div className="divCo">
  <div id="email" value="test@mail.fr"> Email: </div>
  <label>
 <input type="text" />
  </label>
  </div>
  <div className="divC  O">
  <div id="password" value="testMDP">Mot de passe:</div>
  <label>
<input type="text" />
  </label>
  <div>
  <button onClick={Login}>Se connecter</button>
  </div>
  <div>
  <Link to="/inscription">Pas encore inscrit?</Link>
  </div>
  </div>
  </div>

);

}
//firebase.auth().onAuthStateChanged(function(user) {
  
//});
*/


export function RepondreMessage(){
  return(
  <div>ddddddd</div>
  );
}


{/* <Link to="/forum"><Bouton name ="Forum" onClick={props.maFonction}/></Link> */}

export default App;
