import React, { Component } from "react";


export default class Inscription extends Component{

render(){
    return(<form >
    <div className="divForm">
    <div>
    Nom : 
    </div>
    <label>
    <input type="text" />
    </label>
    </div>
    <div className="divForm">
    <div>
    Prénom :
    </div>
    <label>
    <input type="text" />
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
    <input type="text" />
    </label>
    </div>
    <div className="divForm">
    <div>Mot de passe:  </div>
    <label>
    <input type="text" />
    </label>
    </div>
    <div className="divForm">
    <div>Confirmez votre mot de passe:</div>
    <label>
    <input type="text" />
    </label>
    </div>
    <button>Valider</button>
    </form>
    );
  
  }

}