import React , {Component}from 'react';
import * as firebase from "firebase";
import Forum from './Forum';

export default class RepondreMessage extends Component{

	constructor(props){
        super(props);
        this.state ={
        message :''      
        }

        const rootRef= firebase.database().ref();
        this.messagesRef = rootRef.child("Reponses");
    }

    handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    }

    submitNewMessage =(e)=>{
      alert("Votre message est ajouté avec succèe. ");
      e.preventDefault();
	    this.saveNewMessage(this.state.message);
	    this.setState({message:''});
      this.props.send();
    }

    saveNewMessage(message){
        var  newMessageRef = this.messagesRef.push();
        newMessageRef.set({
        message : message
    	});
    }



	render(){
	
		  return(
            

                <form>
                <div>
                <label>
                Nouveau message, entrez votre nouveau message ici...
               <textarea name='message' value={this.state.message} onChange={this.handleChange}/>
               </label>
               <button  type ="submit" onClick={this.submitNewMessage}> Valider </button>
               </div>
               </form>
           
            );
	}	
}