import "../../styles/header.scss";

export function Header() {
  return (
    <div className="grid-header">
      <nav>
        <div className="profile">
          <img src="src/assets/me.jpeg" alt="" />
        </div>

        <div className="header_item">
          <span>Home</span>
        </div>
        <div className="header_item">
          <span>About</span>
        </div>
        <div className="header_item">
          <span>Contact</span>
        </div>
        <div className="header_item">
          <span>Projects</span>
        </div>
      </nav>
    </div>
  );
}
