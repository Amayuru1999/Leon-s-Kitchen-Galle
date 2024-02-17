import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[29px]" };
const variants = {
  gradient: {
    orange_A100_yellow_700: "bg-gradient  shadow-bs text-white-A700",
  },
  fill: {
    blue_gray_500_26: "bg-blue_gray-500_26",
    amber_600: "bg-amber-600 text-black-900",
    teal_800: "bg-teal-800 text-white-A700",
    red_A200_26: "bg-red-A200_26 text-red-A200",
    blue_600_26: "bg-blue-600_26 text-blue-600",
    white_A700: "bg-white-A700",
    black_900_01: "bg-black-900_01 text-white-A700",
    orange_600: "bg-orange-600 text-white-A700",
  },
};
const sizes = {
  xs: "py-px",
  sm: "p-[5px]",
  md: "p-[9px]",
  lg: "p-4",
  xl: "pl-[17px] pr-[19px] py-[19px]",
  "2xl": "p-[21px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "lg",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf([
    "orange_A100_yellow_700",
    "blue_gray_500_26",
    "amber_600",
    "teal_800",
    "red_A200_26",
    "blue_600_26",
    "white_A700",
    "black_900_01",
    "orange_600",
  ]),
};

export { Button };
