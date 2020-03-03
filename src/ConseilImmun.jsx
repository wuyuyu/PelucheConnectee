import React, { Component } from "react";
import img from './img/fort.jpg';
import Bouton from './App.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default class ConseilImmun extends Component{        
        
    render(){
        return(
            <div>
                <h4>Pour un bébé encore plus fort</h4>
                <img src= {img}/>
                <p>Les petits maux de l’hiver peuvent entraver la sérénité de tous : mal-être pour les enfants, inquiétude pour les parents, mode de garde difficile…</p>
                <p>La prévention, première des solutions, est indispensable. Mais les méthodes préconisées habituellement ne suffisent pas. Il en existe bien d’autres, moins connues, plus efficaces et faciles à mettre en place. Voilà comment faire. Il ne vous reste plus qu’à essayer !</p>
                <p>Tous les médias parlent et reparlent des mesures préventives de base : se laver les mains, éviter les magasins, limiter les interactions entre enfants pour éviter la contamination, etc.</p>
                <ul><p>Si certaines sont simples à appliquer, comme le lavage des mains, d’autres le sont beaucoup moins. Alors le mieux est avant tout de renforcer les défenses immunitaires de vos enfants (et les vôtres) pour faire barrage aux virus qui traînent. enjoy family vous dévoile plusieurs méthodes :</p>
                <li>Le massage</li>
                <li>Le mouchage</li>
                <li>La réflexologie plantaire</li>
                <li>Le portage physiologique</li>
                </ul>
            </div>
        );
    }
}