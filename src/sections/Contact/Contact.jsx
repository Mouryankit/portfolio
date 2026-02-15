import "./Contact.css";
import { FaEnvelope } from "react-icons/fa";


const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* Heading */}
        <h2 className="contact-heading section-heading">
          <FaEnvelope className="section-icon" />&nbsp;
          Get In <span>Touch . .</span>
        </h2>

        <p className="contact-subtitle">
          Have a project in mind, looking for collaboration, or just want to connect?
          Let’s build something amazing together.
        </p>

        {/* Content */}
        <div className="contact-content">

          {/* Left Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>

            <p className="contact-info-item">
              <strong>Email:</strong> mourya.ankit1612@gmail.com
            </p>

            <p className="contact-info-item">
              <strong>Location:</strong> India, Madhya Pradesh, Indore
            </p>

            <p className="contact-info-text">
              I’m always open to exploring new opportunities, freelance collaborations, and innovative ideas.
            </p>
          </div>

          {/* Right Form */}
          <form className="contact-form" action="mailto:mourya.ankit1612@gmail.com" method="post" encType="text/plain">
            <div className="form-group">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows="5"
                name="message"
                required
              />
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
