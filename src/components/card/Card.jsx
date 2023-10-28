import Tilt from "react-parallax-tilt";
import "./style.scss";

const Card = ({ results }) => {
  let display;

  if (results) {
    display = results.map((result) => {
      let { id, name } = result;
      return (
        <div key={id}>
          <Tilt className="card-container">
            <div className="section-image">
              <img src={result.image} alt="image of rick" />
            </div>
            <h3 className="text-name">{name}</h3>
            <div className="text-human">
              {(() => {
                if (result.status === "Dead") {
                  return (
                    <span
                      className="stats"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "red",
                      }}
                    >
                      {result.status}
                    </span>
                  );
                } else if (result.status === "Alive") {
                  return (
                    <span
                      className="stats"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "green",
                      }}
                    >
                      {result.status}
                    </span>
                  );
                } else {
                  return (
                    <span
                      className="stats"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "grey",
                      }}
                    >
                      {result.status}
                    </span>
                  );
                }
              })()}
              &nbsp;
              {result.species}
            </div>
            <h4 className="text-location">{result.location.name}</h4>
          </Tilt>
        </div>
      );
    });
  } else {
    display = "No characters found 😐";
  }

  return <div className="card">{display}</div>;
};

export default Card;
