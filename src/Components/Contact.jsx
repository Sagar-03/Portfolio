import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
       <div className="contact">
        <h2>Contact Information</h2>
        <span className="Email">Email: sagarjha2004@gmail.com</span>
        <span className="Phone">Phone: 9625382247</span>
      </div>
       
       
      <h2>Send Message Directly</h2>
      {submitted ? (
        <p className="submitted-message">Form has been submitted!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit <FaCheck />
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
