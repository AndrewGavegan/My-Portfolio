import React, { useState } from 'react';
import { isValidEmail } from '../../helper';

// refer to form part of student mini project week 20 //
function Contact() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hasError, setError] = useState('');

  // pasing in state change arguements and running if statements agaisnt each input field to set the answer as the value inside the field //
  const handleChange = (e) => {
    const { target } = e;
    const type = target.name;
    const value = target.value;
    if (type === 'user') {
      setUser(value);
    } else if (type === 'email') {
      setEmail(value);
    } else {
      setMessage(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // handled submit, now to make sure all fields have something typed in them //
    if (!user) {
      setError('Please enter your name');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!message) {
      setError('Please enter a message');
      return;
    }


    setUser('');
    setEmail('');
    setMessage('');
    setError('Thanks for getting in contact!')
  }




  return (
    <div className="Contact">
      <form id="form">
        <div className="form-group">
          <label for="userInput">Name</label>
          <input value={user} onChange={handleChange} name="user" type="text" className="form-control" id="userInput" placeholder="Please enter your name" />
        </div>
        <div className="form-group">
          <label for="emailInput">Email address</label>
          <input value={email} onChange={handleChange} name="email" type="email" className="form-control" id="emailInput" placeholder="Please enter an email address" />
        </div>
        <div className="form-group">
          <label for="messageInput">Message</label>
          <input value={message} onChange={handleChange} name="message" type="text" className="form-control" id="messageInput" rows="3"></input>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
      </form>

      {hasError && (<div>
        <h4 className="throwError">{hasError}</h4>
      </div>)}

    </div>

  );
}

export default Contact;