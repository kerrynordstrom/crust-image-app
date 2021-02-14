import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";

const BikeDescription = ({onChange}) => {
  const CHARACTER_LIMIT = 255;
  const [values, setValues] = useState({
    description: "",
  });


  const handleChange = (description) => (event) => {
    setValues({ ...values, [description]: event.target.value });
  };

  return (
    <TextField
      id="description"
      label="Description"
      inputProps={{
        maxlength: CHARACTER_LIMIT,
      }}
      fullWidth
      required
      multiline
      rows={3}
      rowsmax={10}
      value={values.description}
      helperText={`(Give us a tall tale about your Crust) ${values.description.length}/${CHARACTER_LIMIT}`}
      onBlur={onChange("Description")}
      onChange={handleChange("description")}
    />
  );
}

export default BikeDescription;
