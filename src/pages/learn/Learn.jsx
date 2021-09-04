import Learn_section from "../../components/Learn_section";
import Header from "../../components/Header";
import Mail_list from '../../components/Mail_list'

const Learn = () => {
  return (
    <div className="container">
      <Header />
      <Learn_section
        img1="./images/learn/browse1.png"
        img2="./images/learn/browse2.png"
        img3="./images/learn/browse3.png"
      />
      <Learn_section
        img1="./images/learn/browse4.png"
        img2="./images/learn/browse5.png"
        img3="./images/learn/browse6.png"
      />
      <Learn_section
        img1="./images/learn/browse7.png"
        img2="./images/learn/browse8.png"
        img3="./images/learn/browse9.png"
      />
      <Mail_list />
    </div>
  );
};

export default Learn;
