import styled from "styled-components";

const Button = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  border-radius: 0.5rem 0 0.5rem 0;
  background-color: #ff6363;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.53);
  height: 50px;
  width: 50px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 20px;
  height: 20px;
`;

const Top = () => {
  return (
    <Button className="align-items-center justify-content-center" id="top_btn">
      <Image src="./images/svg/up-arrow.svg" alt="up arrow" />
    </Button>
  );
};

export default Top;
