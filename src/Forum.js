import React, { Component } from "react";
import Bouton from './App';
import Message from './Message';
export default class Forum extends Component{

// - un bouton 'Nouveau Topic'
// - un bouton 'Répondre'
// - un bouton 'Éditer'
// - un bouton 'Supprimer'
// - une liste de smilies
// - un signal pour montrer qu'un topic est non lu, et un autre pour montrer qu'il est déjà lu
// - une petite flèche sur laquelle on va cliquer pour accéder au dernier message de chaque forum.


    render(){
        return(
            <div>
                
                <Message userName="Michel" text="jziofjozjfiozejfiozejoifz"/>
                <Message userName="Bertrand" text="adazdazdazdzadazdazdada"/>
                <Message userName="Gérard" text="s,fo,zeof,zeo,foze,fozfzo"/>
               
                
               
            </div>

        );
    }
}