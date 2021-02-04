import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = (props) => {
  const collaboratorSplit = {
    data: (canvas) => {
      return {
        labels: props.collaborators.map((a) => a.name),
        datasets: [
          {
            labels: "collaborators",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
            borderWidth: 0,
            data: props.collaborators.map((a) => a.split),
          },
        ],
      };
    },
    options: {
      legend: {
        display: true,
      },

      pieceLabel: {
        render: "percentage",
        fontColor: ["white"],
        precision: 2,
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },

      scales: {
        yAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: "rgba(255,255,255,0.05)",
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(255,255,255,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
    },
  };

  return (
    <>
     <div className="container mx-auto px-8 bg-white overflow-hidden shadow-xl rounded-lg">
      <div className="px-4">
      <br />
        <h1 className="text-4xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate mb-4">Splits</h1>
      </div>
      <hr />
      

      <div className="max-w-lg mx-auto pt-10 pb-12 px-4 lg:pb-16">
        <Doughnut
          data={collaboratorSplit.data}
          options={collaboratorSplit.options}
        />
      </div>
      </div>
    </>
  );
};

export default DoughnutChart;
