// Contact.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';
import {
  AiOutlineMail,
  AiOutlineSend,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Clear the form fields after submission if needed
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section bg-light py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row>
          {/* Contact Details */}
          <Col md={6} className="contact-details">
            <h3>Contact Information</h3>
            <p>
              <AiOutlineMail /> dilliprasadreddy0000@gmail.com
            </p>
            {/* Add more contact details as needed */}
            <h3>Follow Me</h3>
            <p>
              <AiOutlineSend color="#25D366" />{' '}
              <a href="https://t.me/DIILIPRASAD" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none' }}>
                Telegram
              </a>
            </p>
            <p>
              <AiOutlineTwitter color="#1DA1F2" />{' '}
              <a href="https://twitter.com/DilliPr94518261" target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2', textDecoration: 'none' }}>
                Twitter
              </a>
            </p>
            <p>
              <AiOutlineFacebook color="#1877F2" />{' '}
              <a href="https://www.facebook.com/dilli.prasad.940098" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2', textDecoration: 'none' }}>
                Facebook
              </a>
            </p>
            <p>
              <AiOutlineLinkedin color="#0A66C2" />{' '}
              <a href="https://www.linkedin.com/in/dilli-prasad-m" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', textDecoration: 'none' }}>
                LinkedIn
              </a>
            </p>
            <p>
              <AiOutlineGithub color="#333" />{' '}
              <a href="https://github.com/MDILLIPRASAD" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>
                GitHub
              </a>
            </p>
            <p>
              <AiOutlineInstagram color="#E4405F" />{' '}
              <a href="https://www.instagram.com/_m.dilli_prasad_" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F', textDecoration: 'none' }}>
                Instagram
              </a>
            </p>
          </Col>

          {/* Contact Form */}
          <Col md={6} className="contact-form">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" name="message" value={formData.message} onChange={handleChange} required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
