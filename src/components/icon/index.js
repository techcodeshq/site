import React from "react";
import PropTypes from "prop-types";
import IconLogo from "./logo";

const Icon = ({ name }) => {
  switch (name) {
    case "logo":
      return <IconLogo />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
