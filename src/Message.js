import React, { Component } from "react";
import './Message.css';

export default class Message extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="message">
               
               <div className="img">
            <img src={ require('./img/panda.svg') } />
            </div>
            <div className="user">
            <h1>{this.props.userName}</h1>
            </div>
            
            <div className="texte">
                <p>{this.props.text}</p>
            </div>

            </div>

           

        );
    }
}