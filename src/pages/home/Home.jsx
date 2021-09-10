import "./home.css";
import Mail_list from "../../components/Mail_list";
import Cta from "../../components/Cta";
import Price from "../../components/Price";
import Home_card from "../../components/Home_card";
import { Integrationlist } from "./../../components/Integrations";
import { Link } from "react-router-dom";

const Home = () => {
  const Integrations = Integrationlist.slice(0, 9);
  return (
    <>
      <header className="home_header">
        <img src="./images/svg/banner-bg.svg" alt="" className="header_bg" />
        <img src="./images/svg/mobile-banner-right.svg" alt="" className="mobile_right" />
        <img src="./images/svg/mobile-banner-left.svg" alt="" className="mobile_left" />
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-black">
              <h1
                className="display-1 fw-bold mb-3 mb-sm-4 heading"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                Supercharge your design talks
              </h1>
              <h3
                className="sub_heading"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                On the other hand, we denounce with righteous indignation and
                dislike men who are
              </h3>
              <div className="button_row">
                <button
                  className="red_btn"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="150"
                >
                  Try for free
                </button>
                <button
                  className="black_btn"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="150"
                  data-aos-offset="0"
                >
                  See Pricing
                </button>
              </div>
              <p
                className="small text-muted mt-3 mt-sm-4 mb-0"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="150"
              >
                Fully featured free 30-day free trial
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="gray_area">
        <div className="container video_wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1
                className="display-5 fw-bold text-black"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                We love to explore new ways to engage with brands and reach
              </h1>
              <p
                className="lead px-5 mb-3 mb-sm-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because.
              </p>
              <div className="video_container">
                <img
                  src="./images/svg/video-poster.svg"
                  className="video_thumbnail"
                  alt="video thumbnail"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="350"
                />
                <img
                  src="./images/svg/play-icon.svg"
                  alt="video thumbnail"
                  className="play_icon"
                  data-aos="fade-left"
                  data-aos-duration="1100"
                  data-aos-delay="550"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="brands top_padding">
          <div className="row">
            <div
              className="col-lg-6 content mb-4 mb-sm-5 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="1100"
              data-aos-delay="350"
            >
              <div className="rounded-pill">100+ Integrations</div>
              <h1 className="display-5 fw-bold text-black">
                We love to explore new ways to engage with brands and reach
              </h1>
              <p className="lead">
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because.
              </p>
              <div className="link_container">
                <Link to="/" className="red_link">
                  View all integrations
                </Link>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 25 12"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Color</title>
                  <g
                    id="⚙️-Symbols"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Icon/Arrow"
                      transform="translate(-4.000000, -9.000000)"
                      fill="#ff6363"
                    >
                      <polygon
                        id="Color"
                        points="20.9655172 9 19.7227586 10.2427586 24.6351724 15.1551724 18.4648438 15.1551724 4 15.1551724 4 16.9137931 24.6351724 16.9137931 19.7227586 21.8262069 20.9655172 23.0689655 28 16.0344828"
                      ></polygon>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div
              className="col-lg-6 p-4"
              data-aos="fade-left"
              data-aos-duration="1100"
              data-aos-delay="350"
            >
              <img src="./images/svg/brands-reach.svg" alt="brands reach" />
            </div>
          </div>
        </section>
      </div>
      <div className="gray_area">
        <div className="container">
          <section className="brands">
            <div className="row">
              <div
                className="col-lg-6 content mb-4 mb-sm-5 mb-lg-0"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="350"
              >
                <div className="rounded-pill">100+ Integrations</div>
                <h1 className="display-5 fw-bold text-black">
                  We love to explore new ways to engage with brands and reach
                </h1>
                <p className="lead">
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain, but because.
                </p>
                <div className="link_container">
                  <Link to="/" className="red_link">
                    View all integrations
                  </Link>
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 25 12"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Color</title>
                    <g
                      id="⚙️-Symbols"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Icon/Arrow"
                        transform="translate(-4.000000, -9.000000)"
                        fill="#ff6363"
                      >
                        <polygon
                          id="Color"
                          points="20.9655172 9 19.7227586 10.2427586 24.6351724 15.1551724 18.4648438 15.1551724 4 15.1551724 4 16.9137931 24.6351724 16.9137931 19.7227586 21.8262069 20.9655172 23.0689655 28 16.0344828"
                        ></polygon>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div
                className="col-lg-6 p-4"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="450"
              >
                <div className="row">
                  {Integrations.map((item, index) => {
                    return (
                      <div key={index} className="col-6 col-sm-4">
                        <div className="cards">
                          <img src={item.image} alt="company" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <section className="cards_container">
            <div className="row justify-content-center">
              <h1
                className="col-lg-8 fw-bold text-black heading text-center display-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                We love to explore new ways to engage with brands and reach
              </h1>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-md-8 col-lg-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="450"
              >
                <Home_card theme="red" image="./images/svg/cloud.svg" />
              </div>
              <div
                className="col-md-8 col-lg-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="450"
              >
                <Home_card
                  theme="normal"
                  image="./images/svg/browser.svg"
                  margin="true"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="testimonial">
        <div className="container text-white">
          <h4 className="mb-4 mb-sm-5 upper">What industry leaders think</h4>
          <h1 className="display-5">
            “Singular is an exceptional tool for design collaboration,
            developers can easily communicate with designers in ways we never
            anticipated”
          </h1>
          <hr className="text-muted" />
          <div className="profile d-flex align-items-center">
            <img src="./images/svg/oval.svg" alt="user" className="me-4" />
            <div className="profile_details">
              <h4 className="mb-1 fw-bold">Mark Lee</h4>
              <h4 className="mb-2">Head of design</h4>
              <img src="./images/svg/lenova.svg" alt="user" />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="price">
          <h1
            className="fw-bold text-black display-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            Simple pricing
          </h1>
          <p
            className="lead text-black mb-3 mb-md-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            A pay-once license, just for you
          </p>
          <div className="row justify-content-center">
            <div
              className="col-md-8 col-lg-6 mb-5 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="450"
            >
              <Price />
            </div>
            <div
              className="col-md-8 col-lg-6"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="450"
            >
              <Price />
            </div>
          </div>
        </section>
        <hr className="below_price" />
        <Cta title="Need a custom plan?" button="Request Quote" />
        <p
          className="small mt-3 col-lg-5 text-muted below_cta"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="250"
        >
          Get another year of app updates and saving to Cloud. Or continue using
          the Mac app No pressure.
          <Link to="/" id="learn_more">
            Learn More
          </Link>
        </p>
        <Mail_list />
      </div>
    </>
  );
};

export default Home;
