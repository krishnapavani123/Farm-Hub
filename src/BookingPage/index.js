import React, { Component } from "react";
import "./index.css";

class BookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      date: "",
      time: "",
      confirmed: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // After form submission show confirmation card
    this.setState({ confirmed: true });
  };

  render() {
    const { name, phone, date, time, confirmed } = this.state;

    return (
      <div className="booking-container">
        <h1 className="booking-title">Book Your Machine</h1>

        {/* When confirmed = true, show confirmation card */}
        {confirmed ? (
          <div className="confirmation-card">
            <h2>Booking Confirmed ✔</h2>
            <p>We will contact you shortly.</p>

            <div className="confirm-details">
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Phone:</strong> {phone}</p>
              <p><strong>Date:</strong> {date}</p>
              <p><strong>Time:</strong> {time}</p>
            </div>

            <button
              className="close-btn"
              onClick={() => {
                // Reset form to allow new booking
                this.setState({
                  name: "",
                  phone: "",
                  date: "",
                  time: "",
                  confirmed: false,
                });
              }}
            >
              OK
            </button>
          </div>
        ) : (
          <form className="booking-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />

            <input
              type="date"
              required
              value={date}
              onChange={(e) => this.setState({ date: e.target.value })}
            />

            <input
              type="time"
              required
              value={time}
              onChange={(e) => this.setState({ time: e.target.value })}
            />

            <button type="submit" className="submit-btn">
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default BookingPage;
