import "../../styles/contact.scss";

const BaseUrl =
  window.location.href.indexOf("localhost") != -1
    ? "./src/assets/"
    : "https://github.com/GgvGomes/gomes-s/blob/master/src/assets/";
const localHost =
  window.location.href.indexOf("localhost") != -1 ? true : false;

export function Contact() {
  return (
    <div className={`grid-content grid-home contact`} id="contact">
      <div className="title">
        <h1>Gomes's Contact</h1>
      </div>

      <div className="grid-contacts">
        <div className="first-grid">
          <span className="text">
            <b>My contacts:</b>
            <ul>
              <a href="https://discord.com/channels/@me" target={"_blank"}>
                <li>Discord: Gomes_Gabriel#8058</li>
              </a>
              {/* <li>Telegram: @Gomes</li>
                    <li>Twitter: @Gomes</li> */}
              <a href="https://www.instagram.com/gomes_gabriel05/" target={"_blank"}>
                <li>Instagram: @gomes_gabriel05</li>
              </a>
              {/* <li>Facebook: @Gomes</li> */}
              <a href="https://www.linkedin.com/in/gabriel-gomes-vieira-84a040198/" target={"_blank"}>
                <li>Linkedin: Gabriel Gomes Vieira</li>
              </a>
              <a href="https://github.com/GgvGomes" target={"_blank"}>
                <li>GitHub: @GgvGomes</li>
              </a>
            </ul>
          </span>
        </div>

        <div className="list">
          {/* <span className="second"></span> */}
          <img src={`${BaseUrl}all_body.jpeg${localHost ? '' : '?raw=true'}`} alt="" />
        </div>
      </div>
    </div>
  );
}
