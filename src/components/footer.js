import React, { Component } from 'react';
import Modal from './modal';
import './footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inDefault: false,
            outDefault: false,
            checkIn: false,
            checkOut: false,
            inDate: new Date(),
            outDate: new Date()
        };

        this.toggleCheckIn = this.toggleCheckIn.bind(this);
        this.toggleCheckOut = this.toggleCheckOut.bind(this);
        this.handleCheckIn = this.handleCheckIn.bind(this);
        this.handleCheckOut = this.handleCheckOut.bind(this);
    }
    toggleCheckIn() {
        this.setState({
            checkIn: !this.state.checkIn
        });
    }
    toggleCheckOut() {
        this.setState({
            checkOut: !this.state.checkOut
        });
    }
    handleCheckIn(date) {
        this.setState({
            inDate: date.toDateString(),
            inDefault: true
        });
    }
    handleCheckOut(date) {
        this.setState({
            outDate: date.toDateString(),
            outDefault: true
        });
    }
    // Check when user corrects Check In Date to be after Check Out Date. Check Out date is automatically changed to one day after Check In Date.
    componentDidUpdate() {
        if (Date.parse(this.state.outDate) < Date.parse(this.state.inDate)) {
            this.setState({
                outDate: new Date(
                    Date.parse(this.state.inDate) + 1.5 * 86400000
                ).toDateString()
            });
        }
    }

    render() {
        return (
            <div className="booking-bar">
                <Modal
                    modalCheck={this.state.checkIn}
                    toggleModal={this.toggleCheckIn}
                    date={this.state.inDate}
                    handleChange={this.handleCheckIn}
                />
                <Modal
                    modalCheck={this.state.checkOut}
                    toggleModal={this.toggleCheckOut}
                    date={this.state.outDate}
                    handleChange={this.handleCheckOut}
                    previousDate={this.state.inDate}
                />
                <h3>Book Your Room Nao</h3>
                <button onClick={this.toggleCheckIn} id="checkIn">
                    {this.state.inDefault ? this.state.inDate : 'Check In'}
                </button>
                <button onClick={this.toggleCheckOut} id="checkOut">
                    {this.state.outDefault ? this.state.outDate : 'Check Out'}
                </button>
                <select name="occupants">
                    <option value="0">Adults</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3+">3</option>
                </select>
                <button id="bookRoom">Make a Reservation</button>
            </div>
        );
    }
}

export default Footer;
