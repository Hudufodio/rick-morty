import * as BsIcons from "react-icons/bs";
import Card from "../card/Card";
import "./styles.scss";

const Body = () => {
  let api = "https://rickandmortyapi.com/api";
  return (
    <div className="body-container">
      <div className="searchbar">
        <input
          type="text"
          name=""
          className="query"
          placeholder="find a character"
        />
        <div className="icon">
          <BsIcons.BsSearch className="lens" />
        </div>
      </div>
      <div className="card-compo">
        <Card />
        <div className="btn-group">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
