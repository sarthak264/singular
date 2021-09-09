import styled from "styled-components";
import { Link } from "react-router-dom";
const Section = styled.section`
  padding: 7rem 0;
`;
const Subheading = styled.p`
  font-size: 1.75rem;
  margin: 1.5rem 0 1.75rem 0;
`;
const Email = styled(Link)`
  color: #ff6363;
  font-size: 1.75rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #000;
    transition: all 0.3s ease-in-out;
  }
`;

const Header = () => {
  return (
    <Section className="header">
      <div className="text-black">
        <div className="col-12 col-lg-8">
          <h1
            className="display-1 fw-bold"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            Academy
          </h1>
          <Subheading
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="150"
          >
            Over one million designers — from freelancers, to some of the
            largest companies in the world — use Singular to transform their
            ideas into incredible products, every day.
          </Subheading>
          <div
            className="wrapper"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="150"
          >
            <Email>academy@singular.com</Email>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Header;
