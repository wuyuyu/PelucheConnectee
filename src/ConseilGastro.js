import React, { Component } from "react";
import Bouton from './App';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default class ConseilGastro extends Component{

        
        
        
    render(){
        return(
            <div>
                <h4>Les gastros ça se gère comme ça !  </h4>
                <div>
                <img src= "./img/toilette.jpg"/>
                    La gastro-entérite a de multiples causes. Il peut s’agir de différents virus, bactéries ou autres micro-organismes (comme les amibes) qui se transmettent principalement par les mains, l’eau et les aliments contaminés. L’intensité et la durée des symptômes varient selon la cause. Les gastro-entérites virales sont de loin les plus fréquentes (plus des deux tiers des cas).   
                </div>
            </div>

        );
    }


}