import React, { Component } from "react";
import './styleSheets/Message.css';
import * as firebase from"firebase";
import config from "./firebaseconfig.js";

export default class MsgCons extends Component{
    constructor(props){
        super(props);
        this.state = {
            titre :'',
            auteur:'',
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
                   <p>{this.props.titre} by {this.props.auteur}</p>
                </div>
            </div>
        );
    }
}