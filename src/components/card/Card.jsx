import "./style.scss";
import beach from "../../assets/images/beach.jpg";

const Card = ({ results }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((result) => {
      let { id, name } = result;
      return (
        <div className="card" key={id}>
          <div className="card-container">
            <div className="section-image">
              <img src={result.image} alt="image of rick" />
            </div>
            <h3 className="text-name">{name}</h3>
            <span className="text-human">{result.species}</span>
            <h4 className="text-location">{result.location.name}</h4>
          </div>
        </div>
      );
    });
  } else {
    display = "No characters found 😐";
  }

  return <div>{display}</div>;
};

export default Card;
