import "./style.scss";

const Card = ({ results }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((result) => {
      let { id, name } = result;
      return (
        <div key={id}>
          <div className="card-container">
            <div className="section-image">
              <img src={result.image} alt="image of rick" />
            </div>
            <h3 className="text-name">{name}</h3>
            <sdiv className="text-human">
              <span className="stats">{result.status}</span>&nbsp;
              {result.species}
            </sdiv>
            <h4 className="text-location">{result.location.name}</h4>
          </div>
        </div>
      );
    });
  } else {
    display = "No characters found 😐";
  }

  return <div className="card">{display}</div>;
};

export default Card;
