import React from "react";

import About from "../pages/About";
import Team from "../pages/Team";
import Hamburger from "./Hamburger";

import logo from "../assets/images/reserveLogo.png";

function Navbar() {
  return (
    <nav>
      {/* <h1 className='Logo'>Logo</h1> */}
      <a href="/">
        <img src={logo} className="reserveLogo" alt="logo" />
      </a>

      <ul>
        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/team">Team</a>
        </li>

        <li>
          <a href="/impact">Impact</a>
        </li>
        <li>
          <a href="https://fundraise.givesmart.com/f/473d/n?vid=zs1p6">
            Donate
          </a>
        </li>
        {/* <li className="nav-divider">|</li> */}
        <li>Contact</li>
      </ul>
      {/* 
      <input
        type="image"
        class="hamburger"
        onclick={openMenu()}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
      /> */}
      <Hamburger />
    </nav>
  );
}

export default Navbar;
