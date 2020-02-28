import React, { Component } from "react";
import Bouton from './App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default class ConseilDent extends Component{

        
        
        
    render(){
        return(
            <div>
                <h4>On les arrache comme ça ! Viens voir !  </h4>
                <div>
                Les dents commencent à se développer des mois, voire des années, avant qu’elles percent la gencive du bébé. En effet, les bourgeons des dents de lait apparaissent dès la 6e semaine de grossesse, alors que les bourgeons des dents permanentes sont présents à partir de la 10e semaine. Les différentes parties de la dent comme l’émail et la racine vont ensuite se développer selon une séquence bien précise pendant la grossesse. Cependant, les bourgeons des molaires permanentes se développent seulement après la naissance, vers l’âge de 4 mois pour les premières molaires permanentes et vers 5 ans pour les secondes molaires permanentes.

Dans la majorité des cas, les 20 dents primaires (dents de lait) perceront l’une après l’autre jusqu’à environ 3 ans. Leur âge d’apparition est très variable. En général, elles sortent toutefois dans l’ordre suivant :
                </div>
            </div>

        );
    }


}