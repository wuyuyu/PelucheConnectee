import React, { Component } from "react";
import Firebase, { FirebaseContext } from './components/Firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import InscriptionPage from './Inscription';
  import ConnexionPage from './Connexion';
  import Forum from './Forum';
  import Boutique from './Boutique';
  //import Accueil from './Accueil';
  import Profil from './Profil';
  import Contact from './Contact';
  
  import {
    Conseils,
    About

  } from './App';

export default class Menu extends Component{
  constructor(props) {
    super(props);
    this.state = {
      connected:false
    }
  }

  render() {
    return (
      <div>
        <FirebaseContext.Provider value={new Firebase()}>
          <Router>
            <div className="lien">
              <Link to="/accueil"> Accueil</Link>
            </div>
            <div className="lien">
              <Link to="/connexion">Connexion/Inscription</Link>
            </div>
            <div className="lien">
              <Link to="/profil">Mon compte</Link>
            </div>
            <div className="lien">
              <Link to="/boutique">Boutique</Link>
            </div>
            <div className="lien">
              <Link to="/forum"> Forum</Link>
            </div>
            <div className="lien">
              <Link to="/conseils">Conseils</Link>
            </div>
            <div className="lien">
              <Link to="/contact"> Nous contacter</Link>
            </div>

            <Switch>
              <Route exact path="/" />
              {/*<Route path="/accueil" component={Accueil} />*/}
              <Route path="/connexion" component={ConnexionPage} />
              <Route path="/inscription" component={InscriptionPage} />
              
              <Route path="/forum" component={Forum} />
              <Route path="/profil" component={Profil} />
              <Route path="/boutique" component={Boutique} />
              <Route path="/conseils" component={Conseils} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Router>
      </FirebaseContext.Provider>
      </div>
    );
      }
}