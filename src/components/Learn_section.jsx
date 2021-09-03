import styled from "styled-components";
import Learn_card from "./Learn_card";

const Section = styled.div`
  padding: 4rem 0;
`;
const Heading_box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
const Links = styled.a`
  color: #ff6363;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #000;
    transition: all 0.3s ease-in-out;
  }
`;

const Learn_section = (props) => {
  return (
    <Section className="container">
      <Heading_box>
        <h1 className="fw-bolder text-black display-6">Basics</h1>
        <Links>Browse all</Links>
      </Heading_box>
      <div className="row justify-content-center justify-content-md-start">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <Learn_card title="Interface Walkthrough" img={props.img1} />
        </div>
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <Learn_card title="Bug Reporting" img={props.img2} />
        </div>
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 mb-lg-0">
          <Learn_card title="Understanding Menus" img={props.img3} />
        </div>
      </div>
    </Section>
  );
};

export default Learn_section;
