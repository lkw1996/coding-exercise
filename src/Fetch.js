import { useEffect } from "react";
import fetchJsonp from "fetch-jsonp";

function Fetch(setAirlineData) {
  useEffect(() => {
    async function fetchData() {
      try {
        const url =
          "https://www.kayak.com/h/mobileapis/directory/airlines/homework";

        const response = await fetchJsonp(url, {
          jsonpCallback: "jsonp"
        });

        if (!response.ok) throw new Error("Problem getting the data");

        const data = await response.json();

        setAirlineData(data);
      } catch (err) {
        console.error(err);
      }
    }

    // runs when first loading page
    fetchData();
  });
}

export default Fetch;
