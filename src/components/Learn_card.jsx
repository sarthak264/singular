import styled from "styled-components";

const Card = styled.div`
  position: relative;
  padding: 2rem;
  height: 350px;
  background-color: #f8f8f8;
  border: 1px solid #e1e1e1;
  border-radius: 0.5rem;
`;
const Tag = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem 1.25rem;
  background-color: #fff;
  border-radius: 2rem;
`;
const Caption = styled.h4`
  font-weight: 600;
`

const Learn_card = (props) => {
  return (
      <>
    <Card className="mb-4 d-flex align-items-center justify-content-center">
      <img src={props.img} alt="learn card img" />
      <Tag>
          32m
      </Tag>
    </Card>
    <Caption>{props.title}</Caption>
    </>
  );
};

export default Learn_card;
