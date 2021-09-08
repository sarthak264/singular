import "./integration.css";
import Header from "./../../components/Header";
import Cta from "./../../components/Cta";
import Mail_list from "./../../components/Mail_list";
import {Integrationlist} from "./../../components/Integrations";

const Integration = () => {
  return (
    <div className="container">
      <Header />
      <div id="list_wrapper">
        <h1 className="display-5 text-black fw-bold mb-4 mb-lg-5">
          Companies with Integrations
        </h1>
        <div className="row">
          {Integrationlist.map((item,index) => {
            return (
              <div key={index} className="col-6 col-sm-4 col-lg-2">
                <div className="cards">
                  <img src={item.image} alt="company" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="cta-wrapper">
        <Cta title="Join 100+ great companies" button="Apply"/>
      </div>
      <div id="mail-wrapper">
          <Mail_list />
      </div>
    </div>
  );
};

export default Integration;
