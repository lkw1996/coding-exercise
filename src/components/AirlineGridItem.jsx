import React, { useState } from "react";

function AirlineGridItem(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const airline = props.airline;
  const domain = "https://www.kayak.com/";

  return (
    <div
      className="info-container-item"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="img-container">
        <img
          src={domain + airline.logoURL}
          alt="Airline Logo"
          className="airline-logo"
        />
      </div>
      <div className="extra-info-container">
        <h4 className="airline-name">{airline.name}</h4>
        {isHovered && <MoreInfo airline={airline} />}
      </div>
    </div>
  );
}

const DetermineName = (airline) => {
  switch (airline) {
    case "OW":
      return "Oneworld";

    case "ST":
      return "Sky Team";

    default:
      return "Star Alliance";
  }
};

const MoreInfo = ({ airline }) => {
  return (
    <>
      {airline.alliance !== "none" && (
        <p className="alliance-name">{DetermineName(airline.alliance)}</p>
      )}
      <p className="extra-info">{airline.phone}</p>
      <p className="extra-info">{airline.site}</p>
    </>
  );
};

export default AirlineGridItem;
