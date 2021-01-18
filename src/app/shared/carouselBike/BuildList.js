import React from "react";

const bikeDetailsMap = {
  Frame: ["Model", "Frame Size"],
  Drivetrain: [ "Front Derailleur", "Rear Derailleur", "Crank Set", "Chainring", "Chain","Cassette or Cog" ],
  "Contact Points": [ "Stem", "Handlebars", "Shift or Brake Levers", "Seat Post", "Saddle" ],
  Brakes: ["Front Brake", "Rear Brake"],
  Wheels: ["Rear Rim", "Rear Hub", "Rear Tire", "Front Rim", "Front Hub", "Front Tire" ],
}

const BuildList = ({bikeDetails}) => {
  const orderedBikeDetails = Object.values(bikeDetailsMap);
  const orderedBikeGroups = Object.entries(bikeDetailsMap);
  console.log({bikeDetails, orderedBikeDetails, orderedBikeGroups})
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: 800,
        width: 1000,
        backgroundColor: "white",
        zIndex: 999,
      }}
    >

    {orderedBikeGroups.map((group) => {
      return (
        <div style={{minWidth: 300}}>
          <header>{group[0]}</header>
          <ul style={{zIndex: 999, listStyleType: "none"}}>
            {
              group[1].map(individualItem => {
                return (
                  <li style={{ zIndex: 999 }}>
                    {`${individualItem}: ${bikeDetails[individualItem]}`}
                  </li>
                  )
                } 
              )
            }
          </ul>
        </div>
        )
      })
    }
    </div>
  );
}

export default BuildList;