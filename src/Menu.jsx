import React, { Component } from "react";
import Firebase, { FirebaseContext } from './components/Firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import InscriptionPage from './Inscription.jsx';
  import ConnexionPage from './Connexion.jsx';
  import Forum from './Forum.jsx';
  import Boutique from './Boutique.jsx';
  import About from './About.jsx';
  import Profil from './Profil.jsx';
  import Contact from './Contact.jsx';
  import Conseils from './Conseils.jsx';
  import Accueil from './Accueil.jsx';

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
              <Link to="/accueil" className="menu"> Accueil</Link>

              <Link to="/connexion" className="menu">Connexion</Link>

              <Link to="/profil" className="menu">Mon compte</Link>

              <Link to="/boutique" className="menu">Boutique</Link>

              <Link to="/forum" className="menu"> Forum</Link>

              <Link to="/conseils" className="menu">Conseils</Link>

              <Link to="/contact" className="menu"> Contact</Link>

              <Link to="/about" className="menu"> A propos</Link>
            </div>

            <Switch>
              <Route exact path="/" />
              <Route path="/accueil" component={Accueil} />
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