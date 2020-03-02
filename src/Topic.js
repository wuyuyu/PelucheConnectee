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

    





    ender(){
        return(
            <div>
                <div className="divCo">
                    <div id="titre" value="test@mail.fr"> titre du Topic: </div>
                    <label>
                        <input type="text" name="topic" value={this.state.titre} onChange={this.handleChange}/>
                    </label>
                 </div>  
            

            </div>

        );
    }

}