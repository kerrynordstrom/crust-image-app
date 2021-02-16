import React from "react";
import Button from "@material-ui/core/Button";

const StyledButton = ({onClick, content, disabled, style}) => {

  return (
      <Button 
        style={{
          margin: "20px"
        }}
        variant="contained" color="primary" 
        disabled={disabled} 
        onClick={onClick} 
      >
        {content}
      </Button>
  );
}

export default StyledButton
