import { useState, useEffect } from "react";
import * as BsIcons from "react-icons/bs";
import Card from "../card/Card";
import "./styles.scss";
import Pagination from "../pagination/Pagination";

const Body = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async () => {
      const response = await fetch(api);
      const data = await response.json();
      updateFetchedData(data);
      setIsLoading(false);
    })();
  }, [api]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="body-container">
          <div className="searchbar">
            <input
              onChange={handleChange}
              type="text"
              name=""
              className="query"
              placeholder="encuentra un personaje"
            />
            <div className="icon">
              <BsIcons.BsSearch className="lens" />
            </div>
          </div>
          <div className="container-text">
            <p className="characters">Lista de personajes</p>
          </div>
          <div className="card-compo">
            <Card results={results} />
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
