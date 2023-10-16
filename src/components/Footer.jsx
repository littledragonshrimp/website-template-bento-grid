import React from "react";
import "../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footerContainer">
        <div className="line"></div>
        <ul className="footerUL">
          <li>
            <a href="/">RESERVE CAPITAL PARTNERS </a>
          </li>
          <span>|</span>
          <li>12404 PARK CENTRAL DR #250-S </li>
          <span>|</span>
          <li>DALLAS, TX 75251 </li>
          <span>|</span>
          <li>(214) 983-1360</li>
        </ul>
        <p className="copyright">
          © Copyright {year} Reserve Capital Partners. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
