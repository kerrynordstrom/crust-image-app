import React, { useState } from "react";
import { css } from "@emotion/core"
import useInterval from '@use-it/interval';
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  display: block;
  margin: 0 auto;
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

const Spinner = ({loading}) => {
  const [color, setColor] = useState(colorsToCycle[0]);

  useInterval(() => {
    setColor(colorsToCycle[randomNumber()]
    )
  }, colorChangeDelay);
  return (
      <PacmanLoader color={color} loading={loading} css={override} size={120} />)
};

export default Spinner;