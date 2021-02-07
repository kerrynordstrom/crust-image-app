import React from 'react';

import StyledButton from "../shared/StyledButton";

const Success = ({ previousStep }) => {
  return (
    <div>
      <p>Your bike has been submitted. Please check back!</p>
      <div style={{display: "flex"}} className="progress-page-upload__btn-wrapper">
        <StyledButton
          onClick={previousStep}
          content="Previous Step"
        />
        <StyledButton onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        window.location = "#/bikes"
        }
      }
      content="Go to Bikes" />
      </div>
    </div>
  );
};

export default Success;