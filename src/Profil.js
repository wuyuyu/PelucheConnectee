import React, { Component } from "react";
import * as firebase from "firebase";
import config from "./firebaseconfig.js";


export default class Profil extends Component{
constructor(props){
  super(props);
  this.state ={
    nom :'',
    prenom:'',
    adresse:'',
    motDePasse:''
  }

  
  const rootRef = firebase.database().ref();
    this.usersRef = rootRef.child("utilisateurs");
}


handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value});
}

 submitForm =(e) =>{
    e.preventDefault();
     this.saveUser(this.state.nom, this.state.prenom, this.state.adresse, this.state.motDePasse);
     this.setState({nom:'', prenom:'', adresse:'',motDePasse:''});
     console.log("here i am");
     let userId =  firebase.auth().currentUser;
      var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("prenom");
      ref.on("value", function(snapshot) {
      console.log(snapshot.val());
     } );
    
 }

 

// getUserData = () => {
//   let ref = firebase.database().ref('utilisateurs/');
//   ref.on('value', snapshot => {
//     const state = snapshot.val();
//     this.setState(state);
//     console.log("c'est quoi ça?" + state);
//   });
//   console.log('DATA RETRIEVED');
// }
// getUserData = (id) => {
//   var ref = firebase.database().ref('utilisateurs/').child(id);
//   console.log(id);
//   var name = ref.child('nom');
//   var pn = name.on('value', function (snapshot) {

//     console.log(name)
//   });
//   console.log('showMe' + pn);
// }


getInputVal(id){
    return document.getElementById(id).value;
}

 saveUser(nom,prenom,adresse,motDePasse){
   var  newUserRef = this.usersRef.push();
   newUserRef.set({
       nom: nom,
       prenom: prenom,
       adresse: adresse,
       motDePasse: motDePasse
   });

}

  render() {
    
    let userId =firebase.auth().currentUser!= null?true:false;
    return (
      <div>
     {userId == true &&
    
    <form id="contactForm" >
      <div className="divForm">
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
      <div className="divForm">
        <div>Age de votre enfant : </div>
        <label>
          <input type="number" />
        </label>
      </div>
      <div className="divForm">
        <div>Email</div>
        <label>
          <input type="text" name="adresse" value={this.state.adresse} onChange={this.handleChange} />
        </label>
      </div>
      <div className="divForm">
        <div>Mot de passe:  </div>
        <label>
          <input type="text" name="motDePasse" value={this.state.motDePasse} onChange={this.handleChange} />
        </label>
      </div>
      <div className="divForm">
        <div>Confirmez votre mot de passe:</div>
        <label>
          <input type="text" />
        </label>

      </div>
      <button type="submit" onClick={this.submitForm} >Valider</button>
    </form> 
     }
     {userId == false &&

      <h1>Merci de vous connecter!</h1>
     }


     </div>
    );

  }
}

