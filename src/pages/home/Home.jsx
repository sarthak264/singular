import "./home.css";
import Mail_list from "../../components/Mail_list";
import Cta from "../../components/Cta";
import Price from "../../components/Price";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <section className="price">
        <h1 className="fw-bold text-black display-5">Simple pricing</h1>
        <p className="lead text-black mb-3 mb-md-5">
          A pay-once license, just for you
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 mb-5 mb-lg-0">
            <Price />
          </div>
          <div className="col-md-8 col-lg-6">
            <Price />
          </div>
        </div>
      </section>
      <hr className="below_price" />
      <Cta title="Need a custom plan?" button="Request Quote" />
      <p className="small mt-3 col-lg-5 text-muted below_cta">
        Get another year of app updates and saving to Cloud. Or continue using
        the Mac app No pressure.
        <Link to="/" id="learn_more">
          Learn More
        </Link>
      </p>
      <Mail_list />
    </div>
  );
};

export default Home;
