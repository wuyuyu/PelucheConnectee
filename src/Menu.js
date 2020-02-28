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
  import About from './About';
  import Profil from './Profil';
  import Contact from './Contact';
  import Conseils from './Conseils';

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

              <Link to="/connexion">Connexion</Link>

              <Link to="/profil">Mon compte</Link>

              <Link to="/boutique">Boutique</Link>

              <Link to="/forum"> Forum</Link>

              <Link to="/conseils">Conseils</Link>

              <Link to="/contact"> Contact</Link>

              <Link to="/about"> A propos</Link>
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
              <Route path="/about" component={About} />
            </Switch>
          </Router>
      </FirebaseContext.Provider>
      </div>
    );
      }
}