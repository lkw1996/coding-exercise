import React from "react";

const Pagination = ({ currentPage, onPageChange, pageCount }) => {
  const maxPageDisplayCount = 5;
  const pageNumbers = [];

  let firstPage = Math.max(
    1,
    currentPage - Math.floor(maxPageDisplayCount / 2)
  );
  let lastPage = Math.min(
    pageCount + 1,
    Math.max(0, Math.floor(maxPageDisplayCount / 2) - currentPage + 1) +
      currentPage +
      Math.ceil(maxPageDisplayCount / 2)
  );

  for (let i = firstPage; i < lastPage; i++) {
    pageNumbers.push(i);
  }

  const pageNumberButtons = pageNumbers.map((pageIndex) => {
    return (
      <li
        key={pageIndex}
        className={currentPage === pageIndex ? "active" : null}
      >
        <a onClick={() => onPageChange(pageIndex)} href="!#">
          {pageIndex}
        </a>
      </li>
    );
  });

  return (
    <>
      <li>
        <button
          onClick={() => onPageChange(--currentPage)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
      </li>

      {pageNumberButtons}

      <li>
        <button
          onClick={() => onPageChange(++currentPage)}
          disabled={currentPage === pageCount}
        >
          &raquo;
        </button>
      </li>
    </>
  );
};

export default Pagination;
