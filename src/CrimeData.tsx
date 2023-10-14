import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const CrimeData = () => {
  const [crimeData, setCrimeData] = useState({}); // Initialize as an empty object

  useEffect(() => {
    axios
      .get("https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv")
      .then((response) => {
        const data = response.data.data; // Extract the "data" property

        if (data) {
          // Create an object to store crime data by crime type
          const crimeDataByType = {};

          // Loop through the data and organize it by crime type
          data.forEach((entry) => {
            Object.keys(entry).forEach((key) => {
              if (key !== "data_year") {
                if (!crimeDataByType[key]) {
                  crimeDataByType[key] = [];
                }
                crimeDataByType[key].push(entry[key]);
              }
            });
          });

          setCrimeData(crimeDataByType);

          // Create a graph for each crime type
          Object.keys(crimeDataByType).forEach((crimeType) => {
            const canvas = document.getElementById(`crimeChart-${crimeType}`) as HTMLCanvasElement;
            if (canvas) {
              new Chart(canvas, {
                type: "line",
                data: {
                  labels: data.map((entry) => entry.data_year),
                  datasets: [
                    {
                      label: crimeType,
                      data: crimeDataByType[crimeType],
                      borderColor: "rgba(75, 192, 192, 1)",
                      borderWidth: 1,
                      fill: false,
                    },
                  ],
                },
              });
            }
          });
        } else {
          console.error("No data found in the response.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div id="crimeData">
      {Object.keys(crimeData).map((crimeType) => (
        <div className="custom-chart" key={crimeType}>
          <h2>{crimeType}</h2>
          <canvas id={`crimeChart-${crimeType}`}></canvas>
        </div>
      ))}
    </div>
  );
};

export default CrimeData;
