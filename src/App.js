import "./App.css";
import React, { useState } from "react";
import Fetch from "./Fetch";
import AirlinesGrid from "./components/AirlinesGrid";
import AllianceFilters from "./components/AllianceFilters";

function App() {
  const [airlineData, setAirlineData] = useState(null);
  const [filteredAirlineData, setFilteredAirlineData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const dataPerPage = 12;

  Fetch(setAirlineData);

  function filterAirlineData(selectedAlliances) {
    if (selectedAlliances.length === 0) {
      setFilteredAirlineData(airlineData);
    } else {
      const filteredAirlines = airlineData.filter((airline) =>
        selectedAlliances.includes(airline.alliance)
      );
      setFilteredAirlineData(filteredAirlines);
    }
  }

  return (
    <>
      <div className="logo-container">
        <img src="logo.svg" alt="Kayak" className="logo" />
      </div>
      {airlineData === null ? (
        <div> Loading... </div>
      ) : (
        <div className="display-container">
          <h1 className="title">Airlines</h1>
          <h4 className="filter-title">Filter by Alliances</h4>
          <AllianceFilters
            onFilterChange={(selectedAlliances) => {
              filterAirlineData(selectedAlliances);
              setCurrentPage(1);
            }}
          />
          <AirlinesGrid
            dataPerPage={dataPerPage}
            currentPage={currentPage}
            pageCount={Math.ceil(
              (filteredAirlineData === null ? airlineData : filteredAirlineData)
                .length / dataPerPage
            )}
            onPageChange={(newPage) => setCurrentPage(newPage)}
            airlines={
              filteredAirlineData === null ? airlineData : filteredAirlineData
            }
          />
        </div>
      )}
    </>
  );
}

export default App;
