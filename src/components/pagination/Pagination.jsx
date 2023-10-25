import React from "react";

const Pagination = ({ pageNumber, setPageNumber }) => {
  const next = () => {
    setPageNumber((x) => x + 1);
  };
  const prev = () => {
    if (pageNumber === 1) return;
    setPageNumber((x) => x - 1);
  };

  return (
    <div className="btn-group">
      <button onClick={prev}>Ante.</button>
      <button onClick={next}>Sigu.</button>
    </div>
  );
};

export default Pagination;
