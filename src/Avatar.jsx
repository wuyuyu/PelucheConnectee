
import './styleSheets/avatar.css';
import React from 'react';
import * as firebase from "firebase";
import config from "./firebaseconfig.js";

export default class Avatar extends React.Component{


render(){
return (
    <div>
        <div>
            <h1>Sélectionnez votre avatar :</h1>
            <br/>
        </div>

        <div id = "avatar">
            <div className = "a1 avatar-img" name='chat'> <img src={require('./img/cat.svg')}/> </div>
            <div className = "a3 avatar-img" name='cochon'><img src={require('./img/pig.svg')}/></div>
            <div className = "a4 avatar-img" name='hamster'><img src={require('./img/hamster.svg')}/></div>
            <div className = "a5 avatar-img" name='panda'><img src={require('./img/panda.svg')}/></div>
            <div className = "a6 avatar-img" name='lion'><img src={require('./img/lion.svg')}/></div>
            <div className = "a7 avatar-img" name='singe'><img src={require('./img/monkey.svg')}/></div>
            <div className = "a8 avatar-img" name='hibou'><img src={require('./img/owl.svg')}/></div>
            <div className = "a9 avatar-img" name='souris'><img src={require('./img/rodent.svg')}/></div>
            <div className = "a2 avatar-img" name='chien'><img src={require('./img/dog.svg')}/></div>
        </div>
    </div>
);}}
