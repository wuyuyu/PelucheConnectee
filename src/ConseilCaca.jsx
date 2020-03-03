import React, { Component } from 'react';
import img from './img/pot.jpeg';
import Bouton from './App.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default class ConseilCaca extends Component{

        
        
        
    render(){
        return(
            <div>
                <h4>Comme ça qu'on lui torche le cul  !</h4>
                <img src= {img}/>
                <div>
                <p>Les parents sont souvent surpris par le contenu de la couche de leur bébé. Il n’est pas rare qu’ils se posent des questions sur la couleur, la texture et la fréquence des selles de leur enfant. C’est normal puisque les selles de bébé changent plusieurs fois d’aspects. Le système digestif du nouveau-né est immature et continue de se développer au cours de la première année. Les selles sont donc influencées à la fois par cette immaturité et par l’alimentation du bébé.</p>
               </div>
            </div>

        );
    }


}