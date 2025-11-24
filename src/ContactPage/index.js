import Header from "../Header"
import './index.css'

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you — reach out with questions, feedback, or collaboration ideas!</p>
      </section>

      <section className="contact-info">
        <div className="info-card">
          <h3>📍 Our Location</h3>
          <p>FarmHub HQ, Hyderabad, India</p>
        </div>
        <div className="info-card">
          <h3>📧 Email</h3>
          <p>support@farmhub.in</p>
        </div>
        <div className="info-card">
          <h3>📞 Phone</h3>
          <p>+91 xxxxxxxxxx</p>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default ContactPage
