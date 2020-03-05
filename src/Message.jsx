import React, { Component } from "react";
import './styleSheets/Message.css';
import * as firebase from"firebase";
import config from "./firebaseconfig.js";
import BoutonLike from "./BoutonLike.jsx";

export default class Message extends Component{
    constructor(props){
        super(props);
        this.state = {
            topic:'',
            texte:'',
            pseudo: '',
            avatar:'',
            date:''
        };


        const rootRef = firebase.database().ref();
        this.messagesRef = rootRef.child("messages");

    }

    saveMessage(topic,texte,pseudo,avatar,date){
       var  newMessageRef = this.messageRef.push();
       newMessageRef.set({
            topic: topic,
            texte: texte,
            pseudo:pseudo,
            avatar: avatar,
            date: date
       });
    }

 

    render(){
        return(
            <div className="message">
               
            <div id='infoMess'>
                <div className="avatar">
                    <img src={ require('./img/panda.svg') } />
                </div>
                <div className ="pseudo">
                    <h3>{this.props.pseudo}</h3>
                </div>
                <div className="date">
                    <h5>{this.props.date}</h5>
                </div>
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