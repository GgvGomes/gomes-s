import { FaBars } from "react-icons/fa";
import { useState } from "react";

import "../../styles/header.scss";

const BaseUrl =
  window.location.href.indexOf("localhost") != -1
    ? "./src/assets/"
    : "https://github.com/GgvGomes/gomes-s/blob/master/src/assets/";
const localHost =
  window.location.href.indexOf("localhost") != -1 ? true : false;

export function Header() {
  const [visible, setVisible] = useState("hidden");

  const menu = document.querySelector(".menu_items");

  const handleVisible = () => {
    setVisible("hidden");
  }

  return (
    <div className="grid-header">
      <nav>
        <div className="profile">
          <img src={`${BaseUrl}me.jpeg${localHost ? '' : '?raw=true'}`} alt="" />
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

        <div
          className="menu_bar"
          onClick={() => {
            setVisible("visible");
            
            if (menu?.classList.contains("visible")) {
              window.addEventListener("click", handleVisible, true);
            } else {
              setVisible("visible");
              document.removeEventListener(
                "click",
                handleVisible,
                true
              );
            }
          }}
        >
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
