import React, { Component } from "react";
import './styleSheets/button.scss'
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

        this.state = {
            newTopic: false,
            repondreMessage: false
        };
    }
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

    render(){
        return(
            <div>
            <Router>
                <h4 className="forumT">Choisissez votre sujet  </h4>
                <div className="forum">
                <Link className="forum pulse"> Le Coronavirus</Link>
                </div>
                <div className="forum">
                <Link className="forum pulse">La lenteur antillaise</Link>
                </div>
                <div className="forum">
              <Link className="forum pulse"> Roi des forêts</Link>
              </div>
              <div className="forum">
                <Link className="forum pulse"> Le zouk love est il socialement acceptable?</Link>
                </div>
                <div className="forum">
                <Link className="forum pulse"> 50 nuances de Rhum</Link>
                </div>
                <form>
                <button  type ="submit" className="fill">
                    <Link to="/Topic">Nouveau sujet </Link>
                    </button>
                 </form>
                 
                
                
                

                {/* <select name="sujet">
                <option> Bucharest </option>
                <option>Coronavirus par tout ne sort pas de chez toi</option>
                <option> Madrid </option>
                </select>                 */}
                
                {/* < Message/>
                < Message userName="dddd" text="eerger"/>
                < Message userName="dddd" text="eerger"/>
                < BoutonLike/> */}
                {/* <button onClick={() => this.toggleNewTopic()}>New Topic</button>
                <button onClick={()=> this.toggleRepondreMessage()}>New Message</button> */}
                {this.state.newTopic && <NewTopic send={() => this.toggleNewTopic()} />}
                {this.state.repondreMessage && <RepondreMessage send={()=>this.toggleRepondreMessage()}/>}


            </Router>
            </div>
        );
    }
}