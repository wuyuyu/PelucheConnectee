import React from 'react';
import './styleSheets/contactStyle.css'

export default function Contact(){

    return (
      <div>
        <div id='form1'>
        <h3>Aidez-nous à concevoir la peluche idéale!</h3>
        <br/>
        <form>
          <label>Combien seriez-vous prêts à payer pour cette peluche?</label>
          <br/>
          <div className="radio">
            <input type="radio" name='prix' value="option1" />
            <label>Entre 30 et 50€</label>
            <br/>          
            <input type="radio" name='prix' value="option2" />
            <label>Entre 50 et 70€</label>
            <br/>
            <input type="radio" name='prix' value="option3" />
            <label>Entre 70 et 90€</label>
          </div>
          <br/>
          <label>Quelle fonctionalité pensez-vous nécessaire?</label>
          <br/>
          <div className="checkBox">
            <label>
              <input type="checkbox" />
                Babyphone
            </label>
          </div>
          <div className="checkBox">
            <label>
              <input type="checkbox" />
                Veilleuse
            </label>
          </div>
          <div className="checkBox">
            <label>
              <input type="checkbox" />
                Visiophone
            </label>
          </div>
          <div className="checkBox">
            <label>
              <input type="checkbox" />
                Thermomètre
            </label>
          </div>
          <div className="checkBox">
            <label>
              <input type="checkbox" />
                Dictaphone
            </label>
          </div>
        </form>
        </div>
        <div id='form2'>
        <br/>
        <br/>
        <h3>N'hésitez pas à nous contacter pour toutes questions ou suggestions</h3>
        <br/>
        <div>
          <head><title>Form</title></head>
            <div id='container1'>
              <h2 class='contact-form'>Contact</h2>
              <form ng-submit='addMessage' action="index.html" method='post'>
                <label className='contactLabel' for="name">Nom:</label>
                <input className='contactInput' type="text" id='name' ng-model='todoMessage' placeholder='Votre nom'/>
                <label className='contactLabel' for="email">Email:</label>
                <input className='contactInput' type="email" id='email' placeholder='Votre mail'/>
                <label className='contactLabel' for="msg">Message:</label>
                <textarea name="messages" id="msg" cols="30" rows="5" placeholder='Votre message'></textarea>
                <input id="contactInput" className='contactInput' type="submit"/>
              </form>
            </div>
        </div>
        </div>
        <br/>
        <br/>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5247.003645935954!2d2.2841494!3d48.8867728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8f730590b1%3A0x3a3962d81eb2fde4!2s8%20Avenue%20de%20la%20Porte%20de%20Champerret%2C%2075017%20Paris!5e0!3m2!1sfr!2sfr!4v1579205442664!5m2!1sfr!2sfr"
            width="400" height="300" frameBorder="0" style={{border:0}} allowFullScreen="">
          </iframe>
        </div>
        <br/>
      </div>  
    );
}