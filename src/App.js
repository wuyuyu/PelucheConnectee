import React from 'react';
import logo from './logo.svg';
import './App.css';

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

function Inscription(){
  return(<form onSubmit={event => this.setName(event) }>
  <label>
      Nom : <input type="text" />
  </label>
  <label>
      Prénom : <input type="text" />
  </label>
  <label>
      âge de votre enfant : <input type="number" />
  </label>
  <button>Valider</button>
</form>
);

}
function Forum(){
  console.log("je suis dedans");
  return (
    <div>
      je suis le forum
    </div>
  );
}

function Boutique(){
  console.log("je suis dedans");
  return (
    <div>
      je suis la boutique
    </div>
  );
}
function Jeux(){
 
  return (
    <div>
       jeux éducatifs pour les mômes
    </div>
  );
}
function Quizz(){
 
  return (
    <div>
      je suis le quizz
    </div>
  );
}
function Conseils(){
 
  return (
    <div>
      je suis composé d'articles pour les parents
    </div>
  );
}
function About(){
 
  return (
    <div>
     Romain, Antoine, Tania et Yuyuan.
    </div>
  );
}

function Menu(props){
  return (
    <div>
    <Router>
    
    
    
    <Link to="/forum"> <Bouton name ="Forum" /></Link>
    <Link to="/inscription"> <Bouton name ="Inscription" /></Link>
    <Link to="/boutique"> <Bouton name ="Boutique" /></Link>
    <Link to="/jeux"> <Bouton name ="Jeux" /></Link>

    <Link to="/quizz"> <Bouton name ="Quizz" /></Link>
    <Link to="/conseils"> <Bouton name ="Conseils" /></Link>
    <Link to="/about"> <Bouton name ="A propos" /></Link>

    
    
    <Switch>
    <Route exact path="/" />
    <Route path="/forum" component={Forum} />
    <Route path="/inscription" component={Inscription} />
    <Route path="/boutique" component={Boutique} />
    <Route path="/jeux" component={Jeux} />
    <Route path="/quizz" component={Quizz} />
    <Route path="/conseils" component={Conseils} />
    <Route path="/about" component={About} />

     
    </Switch>
    
    
    </Router>
    
    </div>
    
    );
}
function Bouton(props){
  return (<button className="bouton">{props.name} 
  
  </button>
  );
}

{/* <Link to="/forum"><Bouton name ="Forum" onClick={props.maFonction}/></Link> */}

export default App;
