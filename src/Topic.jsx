import React, { Component } from "react";
import * as firebase from"firebase";
import { withRouter } from 'react-router-dom';



class Topic extends Component{
    constructor(props){
        console.log("le composant est crée")
        super(props);
        this.state = {
            userName :'',
            titre:'Espoir',
            date:'',
        };

        const rootRef = firebase.database().ref();
        this.messagesRef = rootRef.child("Topics");


    }



    render(){
       
        // console.log(test)
        // console.log(this.props.location)
        return(
            <div>
                <div className="Sujet">
                    <label></label>
                    <textarea >
                    </textarea>
                   
                 </div>  
            

            </div>

        );
    }

}
export default withRouter(Topic)