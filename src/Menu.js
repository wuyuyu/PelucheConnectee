import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Inscription from './Inscription';
  
  import {
      Connexion,
      Forum,
    Boutique,
    Jeux,
    Quizz,
    Conseils,
    About

  } from './App';

export default function Menu(props){
    return (
      <div>
      <Router>
  
      <div className="lien">
      <Link to="/connexion"> Connexion</Link>
      </div>
      
      
      <div className="lien">
      <Link to="/forum"> Forum</Link>
      </div>
      
      <div className="lien">
      <Link to="/inscription">Inscription</Link>
      </div>
      <div className="lien">
      <Link to="/boutique">Boutique</Link>
      </div>
      <div className="lien">
      <Link to="/jeux">Jeux</Link>   
      </div>
      <div className="lien">
      <Link to="/quizz">Quizz</Link> 
      </div>
      <div className="lien">
      <Link to="/conseils">Conseils</Link>
      </div>
      <div className="lien">
      <Link to="/about"> A propos</Link>
      </div>
       
      <Switch>
      <Route exact path="/" />
      <Route path="/connexion" component={Connexion} />
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