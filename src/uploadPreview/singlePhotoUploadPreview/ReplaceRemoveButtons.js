import React from 'react';
import StyledButton from '../../StyledButton'

const ReplaceRemoveButtons = ({index, onImageUpdate, onImageRemove}) => {
  return (
      <div
        key={index}
        style={{ display: "flex", justifyContent: "center" }}
        className="image-item__btn-wrapper"
      >
        <StyledButton content="Update" onClick={() => onImageUpdate(index)} />
        <StyledButton content="Remove" onClick={() => onImageRemove(index)} />
      </div>
  );
}

export default ReplaceRemoveButtons;