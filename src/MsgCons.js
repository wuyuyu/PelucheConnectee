import React, { Component } from "react";
import './Message.css';
import * as firebase from"firebase";
import config from "./firebaseconfig.js";

export default class MsgCons extends Component{
    constructor(props){
        super(props);
        this.state = {
            nom_expediteur :'',
            msgC:'',
            date:''

        }
    const rootRef = firebase.database().ref();
    this.msgCRef = rootRef.child("messages");

    }

    saveMsgCons(nom,msgC,date){
       var  newMsgCRef = this.msgCRef.push();
       newMsgCRef.set({
           nom_expediteur: nom,
           msgConseil: msgC,
           date: date,
       });
    }

    render(){
        return(
            <div className="msgC">
               
               <div className="img">
            <img src={ require('./img/panda.svg') } />
            </div>
            <div className="user">
            <h3>{this.props.userName}</h3>
            </div>
            
            <div className="texte">
                <p>{this.props.text}</p>
            </div>
            
            </div>

           

        );
    }
}