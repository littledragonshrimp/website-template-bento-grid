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
          <li>
            <a href="https://www.google.com/maps/place/12404+Park+Central+Dr+%23225s,+Dallas,+TX+75251/data=!4m2!3m1!1s0x864c206a0f29e9c3:0x43dce6e63074a0b0?sa=X&ved=2ahUKEwjSuvr78_-BAxUwhIkEHV9QDwAQ8gF6BAgVEAA&ved=2ahUKEwjSuvr78_-BAxUwhIkEHV9QDwAQ8gF6BAgWEAI">
              12404 PARK CENTRAL DR #250-S, DALLAS, TX 75251
            </a>
          </li>

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
