
import './styleSheets/avatar.css';
import React from 'react';
import * as firebase from "firebase";
import config from "./firebaseconfig.js";

export default class Avatar extends React.Component{
constructor(props){
    super(props);
    
    this.state={
        animal:''
    }
}

handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});    
}

click(anim){
    this.setState({animal:anim});
    console.log(this.state);
}

/* render(){
return (
    <div>
        <div>
            <h1>Sélectionnez votre avatar :</h1>
            <br/>
        </div>

        <div id = "avatar">
            <div className = "a1 avatar-img" name='chat' onClick={()=>{this.click('chat')}}> <img src={require('./img/cat.svg')}/> </div>
            <div className = "a3 avatar-img" name='cochon' onClick={()=>{this.click('cochon')}}><img src={require('./img/pig.svg')}/></div>
            <div className = "a4 avatar-img" name='hamster' onClick={()=>{this.click('hamster')}}><img src={require('./img/hamster.svg')}/></div>
            <div className = "a5 avatar-img" name='panda' onClick={()=>{this.click('panda')}}><img src={require('./img/panda.svg')}/></div>
            <div className = "a6 avatar-img" name='lion' onClick={()=>{this.click('lion')}}><img src={require('./img/lion.svg')}/></div>
            <div className = "a7 avatar-img" name='singe' onClick={()=>{this.click('singe')}}><img src={require('./img/monkey.svg')}/></div>
            <div className = "a8 avatar-img" name='hibou' onClick={()=>{this.click('hibou')}}><img src={require('./img/owl.svg')}/></div>
            <div className = "a9 avatar-img" name='souris' onClick={()=>{this.click('souris')}}><img src={require('./img/rodent.svg')}/></div>
            <div className = "a2 avatar-img" name='chien' onClick={()=>{this.click('chien')}}><img src={require('./img/dog.svg')}/></div>
        </div>
    </div>
);}} */
