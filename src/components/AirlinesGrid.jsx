import React from "react";
import AirlineGridItem from "./AirlineGridItem";
import Pagination from "./Pagination";

function AirlinesGrid(props) {
  const indexOfLastPosts = props.currentPage * props.dataPerPage;
  const indexOfFirstPosts = indexOfLastPosts - props.dataPerPage;

  const currentPosts = props.airlines.slice(
    indexOfFirstPosts,
    indexOfLastPosts
  );

  return (
    <div className="content-container">
      <div className="grid-container">
        {currentPosts.map((airline, index) => {
          return (
            <React.Fragment key={index}>
              <div className="info-container">
                <AirlineGridItem airline={airline} />
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="pagination">
        {
          <Pagination
            currentPage={props.currentPage}
            onPageChange={props.onPageChange}
            pageCount={props.pageCount}
          />
        }
      </div>
    </div>
  );
}

export default AirlinesGrid;
