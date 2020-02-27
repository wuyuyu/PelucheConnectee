import React, { Component } from "react";
import config from "./firebaseconfig.js";

import {
BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Message from "./Message";
import BoutonLike from "./BoutonLike";
import NewTopic from "./NewTopic";
import RepondreMessage from "./RepondreMessage";


export default class Forum extends Component{

// - un bouton 'Nouveau Topic'
// - un bouton 'Répondre'
// - un bouton 'Éditer'
// - un bouton 'Supprimer'
// - un signal pour montrer qu'un topic est non lu, et un autre pour montrer qu'il est déjà lu
// - une petite flèche sur laquelle on va cliquer pour accéder au dernier message de chaque forum.


    render(){
        return(
            <div>
            <Router>
                <h4>Choisir votre Topic:  </h4>
                <select name="sujet">
                <option> Bucharest </option>
                <option>Coronavirus par tout ne sort pas de chez toi</option>
                <option> Madrid </option>
                </select>                
                
                < Message userName="dddd" text="eerger"/>
                < Message userName="dddd" text="eerger"/>
                < Message userName="dddd" text="eerger"/>
                < BoutonLike/>

                <Link to="/RepondreMessage">RepondreMessage</Link>
                <Link to="/NewTopic">NewTopic</Link>

                <Switch>
                <Route exact path="/" />
                <Route path="/RepondreMessage" component={RepondreMessage} />
                <Route path="/NewTopic" component={NewTopic} />
                </Switch>
            </Router>
            </div>
        );
    }
}