
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

            <div className = "a1 avatar-img"> <img src={require('./img/cat.svg')}/> </div>
            <div className = "a3 avatar-img"><img src={require('./img/pig.svg')}/></div>
            <div className = "a4 avatar-img"><img src={require('./img/hamster.svg')}/></div>
            <div className = "a5 avatar-img"><img src={require('./img/panda.svg')}/></div>
            <div className = "a6 avatar-img"><img src={require('./img/lion.svg')}/></div>
            <div className = "a7 avatar-img"><img src={require('./img/monkey.svg')}/></div>
            <div className = "a8 avatar-img"><img src={require('./img/owl.svg')}/></div>
            <div className = "a9 avatar-img"><img src={require('./img/rodent.svg')}/></div>
            <div className = "a2 avatar-img"><img src={require('./img/dog.svg')}/></div>
        </div>
    </div>
);}}
