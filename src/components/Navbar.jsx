import "./styles/navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggle = () => setMenu(!menu);

  return (
    <nav
      className="navbar"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay="50"
    >
      <div className="nav p-0 m-0 w-100">
        <Link to="/">
          <img src="./images/svg/logo.svg" alt="logo" onClick={() => setMenu(false)}/>
        </Link>
        <img
          src="./images/svg/menu-toggle.svg"
          className="toggle"
          alt="menu-toggle"
          onClick={toggle}
        />
        <div className={menu ? "nav-menu show" : "nav-menu"}>
          <ul className="m-0 p-0">
            <li>
              <Link to="/learn" onClick={toggle}>Learn</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggle}>About</Link>
            </li>
            <li>
              <Link to="/integration" onClick={toggle}>Integrations</Link>
            </li>
            <li>
              <Link to="/support" onClick={toggle}>Support</Link>
            </li>
            <li>
              <img src="./images/user-image.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
