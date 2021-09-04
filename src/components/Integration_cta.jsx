import styled from "styled-components";

const Container = styled.div`
  border: 3px solid black;
  border-radius: 0.75rem;
  padding: 3rem 3rem;
  /* margin-top: 8rem; */
`;
const Heading = styled.h1`
  font-size: 40px;
  font-weight: 600;
  @media screen and (max-width: 576px) {
    font-size: 1.25rem;
  }
`;
const Para = styled.p`
  font-size: 1.25rem;
  @media screen and (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
const Button = styled.button`
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  border: 3px solid black;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 3px solid #ff6363;
    background-color: #ff6363;
    color: white;
  }
`;

const Integration_cta = () => {
  return (
    <Container className="container">
      <div className="row">
        <div className="col-md-9">
          <Heading className="text-black">Join 100+ great companies</Heading>
          <Para>Seamless integration with your service</Para>
        </div>
        <div className="col-md-3 d-flex align-items-center">
          <Button className="btn ms-md-auto">Apply</Button>
        </div>
      </div>
    </Container>
  );
};

export default Integration_cta;
