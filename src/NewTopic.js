import React , {Component}from 'react';
import * as firebase from "firebase";
import Forum from './Forum';

export default class NewTopic extends Component{

	constructor(props){
        super(props);
        this.state ={
        topic :''      
        }

        const rootRef= firebase.database().ref();
        this.topicsRef = rootRef.child("Topics");
    }

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    submitNewTopic =(e)=>{
      alert("Votre Topic est crée avec succèe. ");
      e.preventDefault();
	    this.saveTopic(this.state.topic);
	    this.setState({topic:''});
      this.props.send();
    }

     saveTopic(topic){
        var  newTopicRef = this.topicsRef.push();
        newTopicRef.set({
        topic: topic
    	});
    }



	render(){
	
		  return(
            

                <form>
                <div>
                <label>
                Nouveau topic, entrez votre nouveau sujet ici...
               <textarea name='topic' value={this.state.topic} onChange={this.handleChange}/>
               </label>
               <button  type ="submit" onClick={this.submitNewTopic}> Valider </button>
               </div>
               </form>
           
            );
	}	
}