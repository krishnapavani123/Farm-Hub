import React, { Component } from "react";
import Header from "../Header";
import "./index.css";

class BookPHTest extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      village: "",
      phone: "",
      date: "",
      submitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    const { name, village, phone, date, submitted } = this.state;

    return (
      <div>
        <Header />

        <div className="ph-page">
          <h2 className="page-title">Book a pH Test / Field Visit</h2>

          {!submitted ? (
            <form className="ph-form" onSubmit={this.handleSubmit}>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={name}
                required
                onChange={this.handleChange}
                placeholder="Enter your name"
              />

              <label>Village / Location</label>
              <input
                type="text"
                name="village"
                value={village}
                required
                onChange={this.handleChange}
                placeholder="Enter your village name"
              />

              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={phone}
                required
                onChange={this.handleChange}
                placeholder="Enter phone number"
              />

              <label>Preferred Visit Date</label>
              <input
                type="date"
                name="date"
                value={date}
                required
                onChange={this.handleChange}
              />

              <button className="submit-btn" type="submit">
                Book Test
              </button>
            </form>
          ) : (
            <div className="success-card">
              <h3>Booking Confirmed 🎉</h3>
              <p>Thank you, <b>{name}</b>!</p>
              <p>Our field expert will contact you shortly.</p>
              <p><b>Visit Date:</b> {date}</p>
              <p><b>Village:</b> {village}</p>

              <button
                className="home-btn"
                onClick={() => window.location.href = "/"}
              >
                Go to Home
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default BookPHTest;
