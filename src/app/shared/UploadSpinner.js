import React, { useState } from "react";
import { css } from "@emotion/core"
import useInterval from '@use-it/interval';
import PacmanLoader from "react-spinners/PacmanLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"

const override = css`
  display: block;
  margin: 0 auto;
  margin-left: -2vw;
  border-color: blue;
`;

const colorsToCycle = [
  "maroon",
  "orange",
  "purple",
  "fuchsia",
  "lime",
  "teal",
  "aqua",
  "blue",
  "navy",
  "silver",
];

const randomNumber = () => Math.floor(Math.random() * (colorsToCycle.length - 1));
const colorChangeDelay = 400;

const UploadSpinner = ({type, loading, size}) => {
  const [color, setColor] = useState(colorsToCycle[0]);

  useInterval(() => {
    setColor(colorsToCycle[randomNumber()]
    )
  }, colorChangeDelay);
  return type === 'pacman' ? (
      <PacmanLoader color={color} loading={loading} css={override} size={size} />) :
      (<ClimbingBoxLoader color={color} loading={loading} size={size} />)
};

export default UploadSpinner;