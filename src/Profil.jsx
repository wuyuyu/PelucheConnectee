import React, { Component } from "react";
import * as firebase from "firebase";
import config from "./firebaseconfig.js";
import Avatar from "./Avatar.jsx";
import './styleSheets/button.scss'


export default class Profil extends Component{
constructor(props){
  super(props);
  let userId =  firebase.auth().currentUser;
  if (userId == null){
    return;
  }
  var name;
  var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("nom");
  ref.on("value", function(snapshot) {
    
  name =snapshot.val();
 
  });
  var nickname;
  var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("prenom");
  ref.on("value", function(snapshot) {
    
  nickname =snapshot.val();
 
  });
  var ageEnfant;
  var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("ageEnfant");
  ref.on("value", function(snapshot) {
    
  ageEnfant =snapshot.val();
 
  });


  this.state ={
    nom :name,
    prenom:nickname,
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
     this.saveUser(this.state.nom, this.state.prenom,this.state.ageEnfant,userId.uid);
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
saveUser(nom, prenom, ageEnfant, userId) {
  console.log("l'id est" + userId)
  firebase.database().ref('utilisateurs/' + userId).set({
    nom: nom,
    prenom: prenom,
    ageEnfant : ageEnfant,
    id: userId
  });
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
        <div><Avatar/></div>
      
        <div>
          Nom :
    </div>
        <label>
          <input type="text" name='nom' value={this.state.nom} onChange={this.handleChange} />
        </label>
      </div>
      <div className="divForm">
        <div>
          Prénom :  {this.state.prenom}
    </div>
        <label>
          <input type="text" name="prenom" value={this.state.prenom} onChange={this.handleChange} />
        </label>
      </div>
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

