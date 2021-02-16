import React from "react";

const bikeDetailsMap = {
  Frame: ["Description", "Model", "Frame Size"],
  Drivetrain: [ "Front Derailleur", "Rear Derailleur", "Crank Set", "Bottom Bracket", "Chainring", "Chain","Cassette or Cog", "Pedals"],
  "Contact Points": [ "Stem", "Handlebars", "Shift or Brake Levers", "Seat Post", "Saddle" ],
  Brakes: ["Front Brake", "Rear Brake"],
  Wheels: ["Rear Rim", "Rear Hub", "Rear Tire", "Front Rim", "Front Hub", "Front Tire" ],
  Etc: ["Accessories"],
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
        height: "auto",
        width: "100vw",
        backgroundColor: "white",
        zIndex: 999,
      }}
    >

    {orderedBikeGroups.map((group) => {
      return (
        <div style={{
          display: 'flex', 
          border: '1px solid black',
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '50vw',
        }}>
          <header style={{
            marginBottom: 20,
            textDecoration: 'underline',
            fontWeight: 'bold',
          }}>
            {group[0]}
          </header>
          <ul style={{
            zIndex: 999, listStyleType: "none",
            marginBottom: 20,
          }}>
            {
              group[1].map(individualItem => {
                const itemDescription = bikeDetails[individualItem];
                return (
                  <li style={{
                    zIndex: 999,
                    padding: 5,
                  }}>
                    {`${individualItem}: ${itemDescription || 'n/a' }`}
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