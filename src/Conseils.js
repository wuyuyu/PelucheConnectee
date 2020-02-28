import React, { Component } from "react";
import Bouton from './App';
import MsgCons from './MsgCons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ConseilGastro from './ConseilGastro';
import ConseilDent from './ConseilDent';
import ConseilCaca from './ConseilCaca';
//import Message from './Message';
//import BoutonLike from './BoutonLike';

export default class Conseils extends Component{




    render(){
        return(
            
            <div>
                <Router>
                <h2>Liste conseil:  </h2>   
                <MsgCons userName="Gastro" />
                <div className="lien">
                <Link to="/conseilGastro">Viens voir comment on la sèche cette satanée Gastro !</Link>
                </div>
                
                <MsgCons userName="Les dents" />
                <div className="lien">
                <Link to="/dents">Ptet lui arracher les dents, viens voir comment faire !</Link>
                </div>
                <MsgCons userName="Problème fécal" />
                <div className="lien">
                <Link to="/caca">Marre de ramasser la merde ?</Link>
                </div>
               
                <Switch>
                    <Route exact path="/" />
                    <Route path="/conseilGastro" component={ConseilGastro} />
                    <Route path="/dents" component={ConseilDent} />
                    <Route path="/caca" component={ConseilCaca} />
                </Switch>
                </Router>
            </div>

        );
    }


}