import React, { Component } from "react";
import * as firebase from "firebase";
import config from "./firebaseconfig.js";
import './styleSheets/button.scss';
import './styleSheets/avatar.css';


export default class Profil extends Component{
constructor(props){
  super(props);
  let userId =  firebase.auth().currentUser;
  if (userId == null){
    return;
  }
  var pic;
  var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("avatar");
  ref.on("value", function(snapshot) {
    
  pic =snapshot.val();
 
  });
  var name;
  var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("nom");
  ref.on("value", function(snapshot) {
    
  name =snapshot.val();
 
  });
  var firstName
  var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("prenom");
  ref.on("value", function(snapshot) {
    
  firstName =snapshot.val();
 
  });
  var nickname
  var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("pseudo");
  ref.on("value", function(snapshot) {
    
  nickname =snapshot.val();
 
  });
  var ageEnfant;
  var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("ageEnfant");
  ref.on("value", function(snapshot) {
    
  ageEnfant =snapshot.val();
 
  });


  this.state ={
    avatar:pic,
    nom :name,
    prenom:firstName,
    pseudo:nickname,
    ageEnfant:ageEnfant,
    id:''
  }
 
 


  const rootRef = firebase.database().ref();
    this.usersRef = rootRef.child("utilisateurs");
}


handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value});
}


submitForm =(e) =>{
  e.preventDefault();
  let userId =  firebase.auth().currentUser;

  console.log("here i am" + userId.uid);
    this.saveUser(this.state.avatar, this.state.nom, this.state.prenom, this.state.pseudo, this.state.ageEnfant,userId.uid);
    //this.setState({nom:'', prenom:'', adresse:'',motDePasse:''});
  
    
    console.log(userId.uid)
    var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("nom");
    ref.on("value", function(snapshot) {
    console.log(snapshot.val());
    } );
  // this.getUserData();
  
}

 

getUserData = () => {
  var name;
  let userId =  firebase.auth().currentUser;
  if (userId == null){
    return;
  }
  var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("nom");
  ref.on('value', snapshot => {
     name = snapshot.val()
    console.log("c'est quoi ça?" + name);
    
  });
  return name;
}


getInputVal(id){
    return document.getElementById(id).value;
}
saveUser(avatar, nom, prenom, pseudo, ageEnfant, userId) {
  console.log("l'id est" + userId)
  firebase.database().ref('utilisateurs/' + userId).set({
    avatar:avatar,
    nom: nom,
    prenom: prenom,
    pseudo: pseudo,
    ageEnfant : ageEnfant,
    id: userId
  });
}

click(anim){
  this.setState({avatar:anim});
  console.log(this.state);
}
//  saveUserOld(nom,prenom,ageEnfant,userId){

//    var  newUserRef = this.usersRef.push();
//    newUserRef.set({
//        nom: nom,
//        prenom: prenom,
//        ageEnfant: ageEnfant,
//        //id:userId 
     
//    });

// }

  render() {
   
     let userId =firebase.auth().currentUser!= null?true:false;
    // console.log("le nom est " + this.state.prenom);
    return (
      <div>
     {userId == true &&
    
    <form id="contactForm" >
      <div className="divForm">

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
        <div>
          Nom :
    </div>
        <label>
          <input type="text" name='nom' value={this.state.nom} onChange={this.handleChange} />
        </label>
      </div>
      <div className="divForm">
        <div>
          Prénom :
    </div>
        <label>
          <input type="text" name="prenom" value={this.state.prenom} onChange={this.handleChange} />
        </label>
      </div>
      <div>
          Pseudo :
      </div>
        <label>
          <input type="text" name="pseudo" value={this.state.pseudo} onChange={this.handleChange} />
        </label>
      <div className="divForm">
        <div>Age de votre enfant : </div>
        <label>
          <input type="number" name="ageEnfant" value={this.state.ageEnfant} onChange={this.handleChange}  />
        </label>
      </div>
      <div className="divForm">
      </div>
      <button className='slide' type="submit" onClick={this.submitForm} >Valider</button>
    </form> 
     }
     {userId == false &&

      <h1>Merci de vous connecter!</h1>
     }


     </div>
    );

  }
}

