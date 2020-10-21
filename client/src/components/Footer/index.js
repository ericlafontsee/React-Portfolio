import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer id="sticky-footer" class="fixed-bottom text-center text-dark">
    <p>&copy; 2020 Eric LaFontsee</p>
    <a href="https://www.instagram.com/eric_lafontsee/?hl=en" target="_blank" rel="noopener noreferrer"><i
    class="ficon fab fa-instagram fa-2x mx-2 my-1"></i></a>
    <a href="https://www.facebook.com/eric.lafontsee" target="_blank" rel="noopener noreferrer"><i
    class="ficon fab fa-facebook fa-2x mx-2 my-1"></i></a>
    <a href="https://www.linkedin.com/in/eric-lafontsee-a2b65a6b/" target="_blank" rel="noopener noreferrer"><i
    class="ficon fab fa-linkedin-in fa-2x mx-2 my-1"></i></a>
    <a href="https://github.com/ericlafontsee" target="_blank" rel="noopener noreferrer"><i class="ficon fab fa-github fa-2x mx-2 my-1"></i></a>
</footer>
  );
}

export default Footer;
