import "./support.css";
import { SupportList } from "../../components/SupportList";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="container">
      <section className="header">
        <div className="row">
          <div className="col-lg-8">
            <h1
              className="display-1 text-black fw-bold mb-4"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Support
            </h1>
            <h1
              className="fw-bold display-5"
              data-aos="fade-down"
              data-aos-duration="1250"
              data-aos-delay="250"
            >
              Explore new ways to engage with brands and reach
            </h1>
          </div>
        </div>
      </section>
      <section className="support_cards">
        <div className="row">
          {SupportList.map((item, index) => {
            return (
              <div
                className="col-6 col-md-4 col-lg-3 text-center card_container"
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <div className="single_card">
                  <img src={item.image} alt="support card" />
                </div>
                <Link to="/support">Chat with support</Link>
              </div>
            );
          })}
        </div>
      </section>
      <div className="red_line"></div>
      <section className="main_contact">
        <div className="row">
          <div
            className="col-md-6 img_box"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h1 className="display-5 text-black">Still need answers?</h1>
            <img
              src="./images/support/contact-us.svg"
              alt="contact us"
              className="my-5"
            />
            <p className="lead mb-2">
              Happy to help! Give us a call on <Link>+91 556 328 6</Link>
            </p>
            <p className="lead">
              Or drop us a line on <Link>hello@singular.com</Link>
            </p>
          </div>
          <div className="col-md-6 px-3  px-sm-4 pt-4 pt-md-0">
            <div
              className="form_container"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <input type="text" className="mb-4" placeholder="Full Name" />
              <input type="text" className="mb-4" placeholder="Email" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="8"
                placeholder="Message"
              ></textarea>
              <button className="black_btn">Send</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
