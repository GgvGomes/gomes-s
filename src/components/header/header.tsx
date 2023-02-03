import { FaBars } from 'react-icons/fa';

import "../../styles/header.scss";

export function Header() {
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
          <a  href="#contact">Contact</a>
        </div>
        <div className="header_item">
          <a href="#projects">Projects</a>
        </div>

        <div className="menu_bar">
            <FaBars size={20} />
        </div>
      </nav>
    </div>
  );
}
