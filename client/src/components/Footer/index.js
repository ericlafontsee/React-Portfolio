import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="text-center text-dark footer">
      <p>&copy; 2020 Eric LaFontsee</p>
      <a
        href="https://www.instagram.com/eric_lafontsee/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
      </a>
      <a
        href="https://www.facebook.com/eric.lafontsee"
        target="_blank"
        rel="noopener noreferrer"
      >
             <FontAwesomeIcon icon={["fab", "facebook"]} />
      </a>
      <a
        href="https://www.linkedin.com/in/eric-lafontsee-a2b65a6b/"
        target="_blank"
        rel="noopener noreferrer"
      >
         <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </a>
      <a
        href="https://github.com/ericlafontsee"
        target="_blank"
        rel="noopener noreferrer"
      >
             <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
    </footer>
  );
}

export default Footer;
