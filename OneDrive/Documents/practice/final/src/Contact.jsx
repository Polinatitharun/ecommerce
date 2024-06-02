import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-content">
                <div className="contact-details">
                    <h2>Get in Touch</h2>
                    <div className="contact-info">
                        <p><i className="fas fa-map-marker-alt"></i> <strong>Address:</strong> 1234 Street Name, City, State, 12345</p>
                        <p><i className="fas fa-phone"></i> <strong>Phone:</strong> (123) 456-7890</p>
                        <p><i className="fas fa-envelope"></i> <strong>Email:</strong> info@yourcompany.com</p>
                        <p><i className="fas fa-clock"></i> <strong>Hours:</strong> Mon - Fri: 9am - 5pm</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h2>Contact Form</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Mobile Number</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Suggestion</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
