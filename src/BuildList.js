import React from "react";

const bikeDetailsMap = {
  frame: {
    bikeModel: "Bike Model",
    frameSize: "Frame Size",
    order: 0,
  },
  drivetrain: {
    frontDerailleur: "Front Derailleur",
    rearDerailleur: "Rear Derailleur",
    crankset: "Crank Set",
    chainring: "Chainring",
    chain: "Chain",
    cassetteOrCog: "Cassette or Cog",
    order: 1,
  },
  contactPoints: {
    stem: "Stem",
    handlebars: "Handlebars",
    shiftOrBrakeLevers: "Shift or Brake Levers",
    seatpost: "Seat Post",
    saddle: "Saddle",
    order: 2,
  },
  brakes: {
    frontBrake: "Front Brake",
    rearBrake: "Rear Brake",
    order: 3
  },
  wheels: {
    rearRim: "Rear Rim",
    rearHub: "Rear Hub",
    rearTire: "Rear Tire",
    frontRim: "Front Rim",
    frontHub: "Front Hub",
    frontTire: "Front Tire",
    order: 4,
  }
}

export const formFields = {
  cassetteOrCog: "Cassette/Cog",
  frontBrake: "Front Brake",
  frameSize: "Frame Size",
  bikeModel: "Bike Model",
  rearTire: "Rear Tire",
  crankset: "Crankset",
  rearRim: "Rear Rim",
  stem: "Stem",
  chain: "Chain",
  seatpost: "Seat Post",
  frontRim: "Front Rim",
  shiftOrBrakeLevers: "Shift Or Brake Levers",
  rearBrake: "Rear Brake",
  frontHub: "Front Hub",
  frontDerailleur: "Front Derailleur",
  chainring: "Chainring",
  rearDerailleur: "Rear Derailleur",
  rearHub: "Rear Hub",
  saddle: "Saddle",
  frontTire: "Front Tire",
  handlebars: "Handlebars",
};

const BuildList = ({bikeDetails}) => {
  // const orderedBikeDetails = Object.values(bikeDetailsMap);

  const bikeDetailsToHydrate = [];

  // for (const grouping in orderedBikeDetails) {
  //   const groupMembers = Object.values(grouping);


  // }

  for (const detail in bikeDetails) {
    console.log(formFields[detail])
    const displayFieldName = formFields[detail];
    bikeDetailsToHydrate.push([displayFieldName, bikeDetails[detail]]);
    console.log({[displayFieldName]: bikeDetails[detail]});
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
    {bikeDetailsToHydrate.map((detail) => (
        <ul style={{ zIndex: 999 }}>
          <li style={{ zIndex: 999 }}>
            {detail[0]}: {detail[1]}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default BuildList;