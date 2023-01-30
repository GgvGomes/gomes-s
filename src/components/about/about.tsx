import "../../styles/home.scss";

export function About() {
  return (
    <div className={`grid-content grid-home about`} id="about">
      <div className="first-grid">
        <div className="title">
          <h1>About Gomes</h1>
        </div>

        <span className="text">
          My name is Gabriel Gomes, I'm Brazilian. I love technology, I always
          say that the world would not be the same without her.
          <br /> <br />
          Currently I work mainly as web developer, but I'm migrating to the
          security area, my dream has always been to enter this world. But I
          couldn't giving up front-end development for good, I really liked the
          area.
          <br /> <br />
          Well, my hobby is playing the guitar, playing games, reading and
          programming/research/pentest, I have a lot of fun doing these things.
        </span>
      </div>

      <div className="list">
        <span className="second">
          <b>Some certifications/courses:</b>
          <ul>
            <a href="src/assets/curriculo.pdf" download>
              <li>My resume</li>
            </a>
            <a
              href="https://www.linkedin.com/in/gabriel-gomes-vieira-84a040198/"
              target={"_blank"}
            >
              <li>My Linkeedin</li>
            </a>
            <li>
              Courses:
              <ul>
                <li>Cibersecurity</li>
              </ul>
            </li>
            <li>Completed:</li>
            <ul>
              <li>High School - Military College</li>
            </ul>
            <li>Certifications:</li>
            <ul>
              <li>Investigative Hacker</li> <li>Apprentice</li>
            </ul>
          </ul>
        </span>
      </div>
    </div>
  );
}
