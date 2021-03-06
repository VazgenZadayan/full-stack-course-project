import React from "react";

import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  if (pagesCount === 1) return null;
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={"page-item " + (page === currentPage ? "active" : "")}
          >
            <span
              className="page-link"
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
