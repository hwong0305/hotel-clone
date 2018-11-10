import React, { Component } from 'react';
import Footer from './components/footer';
import lobby from './static/architecture-clean-hall-53464.jpg';
import pool from './static/architecture-blue-water-buildings-261102.jpg';
import interior from './static/apartment-bath-bathroom-1457847.jpg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="hero-image">
                    <div>
                        <h4>City Hotel</h4>
                    </div>
                    <div>
                        <h4>Your Journey Begins Here.</h4>
                    </div>
                </div>
                <Footer />
                <div className="description">
                    <h6>WELCOME</h6>
                    <div>
                        <h2>
                            ____ Welcome to your new home standing on the River
                            Thames in Southeastern England.
                        </h2>
                    </div>
                    <div id="won">
                        <img src={lobby} alt="Hotel Lobby" id="platform" />
                        <h4> Chill in the hotel lobby.</h4>
                    </div>
                    <div id="two">
                        <img src={pool} alt="Hotel Pool" id="pool" />
                        <h4>Enjoy the local swimming pool on Floor 3</h4>
                    </div>
                    <div id="three">
                        <img src={interior} alt="Room Interior" id="interior" />
                        <h4>Clean AF Hotel Room</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
