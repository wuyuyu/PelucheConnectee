import React, { Component } from "react";
import * as firebase from"firebase";



export default class Topic extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName :'',
            titre:'',
            date:'',
        };

        const rootRef = firebase.database().ref();
        this.messagesRef = rootRef.child("Topics");


    }

    





    render(){
        return(
            <div>
                <div className="Sujet">
                    <label>Titre du sujet</label>
                    <textarea >
                    </textarea>
                   
                 </div>  
            

            </div>

        );
    }

}