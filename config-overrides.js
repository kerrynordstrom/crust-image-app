/* eslint-disable react-hooks/rules-of-hooks */
const {
  override,
  // addBabelPlugins,
  // addBabelPresets,
  useBabelRc,
} = require("customize-cra");

module.exports = override(
  useBabelRc(),
  // addBabelPlugins(
  //   "emotion",
  //   "@babel/plugin-proposal-nullish-coalescing-operator",
  //   "@babel/plugin-syntax-optional-chaining"
  // ),
  // addBabelPresets(
  //   "@babel/preset-react", 
  //   "@babel/preset-env"
  // )
);
