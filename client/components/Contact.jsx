import React, { Component } from "react";
import "../css/Contact.css";


class Contact extends Component {
  render() {
    return <div>
        <div className="content">
          <h2>GET IN TOUCH</h2>
          ​<div className="social">
            <a href="https://github.com/RachetRalph" target="_blank">
              <img src="https://s25.postimg.cc/d556cxu57/social-github-outline.png" alt="social-github-outline" />
            </a> <a href="https://www.linkedin.com/in/ralphandrade/" target="_blank">
              <img src="https://s25.postimg.cc/xpa0bfhm3/social-linkedin-outline.png" alt="social-linkedin-outline" />
            </a> <a href="https://twitter.com/rachetralph88?lang=en" target="_blank">
              <img src="https://s25.postimg.cc/4a4c2exmz/social-twitter-outline.png" alt="social-twitter-outline" />
            </a>
          </div>
          
          <form method="POST" action="https://formspree.io/rbern412@gmail.com" className="formie">
            <input name="name" placeholder="Your name" type="name" autofocus />
            <input name="email" placeholder="Your email" type="email" required />
            <textarea name="message" placeholder="Your message" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>;
  }
}

export default Contact;
