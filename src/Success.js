import React from 'react';

import StyledButton from "./StyledButton";

const Success = ({ previousStep }) => {
  return (
    <div>
      <p>Your bike has been submitted. Please check back!</p>
      <div style={{display: "flex"}} className="progress-page-upload__btn-wrapper">
        <StyledButton
          onClick={previousStep}
          content="Previous Step"
        />
        <StyledButton onClick={() => window.location = "#/bikes"} content="Go to Bikes" />
      </div>
    </div>
  );
};

export default Success;