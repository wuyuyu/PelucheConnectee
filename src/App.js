import React from 'react';
import logo from './img/logo.svg';
import './styleSheets/App.css';
import './styleSheets/footerStyle.css';
import Firebase, { FirebaseContext } from './components/Firebase';
import Content from './Content.jsx';
import Header from './Header';
import Footer from './footer';

function App() {
  return (
    <div>
      <body>
        <div id='header'>
          <Header />
        </div>
        <div id='content'>
          <Content />
        </div>
        <div id='footer'>
          <Footer/>
        </div> 
      </body>
     </div> 
  );
}

export default App;