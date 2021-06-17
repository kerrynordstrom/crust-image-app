import React from 'react';

import StyledButton from "../shared/StyledButton";

const Success = () => {
  return (
    <div style={{
      paddingTop: "50px",
    }}>
      <p>Your bike has been submitted for approval. Please check back soon!</p>
      <div style={{
        display: "flex",
        justifyContent: "center",
      }} 
      className="progress-page-upload__btn-wrapper">
        <StyledButton 
        onClick={() => {
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