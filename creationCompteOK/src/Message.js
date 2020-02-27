import React, { Component } from "react";
import './Message.css';
import * as firebase from"firebase";
import config from "./firebaseconfig.js";
import BoutonLike from "./BoutonLike";

export default class Message extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName :'',
            texte:'',
            date:'',
        };


        const rootRef = firebase.database().ref();
        this.messagesRef = rootRef.child("messages");

    }

    saveMessage(userName,texte,date){
       var  newMessageRef = this.messageRef.push();
       newMessageRef.set({
           userName: userName,
           texte: texte,
           date: date,
       });
    }

 

    render(){
        return(
            <div className="message">
               
            <div className="img">
            <img src={ require('./img/panda.svg') } />
            </div>
            <div className="user">
            <h3>{this.props.userName}</h3>
            </div>
            
            <div className="texte">
                <p>{this.props.text}</p>
            </div>

            <div>
                <button type ="button" onClik={this.editer}>Editer</button>
                <button type ="button" onClik={this.supprimer}>Supprimer</button>
                <BoutonLike/>
            </div>

            </div>

        );
    }
}