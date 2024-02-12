import { IconButton } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>kaneeshkaneesh840@gmail.com</span>
        </p>
        <p>
          Github Username : <span>@kanishku</span>
        </p>
        <div className="contact__icons">
          <a
            href="www.linkedin.com/in/kanish-kumar-k-u-1a7a04233"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100049328148248&mibextid=2JQ9oc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/kanish_k_u?igsh=MXd6bzcwejhqaWxyZw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
