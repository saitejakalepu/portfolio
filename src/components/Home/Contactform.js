import {React} from "react";
import emailjs from "emailjs-com";
import { Form , Button} from "react-bootstrap";
import { FiSend } from "react-icons/fi";
import {  toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col} from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contactform() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_kv17n1r', 'template_contactme', e.target, 'Nre4Qs5OSWQgR6uOU')
    .then((result) => {
        toast.success("Email Sent Successfully" ,{position:toast.POSITION.TOP_RIGHT , autoClose:2000});
    }, (error) => {
        toast.warn("Somthing went wrong" ,{position:toast.POSITION.TOP_RIGHT });
    });
    e.target.reset()
}

  return (
      <div md={12} className="home-contact">
          <h1>Contact Me</h1>
          <div className="home-contact-container">
          <ToastContainer />
        <Form className="home-contact-form"  onSubmit={sendEmail}>
        <Form.Group className="mb-3">
        <Form.Label className="home-contact-label">Name</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            name="name"
            required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label  className="home-contact-label">Email address</Form.Label>
          <Form.Control 
              type="email" 
              placeholder="Enter your email"
              name="email"
              required />
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label  className="home-contact-label">Message</Form.Label>
          <Form.Control 
              as="textarea" 
              rows={3}  
              placeholder="Enter your Message"
              name="message"
              required/>
        </Form.Group>
        <Button variant="primary" type="submit" >
            Send <FiSend/>
        </Button>
      </Form>
      </div>
         <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/saitejakalepu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ursssbabu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/saitejakalepu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sai_teja_babu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
  </div>
  );
}

export default Contactform;