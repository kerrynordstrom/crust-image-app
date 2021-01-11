import React from "react";

const BuildList = ({bikeDetails}) => {
  const bikeDetailsToHydrate = [];
  for (const detail in bikeDetails) {
    bikeDetailsToHydrate.push([detail, bikeDetails[detail]])
    console.log({[detail]: bikeDetails[detail]});
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        height: 800,
        width: 1000,
        backgroundColor: "white",
        zIndex: 999,
      }}
    >
    <ul style={{ zIndex: 999 }}>
      {bikeDetailsToHydrate.map((detail) => (
        <li style={{ zIndex: 999 }}>
          {detail[0]}: {detail[1]}
        </li>))}
    </ul>
    </div>
  );
}

export default BuildList;