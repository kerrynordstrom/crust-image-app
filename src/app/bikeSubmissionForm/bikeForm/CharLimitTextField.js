import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    width: props => props.fullWidth ? "100%" : "75%",
  },
});

const CharLimitTextField = ({ 
  id,
  onChange, 
  dataRef, 
  label,
  charLimit, 
  defaultValue = "", 
  helperText, 
  multiLine, 
  numRows, 
  rowsMax, 
  fullWidth, 
  required }) => {
  const classes = useStyles({fullWidth});
  const CHARACTER_LIMIT = charLimit || 255;
  const [fieldValue, setFieldValue] = useState(defaultValue);

  const handleChange = (event) => {
    setFieldValue(event.target.value);
  };

  return (
    <TextField
      id={id}
      className={classes.root}
      label={label}
      inputProps={{
        maxLength: CHARACTER_LIMIT,
      }}
      fullWidth={fullWidth}
      required={required}
      multiline={multiLine}
      rows={numRows}
      rowsmax={rowsMax}
      value={fieldValue}
      helperText={`${helperText}   ${fieldValue.length}/${CHARACTER_LIMIT}`}
      onBlur={onChange(dataRef)}
      onChange={handleChange}
    />
  );
};

export default CharLimitTextField;
