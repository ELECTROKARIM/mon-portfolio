import React, { useEffect } from 'react';

const sectionStyle = {
  padding: '2em',
  backgroundColor: '#f9f9f9',
  backgroundImage: 'url("https://th.bing.com/th/id/OIP.eTIEWPDnTxLNlMs9lDKz6QHaHa?w=183&h=183&c=7&r=0&o=5&pid=1.7")',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '0 auto',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  marginBottom: '1em',
  padding: '0.5em',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  ...inputStyle,
  height: '100px',
};

const buttonStyle = {
  padding: '0.7em',
  backgroundColor: '#333',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

function Contact() {
  useEffect(() => {
    document.body.style.backgroundImage = 'url("https://th.bing.com/th/id/OIP.2oiZkK0xRQ3EOOLMLd8ROwHaFj?w=244&h=183&c=7&r=0&o=5&pid=1.7")';
    document.body.style.backgroundPosition = 'center';


    return () => {
      // Clean up background styles on component unmount
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
    };
  }, []);

  return (
    <section style={sectionStyle}>
      <h2>Contact</h2>
      <p>Contactez-moi via le formulaire ci-dessous.</p>
      <form style={formStyle}>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" style={inputStyle} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" style={inputStyle} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" style={textareaStyle} />
        <button type="submit" style={buttonStyle}>Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
