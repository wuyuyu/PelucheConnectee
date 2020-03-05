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

click(anim,id){
  this.setState({avatar:anim});
  document.getElementById(id).className='avatar-img-selected';

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
            <input type='radio' name='radio-choice' id='1' value='chat'onClick={()=>{this.click('chat','a1')}}></input> 
            <label for="1" id="a1" className = "avatar-img" > <img src={require('./img/cat.svg')}/> </label>
            <input type='radio' name='radio-choice' id='3' value='cochon' onClick={()=>{this.click('cochon','a3')}}></input> 
            <label for="3" id="a3" className = "avatar-img" ><img src={require('./img/pig.svg')}/></label>
            <input type='radio' name='radio-choice' id='4' value='hamster'onClick={()=>{this.click('hamster','a4')}}></input> 
            <label for="4" id="a4" className = "avatar-img"><img src={require('./img/hamster.svg')}/></label>
            <input type='radio' name='radio-choice' id='5' value='panda' onClick={()=>{this.click('panda','a5')}}></input> 
            <label for="5" id="a5" className = "avatar-img"><img src={require('./img/panda.svg')}/></label>
            <input type='radio' name='radio-choice' id='6' value='lion'></input> 
            <label for="6" id="a6" className = "avatar-img" onClick={()=>{this.click('lion','a6')}}><img src={require('./img/lion.svg')}/></label>
            <input type='radio' name='radio-choice' id='7' value='singe'></input> 
            <label for="7" id="a7" className = "avatar-img" onClick={()=>{this.click('singe','a7')}}><img src={require('./img/monkey.svg')}/></label>
            <input type='radio' name='radio-choice' id='8' value='hibou'></input> 
            <label for="8" id="a8" className = "avatar-img" onClick={()=>{this.click('hibou','a8')}}><img src={require('./img/owl.svg')}/></label>
            <input type='radio' name='radio-choice' id='9' value='souris'></input> 
            <label for="9" id="a9" className = "avatar-img" onClick={()=>{this.click('souris','a9')}}><img src={require('./img/rodent.svg')}/></label>
            <input type='radio' name='radio-choice' id='2' value='chien'></input> 
            <label for="2" id="a2" className = "avatar-img" onClick={()=>{this.click('chien','a2')}}><img src={require('./img/dog.svg')}/></label>
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

