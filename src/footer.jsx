import React from 'react';
import Clock from './clock.jsx';
import './styleSheets/footerStyle.css';

export default class Footer extends React.Component {
    render() {
        return ( 
            <div>
                <footer>
                    <div id = 'footer'>
                        <div className = 'footDiv'>
                            <p> Romain, Antoine, Tania et Yuyuan. </p> 
                        </div> 
                        <div className = 'footDiv'>
                            <Clock />
                        </div> 
                    </div> 
                </footer> 
            </div>
        );
    }
}