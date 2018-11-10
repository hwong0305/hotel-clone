import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';
import './calendar.css';

class Modal extends Component {
    render() {
        let minDate;
        if (this.props.previousDate) {
            minDate = new Date(Date.parse(this.props.previousDate) + 86400000);
        } else {
            minDate = new Date(Date.now());
        }
        return (
            <div>
                <input
                    type="checkbox"
                    className="modal"
                    checked={this.props.modalCheck}
                    readOnly
                />
                <div className="overlay">
                    <div id="cal">
                        <Calendar
                            date={this.props.date}
                            onChange={this.props.handleChange}
                            minDate={minDate}
                        />
                    </div>
                    <button id="modalButton" onClick={this.props.toggleModal}>
                        Close
                    </button>
                </div>
            </div>
        );
    }
}

export default Modal;
