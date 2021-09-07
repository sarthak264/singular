import styled from "styled-components";

const Card = styled.div`
  border: 3px solid black;
  border-radius: 1rem;
  padding: 3.5rem 3rem 1.75rem 3rem;
  @media screen and (max-width: 576px){
    padding: 2rem 1rem 1rem 1rem;
  }
`;
const Heading = styled.h2`
  font-weight: 600 !important;
`;
const Lead = styled.p`
  font-weight: 600;
`;
const PriceTag = styled.h1`
  font-size: 3.75rem;
  font-weight: 600;
  display: inline-block;
  @media screen and (max-width: 576px){
    font-size: 2.5rem;
  }
  `;
const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 576px){
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;
const List = styled.li`
  position: relative;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  ::before {
    position: absolute;
    top: 0.4rem;
    left: -2rem;
    content: "";
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    border: 2px solid black;
  }
  @media screen and (max-width: 576px){
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
    ::before{
      height: 0.75rem;
      width: 0.75rem;
      left: -1.2rem;
      top: 0.45rem;
    }
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 1.25rem;
  margin-top: 3rem;
  background-color: #ff6363;
  font-size: 1.5rem;
  color: white;
  font-weight: 600 !important;
  border-radius: 0.5rem;
  @media screen and (max-width: 576px){
    font-size: 1.25rem;
    padding: 0.5rem;
    margin-top: 1rem;
  }
`;

const Price = () => {
  return (
    <Card className="text-black">
      <Heading className="fw-bold">Single License</Heading>
      <Lead className="lead">A pay-once license, just for you</Lead>
      <hr />
      <PriceContainer>
        <PriceTag className="mb-0">$44</PriceTag>
        <p className="lead mb-1"> / MO</p>
      </PriceContainer>
      <ul>
        <List>Unlimited Support</List>
        <List>Unlimited Support</List>
        <List>Unlimited Support</List>
        <List>Unlimited Support</List>
        <List>Unlimited Support</List>
      </ul>
      <Button>Subscribe Now</Button>
      <p className="mt-2 mt-sm-4 text-center mb-0">Fully featured 30-day free trial</p>
    </Card>
  );
};

export default Price;
