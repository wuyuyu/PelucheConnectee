import React, { Component } from "react";
import './styleSheets/button.scss'
import * as firebase from "firebase";
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
    constructor() {
        super();
        var name;
        var ref = firebase.database().ref('Topics/').child('topic');
        console.log(ref);
      ref.on("value", function(snapshot) {
          name=snapshot.val();
      console.log(name);
     } );
        
        this.state = {
            topic:name,
            newTopic: false,
            repondreMessage: false
        };
    }

    /* showTopics(jsonObj) {
        var Top = jsonObj['name'];

            
        for (var i = 0; i < top.length; i++) {
          var myArticle = document.createElement('article');
          var myH2 = document.createElement('h2');
          var myPara1 = document.createElement('p');
          var myPara2 = document.createElement('p');
          var myPara3 = document.createElement('p');
          var myList = document.createElement('ul');
        }
    } */

// - un bouton 'Nouveau Topic'
// - un bouton 'Répondre'
// - un bouton 'Éditer'
// - un bouton 'Supprimer'
// - un signal pour montrer qu'un topic est non lu, et un autre pour montrer qu'il est déjà lu
// - une petite flèche sur laquelle on va cliquer pour accéder au dernier message de chaque forum.
    toggleNewTopic() {
        this.setState({...this.state, newTopic: !this.state.newTopic});
    }

    toggleRepondreMessage(){
        this.setState({...this.state, repondreMessage: !this.state.repondreMessage});
    }

    hidden(){
        document.getElementById('forum').style.display= 'none';
    }

    render(){
        return(
            <div>
            <Router>
                 <div id='forum'>
                <h4 className="forumT">Choisissez votre sujet  </h4>
                <div className="forum">
                <Link className="forum pulse"> {this.state.topic}</Link>
                </div>
                <div className="forum">
                <Link className="forum pulse">La Gastro</Link>
                </div>
                <div className="forum">
              <Link className="forum pulse">Les premières poussées dentaires</Link>
              </div>
              <div className="forum">
                <Link className="forum pulse">Le pot</Link>
                </div>
                <div className="forum">
                <Link className="forum pulse">Idées de sorties sur Paris</Link>
                </div>
                <form>
                <button  type ="submit" className="fill" onClick={()=>{this.hidden();this.toggleNewTopic();}} >
                    <Link to="/NewTopic">Nouveau sujet </Link>
                </button>
            </form>
            </div>
            <Switch>
              <Route exact path="/" />
              <Route path="/NewTopic" component={NewTopic} />
            </Switch>     
            </Router>
            </div>
        );
    }
}