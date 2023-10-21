import * as BsIcons from "react-icons/bs";
import "./styles.scss";

const Body = () => {
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
    </div>
  );
};

export default Body;
