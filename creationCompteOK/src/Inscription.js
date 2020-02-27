
import React, { Component } from "react";
//import * as firebase from "firebase";
import Firebase, { FirebaseContext } from './components/Firebase';
import ConnexionPage from './Connexion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class InscriptionPage extends Component {
    render() {
        return (
            <div>
                <FirebaseContext.Consumer>
                    {value => <Inscription value={value} />}
                </FirebaseContext.Consumer>
            </div>
        );
    }
}

class Inscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fb:this.props.value
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClick = (event) => {
        const { email, password} = this.state;
        this.state.fb
          .doCreateUserWithEmailAndPassword(email, password)
          .then(authUser => {
            this.setState({ email:this.state.email, password:this.state.password});
            alert('Inscription terminée!');
          })
          .catch(error => {
            this.setState({ error });
          });
        event.preventDefault();
    
      };

    render() {
        return (
            <div>
                <div className="divCo">
                    <div id="email" value="test@mail.fr"> Email: </div>
                    <label>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="divCO">
                    <div id="password" value="testMDP">Mot de passe:</div>
                    <label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <div>
                    </div>
                    <button type="submit" onClick={this.handleClick}>Valider</button>
                    <div>
                        <Link to="/connexion">Déjà inscrit?</Link>
                    </div>
                </div>
            </div>
        );
    }
}

//export default Connexion;