import "./styles/card.css";

const Home_card = (props) => {
  return (
    <div className={`supercharge text-center ${props.theme} ${props.margin} `}>
      <img src={props.image} alt="" />
      <h1 className="fw-bold mt-5">Supercharge your design process</h1>
      <p className="lead mt-3">
        Nor again is there anyone who loves or pursues or desires to obtain pain
        of itself, because it is pain, but because.
      </p>
    </div>
  );
};

Home_card.defaultProps = {
  margin: "false",
};

export default Home_card;
