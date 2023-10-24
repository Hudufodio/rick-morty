import { useState, useEffect } from "react";
import * as BsIcons from "react-icons/bs";
import Card from "../card/Card";
import "./styles.scss";
import Pagination from "../pagination/Pagination";

const Body = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async () => {
      const response = await fetch(api);
      const data = await response.json();
      updateFetchedData(data);
      setIsLoading(false);
    })();
  }, [api]);

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
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
