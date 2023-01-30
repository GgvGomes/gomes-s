import "../../styles/home.scss";

export function Home() {
  return (
    <div className={`grid-content grid-home home`} id="home">
      <div className="first-grid">
        <div className="title">
          <h1>Hello, I'm Mrs. Gomes</h1>
        </div>

        <span className="text">
          Welcome to my website, here you will see some information and
          creations my.
          <br /> <br /> Well, I hope you like what you see, if you don't, you
          can let me know that I will try to improve.
          <br /> Alright, now I'll give you an introduction about myself:
          <br /> <br />I am a programmer, web developer. Started to study
          programming since I was 14 with my brother, nowadays I already work
          with that and I have more affinity with the front-end. I can also
          provide digital investigation or other security-related services on
          the network, such as an intelligence report.
        </span>
      </div>

      <div className="list">
        <span className="second">
          <b>Some of my skills are these:</b>
          <ul>
            <li>
              Web Developer:
              <ul>
                <li>HTML</li> <li>Css</li> <li>JavaScript</li> <li>React</li>
                <li>PHP</li> <li>C#</li>
              </ul>
            </li>
            <li>Database</li>
            <ul>
              <li>SQL</li> <li>GraphQL</li>
            </ul>
            <li>Digital Investigation</li>
            <ul>
              <li>OSINT</li> <li>Intelligence report</li>
            </ul>
          </ul>
        </span>
      </div>
    </div>
  );
}
