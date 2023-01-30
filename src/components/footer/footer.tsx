import { BsInstagram, BsLinkedin, BsCodeSquare } from "react-icons/bs";

import "../../styles/footer.scss";

export function Footer() {
  return (
    <div className="grid-footer">
      <div className="content-footer">
        <div className="left">
          <span>Thank you very much for your attention</span>
          <span>copyright@gomes’s</span>
        </div>

        <div className="rigth">
          <a href="https://www.instagram.com/gomes_gabriel05/" target={"_blank"}>
            <BsInstagram size={16} />
            @gomes_gabriel05
          </a>
          <a href="https://www.linkedin.com/in/gabriel-gomes-vieira-84a040198/" target={"_blank"}>
            <BsLinkedin size={16} />
            Linkedin
          </a>
          <a href="https://tree-link.vercel.app" target={"_blank"}>
            <BsCodeSquare size={16} /> My Link tree
          </a>
        </div>
      </div>
    </div>
  );
}
