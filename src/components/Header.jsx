import styled from "styled-components";

const Section = styled.section`
  padding: 7rem 0;
`;
const Subheading = styled.p`
  font-size: 1.75rem;
  margin: 1.5rem 0 1.75rem 0;
`;
const Email = styled.a`
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
          <h1 className="display-1 fw-bold">Academy</h1>
          <Subheading>
            Over one million designers — from freelancers, to some of the
            largest companies in the world — use Singular to transform their
            ideas into incredible products, every day.
          </Subheading>
          <Email>
              academy@singular.com
          </Email>
        </div>
      </div>
    </Section>
  );
};

export default Header;
