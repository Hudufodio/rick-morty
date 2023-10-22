import { useState, useEffect } from "react";
import * as BsIcons from "react-icons/bs";
import Card from "../card/Card";
import "./styles.scss";

const Body = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const { info, results } = fetchedData;
  

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    fetch(api)
      .then((response) => {
        !response.ok ? `HTTP error: The status is ${response.status}` : null;
        return response.json();
      })
      .then((data) => updateFetchedData(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, [api]);

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
        <Card results={results} />
        <div className="btn-group">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
