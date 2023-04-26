import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({
  color = "coral",
  text = "Text Example",
  radius = "100px",
  padding = "20px",
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      style={{
        padding: padding,
        borderRadius: radius,
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  radius: PropTypes.string,
  padding: PropTypes.string,
  handleClick: PropTypes.func,
};

export default CustomButton;
