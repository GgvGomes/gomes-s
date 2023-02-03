import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

import "../../styles/header.scss";

export function Header() {
  const [visible, setVisible] = useState("hidden");

  const menu = document.querySelector(".menu_items");
  // else{
  //   document.addEventListener("click", () => {})
  // }

  // useEffect(() => {
  //   document.removeEventListener("click", () => {});
  // });

  const handleVisible = () => {
    setVisible("hidden");
  }

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
