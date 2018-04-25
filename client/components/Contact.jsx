import React, { Component } from "react";
import "../css/Contact.css";


class Contact extends Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <div>
        <form method="POST" action="https://formspree.io/rbern412@gmail.com">
          <input name="name" placeholder="Your name" type="name"/>
          <input name="email" placeholder="Your email" type="email"/>
          <textarea name="message" placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
        </div>
      </div>
    );
  }
}

export default Contact;
