import React, { Component } from "react";
import * as firebase from "firebase";
import './styleSheets/button.scss';
import Firebase, { FirebaseContext } from './components/Firebase';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class ConnexionPage extends Component {
    render() {
        return (
            <div>
                <FirebaseContext.Consumer>
                    {value => <Connexion value={value} />}
                </FirebaseContext.Consumer>
            </div>
        );
    }
}

class Connexion extends Component {
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

    handleDeco = (event) =>{
        this.state.fb.doSignOut();
        this.hidden('disconnect');
        this.show('connect');
        alert("vous êtes bien déconnecté");
    }

    hidden(id){
        document.getElementById(id).style.display= 'none';
    }

    show(id){
        document.getElementById(id).style.display= 'flex';
        document.getElementById(id).style.margin= 'auto';
        document.getElementById(id).style.marginTop= '10px';
    }

    handleClick = (event) => {
        const { email, password} = this.state;
        this.state.fb
        .doSignInWithEmailAndPassword (email, password)
        .catch(error => {
           
            this.setState({ error });
            console.log(error.message);

            return;
          });
         console.log("connectée");
        event.preventDefault();
        this.hidden('connect');
        this.show('disconnect');

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
                    <button id='connect' className='slide' type="submit" onClick={this.handleClick}>Connexion</button>
                    <div style={{marginTop:'10px'}}>
                        <Link to="/inscription">Pas encore inscrit?</Link>
                    </div>
                    <div><button id='disconnect' className='offset' type="submit" style={{display:'none'}} onClick={this.handleDeco}>Deconnexion</button></div>
                </div>
            </div>
        );
    }
}

