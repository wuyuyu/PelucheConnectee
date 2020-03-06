import React, { Component } from "react";
import './styleSheets/Message.css';
import * as firebase from"firebase";
import config from "./firebaseconfig.js";
import BoutonLike from "./BoutonLike.jsx";

export default class Message extends Component{
    constructor(props){
        super(props);

        let userId =  firebase.auth().currentUser;
        if (userId == null){
          return;
        }
       


 

        this.state = {
            topic:'',
            texte:'',
           userId:userId,
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

    displayUserPseudo(){
        let userId =  firebase.auth().currentUser;
        if (userId == null){
          return;
        }

        var nickname
        var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("pseudo");
        ref.on("value", function(snapshot) {
            
            nickname =snapshot.val();
        });   
    
    
        return nickname;
    
         }

displayUserAvatar(){
    let userId =  firebase.auth().currentUser;
        if (userId == null){
          return;
        }
    
    var pic;
    var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("avatar");
    ref.on("value", function(snapshot) {
        
        pic =snapshot.val();

    });
        
        switch(pic){
            
            default:
            return  alert("Aucun avatar n'est selectionné!");
            case 'chat':
            return <div><img src={ require('./img/cat.svg') } /></div>;
            
            case 'chien':
            return <div><img src={ require('./img/dog.svg') } /></div>;
            
            case 'souris':
            return <div><img src={ require('./img/rodent.svg') } /></div>;
            
            case 'hibou':
            return <div><img src={ require('./img/owl.svg') } /></div>;
            
            case 'singe':
            return <div><img src={ require('./img/monkey.svg') } /></div>;
            
            case 'cochon':
            return <div><img src={ require('./img/pig.svg') } /></div>;
            
            case 'hamster':
            return <div><img src={ require('./img/hamster.svg') } /></div>;
            
            case 'panda':
            return <div><img src={ require('./img/panda.svg') } /></div>;
            
        } 

        
        }
 

    render(){
        return(
            <div className="message">
               
            <div id='infoMess'>
                <div className="avatar">
                   {this.displayUserAvatar}
                </div>
                <div className ="pseudo">
                    <h3>{this.displayUserPseudo}</h3>
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