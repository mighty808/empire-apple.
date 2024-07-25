import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact-form">
      <h1 className="heading">Get In Touch!</h1>
      <p className="para">
        Reach out to us to enquire about any product and locate us to get your product !
      </p>

      <div className="contactForm">
        <form action="#">
          <h1 className="sub-heading">Need Support !</h1>
          <p className="para para2">Contact us for a quote , help to join the them.</p>
          <input type="text" className="input" placeholder="your name" />
          <input type="text" className="input" placeholder="your email" />
          <input type="text" className="input" placeholder="your Subject" />
          <textarea className="input" cols="30" rows="5" placeholder="Your message..."></textarea>
          <input type="submit" className="input submit" value="Send Message" />
        </form>

        <div className="map-container">
          <div className="mapBg"></div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.798530565566!2d-1.5644591255128761!3d6.671868093323213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb95816b63349f%3A0xa2393c04e8c38803!2sEmpire%20Applestore!5e0!3m2!1sen!2set!4v1721338759694!5m2!1sen!2set"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="contactMethod">
        <div className="method">
          <i className="fa-solid fa-location-dot contactIcon"></i>
          <article className="text">
            <h1 className="sub-heading">Location</h1>
            <p className="para">KNUST Ayeduase Adjacent p3 hostel Kumasi, Ghana</p>
          </article>
        </div>

        <div className="method">
          <i className="fa-solid fa-envelope contactIcon"></i>
          <article className="text">
            <h1 className="sub-heading">Email</h1>
            <p className="para">empireapple@gmail.com</p>
          </article>
        </div>

        <div className="method">
          <i className="fa-solid fa-phone contactIcon"></i>
          <article className="text">
            <h1 className="sub-heading">Phone</h1>
            <p className="para">+233 (0)55 438 3618</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
