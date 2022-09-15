import React, { useState } from "react";

function AllianceFilters(props) {
  const [selectedAlliances, setSelectedAlliances] = useState([]);

  const filterOption = [
    {
      name: "Oneworld",
      code: "OW"
    },

    {
      name: "Sky Team",
      code: "ST"
    },

    {
      name: "Star Alliance",
      code: "SA"
    }
  ];

  function handleFilterChange(alliance, isSelected) {
    if (!isSelected) {
      let updatedFilter = selectedAlliances.filter((e) => e !== alliance);
      setSelectedAlliances([...updatedFilter]);
      props.onFilterChange([...updatedFilter]);
    } else {
      setSelectedAlliances([...selectedAlliances, alliance]);
      props.onFilterChange([...selectedAlliances, alliance]);
    }
  }

  return (
    <form className="form-check">
      {filterOption.map((option, index) => {
        return (
          <React.Fragment key={index}>
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                value={"option" + index}
                onChange={(ev) =>
                  handleFilterChange(option.code, ev.target.checked)
                }
              />{" "}
              {option.name}
            </label>
          </React.Fragment>
        );
      })}
    </form>
  );
}

export default AllianceFilters;
