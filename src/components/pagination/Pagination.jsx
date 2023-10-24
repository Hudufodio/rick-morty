import React from "react";
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageNumber, setPageNumber }) => {
  const next = () => {
    setPageNumber((x) => x + 1);
  };
  const prev = () => {
    if(pageNumber === 1) return;
    setPageNumber((x) => x - 1);
  };

  return (
    <div className="btn-group">
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Pagination;
