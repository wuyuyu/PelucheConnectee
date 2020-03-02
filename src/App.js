import React from 'react';
import logo from './logo.svg';
import './App.css';
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