import React, { Component } from "react";
import * as firebase from "firebase";
import config from "./components/Firebase/firebaseconfig.js";
import { gsap } from 'gsap';
import './styleSheets/orderButton.scss';
import './styleSheets/cadre.css';
import img from './img/peluche.jpeg';
//import './styleSheets/slideStyle.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class Boutique extends Component {
    constructor(props){
        super(props);

        this.state = {
           prenom: ''
        };
    let userId =  firebase.auth().currentUser;
    if (userId == null){
      return;
    }
    var name;
    var ref = firebase.database().ref('utilisateurs/' + userId.uid).child("prenom");
    ref.on("value", (snapshot) => {
      
        name =snapshot.val();
        console.log(" le nom est" + name)
        this.setState({...this.state, prenom:name});
   
    });
}

   /* constructor(props){
        super(props);
        window.onload = this.rotate();
        this.state={
            movie: 0,
            movieImages: new Array("./img/peluche.jpeg","./img/peluchePlan.png","./img/peluchePlanb.png")
        }
    }*/
    handleChange() {
        document.querySelectorAll('.truck-button').forEach(button => {
            button.addEventListener('click', e => {
                e.preventDefault();
                let box = button.querySelector('.box'),
                    truck = button.querySelector('.truck');
                if(!button.classList.contains('done')) {
                    if(!button.classList.contains('animation')) {
                        button.classList.add('animation');
                        gsap.to(button, {
                            '--box-s': 1,
                            '--box-o': 1,
                            duration: .3,
                            delay: .5
                        });
                        gsap.to(box, {
                            x: 0,
                            duration: .4,
                            delay: .7
                        });
                        gsap.to(button, {
                            '--hx': -5,
                            '--bx': 50,
                            duration: .18,
                            delay: .92
                        });
                        gsap.to(box, {
                            y: 0,
                            duration: .1,
                            delay: 1.15
                        });
                        gsap.set(button, {
                            '--truck-y': 0,
                            '--truck-y-n': -26
                        });
                        gsap.to(button, {
                            '--truck-y': 1,
                            '--truck-y-n': -25,
                            duration: .2,
                            delay: 1.25,
                            onComplete() {
                                gsap.timeline({
                                    onComplete() {
                                        button.classList.add('done');
                                    }
                                }).to(truck, {
                                    x: 0,
                                    duration: .4
                                }).to(truck, {
                                    x: 40,
                                    duration: 1
                                }).to(truck, {
                                    x: 20,
                                    duration: .6
                                }).to(truck, {
                                    x: 96,
                                    duration: .4
                                });
                                gsap.to(button, {
                                    '--progress': 1,
                                    duration: 2.4,
                                    ease: "power2.in"
                                });
                            }
                        });
                    }
                } else {
                    button.classList.remove('animation', 'done');
                    gsap.set(truck, {
                        x: 4
                    });
                    gsap.set(button, {
                        '--progress': 0,
                        '--hx': 0,
                        '--bx': 0,
                        '--box-s': .5,
                        '--box-o': 0,
                        '--truck-y': 0,
                        '--truck-y-n': -26
                    });
                    gsap.set(box, {
                        x: -24,
                        y: -6
                    });
                }
            });
        });
    }
    /*£rotate() {
        this.state.movie++;
        if (this.state.movie == this.state.movieImages.length) {
            this.state.movie = 0;
        }
        document.getElementById("movieSlider").src = this.state.movieImages[this.state.movie];
        setTimeout(this.rotate, 1 * 1000)
    }*/
    render(){
        const {prenom} = this.state;
        return(
            <div>
                <h3>Vic la Peluche</h3>
                <div class="gradient-border" id="box">
                    <img src={img} id="movieSlider" alt="Movie Slider"/>
                </div>
                <p>{prenom} Inscrivez-vous sur la liste d'attente</p> 
                <button className="truck-button" onClick={this.handleChange}>
                    <span className="default">Réserver</span>
                    <span className="success">
                        Peluche réservée!
                        <svg viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                    </span>
                    <div className="truck">
                        <div className="wheel"></div>
                        <div className="back"></div>
                        <div className="front"></div>
                        <div className="box"></div>
                    </div>
                </button>
            </div>
        )
    }
}















