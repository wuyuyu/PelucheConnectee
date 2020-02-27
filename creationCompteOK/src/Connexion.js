// import React, { Component } from "react";
// //import * as firebase from "firebase";
// import Firebase, { FirebaseContext } from './components/Firebase';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default class ConnexionPage extends Component {
//     render() {
//         return (
//             <div>
//                 <FirebaseContext.Consumer>
//                     {value => <SignIn value={value} />}
//                 </FirebaseContext.Consumer>
//             </div>
//         );
//     }
// }

// class Connexion extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             fb:this.props.value
//         }
//     }

//     handleChange = (event) => {
//         this.setState({ [event.target.name]: event.target.value });
//     }

//     handleClick = (event) => {
//         const { email, password} = this.state;
//         this.state.fb
//         doSignInWithEmailAndPassword = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password);
        
//           .catch(error => {
//             this.setState({ error });
//           });
//         event.preventDefault();
//       };

//     render() {
//         return (
//             <div>
//                 <div className="divCo">
//                     <div id="email" value="test@mail.fr"> Email: </div>
//                     <label>
//                         <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
//                     </label>
//                 </div>
//                 <div className="divCO">
//                     <div id="password" value="testMDP">Mot de passe:</div>
//                     <label>
//                         <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
//                     </label>
//                     <div>
//                     </div>
//                     <button type="submit" onClick={this.handleClick}>Connexion</button>
//                     <div>
//                         <Link to="/inscription">Pas encore inscrit?</Link>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// //export default Connexion;

import React, { Component } from "react";
import * as firebase from "firebase";
import Firebase, { FirebaseContext } from './components/Firebase';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import InscriptionPage from "./Inscription";

export default class Connexion extends Component {
    constructor(props) {
        super(props);

        this.state ={
            adresse:'',
            motDePasse:''
        }
    }

    submitForm =(e) =>{
        var userId = firebase.auth().currentUser.uid;
        e.preventDefault();
        if (userId != null) {
            userId.providerData.forEach(function (profile) {
              console.log("Sign-in provider: " + profile.providerId);
              console.log("  Provider-specific UID: " + profile.uid);
              console.log("  Name: " + profile.displayName);
              console.log("  Email: " + profile.email);
              console.log("  Photo URL: " + profile.photoURL);
            });
        }
    }

render(){
    return(
        <div>
                <div className="divCo">
        <div id="email" value="test@mail.fr"> Email: </div>
        <label>
        <input type="text" />
        </label>
        </div>
        <div className="divC  O">
        <div id="password" value="testMDP">Mot de passe:</div>
        <label>
        <input type="text" />
        </label>
        <div>
        <button type="submit" onClick={this.submitForm} >Se connecter</button>
        </div>
        <div>
        <Link to="/inscription">Pas encore inscrit?</Link>
        </div>
        </div>
      
      </div>

        );
    }

}