import "./integration.css";
import Header from "./../../components/Header";
import Integration_cta from "./../../components/Integration_cta";
import Mail_list from "./../../components/Mail_list";
import {Integrationlist} from "./../../components/Integrations";

const Integration = () => {
  return (
    <div className="container">
      <Header />
      <div id="list_wrapper">
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
        <Integration_cta />
      </div>
      <div id="mail-wrapper">
          <Mail_list />
      </div>
    </div>
  );
};

export default Integration;
