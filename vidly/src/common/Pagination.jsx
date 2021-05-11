import React from "react";
import _ from "loadash";

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;

  //   const pagesCount = itemsCount / pageSize;
  //   const pages = _.range(1, pagesCount + 1);
  //   console.log(pages);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link">1</a>
        </li>
        <li className="page-item">
          <a className="page-link">2</a>
        </li>
        <li className="page-item">
          <a className="page-link">3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
