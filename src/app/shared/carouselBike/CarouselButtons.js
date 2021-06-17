import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import StyledButton from "../StyledButton"

const CarouselButtons = ({closeModal, showBuildList, buildListShowing}) => {
  const mediumSizeQuery = useMediaQuery("(min-width: 600px)");

  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        minWidth: "50px",
        zIndex: 1000,
        top: "30px",
        left: "0px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledButton
        onClick={closeModal}
        content={buildListShowing || !mediumSizeQuery ? "X" : "Close"}
      />
      <StyledButton
        onClick={showBuildList}
        content={buildListShowing || !mediumSizeQuery ? "☰" : "Build List" }
      />
    </div>
  );
}

export default CarouselButtons;
