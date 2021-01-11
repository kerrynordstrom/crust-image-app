import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  console.log('theme ', {theme})
  return ({
  root: {
    padding: theme.spacing(1),
  },
})}
);

const Disclaimer = () => {
  const classes = useStyles();
  return (
    <Typography align="center" className={classes.root} variant="h6" gutterBottom>
      Please fill out the following form with details about your amazing Crust!
      <br />
      Note that some of the fields are marked as required (*). 
      <br />
      The fields are free form so please add any detail about the component you find to be
      relevant (make, model, size).
    </Typography>
  );
}

export default Disclaimer;