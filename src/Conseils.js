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
import './conseilMenu.scss';

export default class Conseils extends Component{




    render(){

         

        return(
           
            
            <div>
                <Router>
                <div>
                <main class="page-content">
                    <div class="card">
                        <div class="content">
                            <h2 class="title">Santé</h2>
                            <p class="copy">Découvrez tous les conseils santé dédiés aux enfants de 0 à 6 ans ...</p><button class="btn">View Trips</button></div>
                    </div>
                    <div class="card">
                        <div class="content">
                            <h2 class="title">Repas</h2>
                            <p class="copy">Seriously, straight up, just blast off into outer space today</p><button class="btn">Book Now</button></div>
                    </div>
                    <div class="card">
                        <div class="content">
                            <h2 class="title">Mode</h2>
                            <p class="copy">Découvrez les produits Mode Bébé parmi la collection exclusive. Commandez en ligne et faites-vous livrer à domicile ou en magasin.
                            </p><button class="btn">View Trips</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="content">
                            <h2 class="title">Sorties</h2>
                            <p class="copy">It's the desert you've always dreamed of</p><button class="btn">Book Now</button></div>
                    </div>
                    <div class="card">
                        <div class="content">
                            <h2 class="title">Jeux</h2>
                            <p class="copy">Seriously, straight up, just blast off into outer space today</p><button class="btn">Book Now</button></div>
                    </div>
                </main>
                </div>


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