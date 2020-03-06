import React , {Component}from 'react';
import * as firebase from "firebase";
import Forum from './Forum.jsx';
import './styleSheets/button.scss'
import Message from './Message.jsx';
export default class NewTopic extends Component{

	constructor(props){
    super(props);
    this.state ={
      topic :'', 
      id:''     
    }
    const rootRef= firebase.database().ref();
    this.topicsRef = rootRef.child("Topics");
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  submitNewTopic =(e)=>{
    alert("Votre Topic a été créé avec succès. ");
    e.preventDefault();
	  this.saveTopic(this.state.topic);
  }

  saveTopic(topic){
    firebase.database().ref('Topics/'+topic).set({
      topic: topic,
      id:topic
    });
  }



	render(){
  
  return(
      <div>
      <form>
        <div>
          <label>
            Nouveau topic, entrez votre nouveau sujet ici...
            <textarea Classname='topic' value={this.state.topic} onChange={this.handleChange}/>
          </label>
          <label>
           entrez le premier message ici...
            <textarea Classname='message'  onChange={this.handleChange}/>
          </label>
          <Message/>
          <button className='fill' type ='submit' onClick={this.submitNewTopic}> Valider </button>
        </div>
      </form>
      </div>
    );
	}	
}