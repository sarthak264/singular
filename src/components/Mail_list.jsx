import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background-color: #ff6363;
  padding: 3rem 4rem;
  color: white;
  border-radius: 1rem;
  margin-top: 2rem;
  margin-bottom: 8rem;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding: 3rem 2rem;
    margin-bottom: 4.5rem;
  }
  @media screen and (max-width: 576px) {
    padding: 3rem 0rem;
  }
`;
const InputContainer = styled.div`
  background-color: #fff;
  border-radius: 0.3rem;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
  display: flex;
`;
const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1.25rem;
  flex-grow: 1;
  width: 100%;
  ::placeholder {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 576px) {
    flex-grow: 0;
  }
`;
const Small = styled.p`
  font-size: 1rem;
`;
const Address = styled.a`
  font-size: 1rem;
  color: white;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 0.25rem;
  padding: 0.25rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateX(0.75rem);
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
const Blackbtn = styled.button`
  background-color: black;
  color: white;
  width: 100%;
  padding: 1.5rem 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  @media screen and (min-width: 991px) {
    display: none;
  }
`;
const Image = styled.img`
  width: 55%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -10%;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const Mail_list = () => {
  return (
    <Container
      className="container"
      data-aos="fade-right"
      data-aos-delay="400"
      data-aos-duration="1200"
      data-aos-offset="100"
    >
      <div className="row px-4">
        <div className="col-md-12 col-lg-6">
          <h1 className="display-3 fw-bolder mb-4">Join our mailing list</h1>
          <InputContainer>
            <Input type="text" placeholder="Email address" />
            <Button>
              <img src="./images/svg/right-arrow.svg" alt="submit" />
            </Button>
          </InputContainer>
          <Blackbtn>Join me</Blackbtn>
          <Small className="mb-0">
            By joining to our newsletter you’re agreeing to our
            <Address> Terms & Conditions</Address>
          </Small>
        </div>
        <Image src="./images/svg/maillist-bg.svg" alt="mail list bg" />
      </div>
    </Container>
  );
};

export default Mail_list;
