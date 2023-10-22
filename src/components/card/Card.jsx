import "./style.scss";
import beach from "../../assets/images/beach.jpg";

const Card = ({ results }) => {

  return (
    <>
      <div className="card">
        <div className="card-container">
          <div className="section-image">
            <img src={beach} alt="image of rick" />
          </div>
          <h3 className="text-name">Morty Smith</h3>
          <span className="text-human">Human</span>
          <h4 className="text-location">Earth</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
