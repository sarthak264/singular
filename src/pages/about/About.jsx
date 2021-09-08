import "./about.css";
import Mail_list from "../../components/Mail_list";
import { Members } from "../../components/Members";

const About = () => {
  return (
    <div className="about_us">
      <section className="banner-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="display-1 fw-bold text-black">Humble Start</h1>
              <h1 className="display-5 fw-bold red-heading mb-4">
                Explore new ways to engage with brands
              </h1>
              <p className="mb-3 mb-lg-4">
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because. Nor
                again is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but because.
              </p>
              <p>
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because. Nor
                again is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but because.
              </p>
            </div>
            <div className="col-md-9 col-lg-6 px-4 pb-0 pb-lg-5 mt-4 mt-lg-auto">
              <img
                src="./images/about us/about-banner.svg"
                alt="simple philosophy"
                className="image"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="trusted-industry">
        <div className="container text-center">
          <p className="text-muted">Trusted by industry leaders</p>
          <div class="row justify-content-center">
            <div className="col-4 col-md-2">
              <img src="./images/about us/nike.svg" alt="industry brand" />
            </div>
            <div className="col-4 col-md-2">
              <img src="./images/about us/visa.svg" alt="industry brand" />
            </div>
            <div className="col-4 col-md-2">
              <img src="./images/about us/cocacola.svg" alt="industry brand" />
            </div>
            <div className="col-4 col-md-2">
              <img src="./images/about us/google2.svg" alt="industry brand" />
            </div>
            <div className="col-4 col-md-2">
              <img src="./images/about us/disnep.svg" alt="industry brand" />
            </div>
          </div>
        </div>
      </div>
      <section className="banner-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="lh-1 fw-bold text-black display-5">
                Humble begenings.
              </h1>
              <h1 className="lh-1 fw-bold text-black display-5 mb-4 mb-lg-5">
                Simple philosophy.
              </h1>
              <p className="mb-3 mb-lg-4">
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because. Nor
                again is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but because.
              </p>
              <p>
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because. Nor
                again is there anyone who loves or pursues or desires to obtain
                pain of itself, because it is pain, but because.
              </p>
            </div>
            <div className="col-md-9 col-lg-6 px-4 mt-4 mt-lg-0">
              <img
                src="./images/about us/simple-philosophy.svg"
                alt="simple philosophy"
                className="image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="team">
        <div className="container">
          <h1 className="fw-bold mb-5 text-black">Team members</h1>
          <div className="row">
            {Members.map((item, index) => {
              return (
                <div key={index} className="col-6 col-md-4 col-xl-3 mb-5">
                  <div className="img_container mb-2">
                    <img src={item.image} alt="member" />
                    <div className="overlay">
                      <button>
                        <img src="./images/about us/behance.svg" alt="social" />
                      </button>
                      <button>
                        <img
                          src="./images/about us/dribbble.svg"
                          alt="social"
                        />
                      </button>
                      <button>
                        <img src="./images/about us/twitter.svg" alt="social" />
                      </button>
                    </div>
                  </div>
                  <p className="lead text-black mb-0">{item.name}</p>
                  <p className="small">Community</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="container">
        <Mail_list />
      </div>
    </div>
  );
};

export default About;
