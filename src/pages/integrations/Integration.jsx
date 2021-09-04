import "./integration.css";
import Header from "./../../components/Header";
import Integration_cta from "./../../components/Integration_cta";
import Mail_list from "./../../components/Mail_list";

const Integration = () => {
  return (
    <div className="container">
      <Header />
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
