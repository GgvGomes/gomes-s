import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

import "../../styles/header.scss";

export function Header() {
  const [visible, setVisible] = useState("hidden");

  return (
    <div className="grid-header">
      <nav>
        <div className="profile">
          <img src="src/assets/me.jpeg" alt="" />
        </div>

        <div className="header_item">
          <a href="#home">Home</a>
        </div>
        <div className="header_item">
          <a href="#about">About</a>
        </div>
        <div className="header_item">
          <a href="#contact">Contact</a>
        </div>
        <div className="header_item">
          <a href="#projects">Projects</a>
        </div>

        <div className="menu_bar" onClick={() => setVisible('visible')}>
          <FaBars size={20} />
        </div>

        <div className={`menu_items ${visible}`}>
          <div className="header_item">
            <a href="#home">Home</a>
          </div>
          <div className="header_item">
            <a href="#about">About</a>
          </div>
          <div className="header_item">
            <a href="#contact">Contact</a>
          </div>
          <div className="header_item">
            <a href="#projects">Projects</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
