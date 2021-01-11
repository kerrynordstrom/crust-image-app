import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const StyledButton = ({onClick, content, disabled, style}) => {
  const classes = useStyles();

  return (
    <div style={style} className={classes.root}>
      <Button variant="contained" color="primary" disabled={disabled} onClick={onClick} >
        {content}
      </Button>
    </div>
  );
}

export default StyledButton
