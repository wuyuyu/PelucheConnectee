import React from 'react';
import logo from './img/logo.svg';
import './styleSheets/App.css';
import './styleSheets/footerStyle.css';
import Firebase, { FirebaseContext } from './components/Firebase';
import Content from './Content.jsx';
import Header from './Header';
import Footer from './footer';


/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; */
import Clock from './clock';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from './redux/reducers';

function App() {
  return (
    <div>
      <body>
        <div>
        <Header />
        <Content />
        <div id='footer'>
          <Footer/>
        </div>
        </div>
      </body>
     </div> 
  );
}

/* export function RepondreMessage(){
  return(
  <div>ddddddd</div>
  );
} */

{/* <Link to="/forum"><Bouton name ="Forum" onClick={props.maFonction}/></Link> */}

export default App;