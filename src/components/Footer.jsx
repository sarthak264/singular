import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container" id="footer_container">
        <div className="col">
          <h3>Product</h3>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Integrations</a>
          </li>
          <li>
            <a href="/">Plugins</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Updates</a>
          </li>
        </div>
        <div className="col">
          <h3>Learn</h3>
          <li>
            <a href="/">Get Started</a>
          </li>
          <li>
            <a href="/">Courses</a>
          </li>
          <li>
            <a href="/">Academy</a>
          </li>
          <li>
            <a href="/">Community</a>
          </li>
          <li>
            <a href="/">Members</a>
          </li>
        </div>
        <div className="col">
          <h3>About</h3>
          <li>
            <a href="/">Who are we</a>
          </li>
          <li>
            <a href="/">Jobs</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
          <li>
            <a href="/">Philosophy</a>
          </li>
        </div>
        <div className="col">
          <h3>Legal</h3>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Terms & conditions</a>
          </li>
          <li>
            <a href="/">License</a>
          </li>
          <li>
            <a href="/">Copyright</a>
          </li>
          <li>
            <a href="/">Fair Use</a>
          </li>
        </div>
        <div className="col">
          <h3>Social</h3>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Product Hunt</a>
          </li>
          <li>
            <a href="/">Dribble</a>
          </li>
        </div>
      </div>
      <div className="container">
        <hr />
        <p className="small text-center text-muted">© 2021 Singular LLC.</p>
      </div>
    </footer>
  );
};

export default Footer;
