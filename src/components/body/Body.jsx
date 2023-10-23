import { useState, useEffect } from "react";
import * as BsIcons from "react-icons/bs";
import Card from "../card/Card";
import "./styles.scss";

const Body = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { info, results } = fetchedData;

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
      );
      const data = await response.json();
      setTimeout(() => {
        updateFetchedData(data);
        setIsLoading(false);
      }, 1000);
    })();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
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
          <div className="container-text">
            <p className="characters">List of characters</p>
          </div>
          <div className="card-compo">
            <Card results={results} />
            <div className="btn-group">
              <button>Previous</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
