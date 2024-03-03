import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    black_900: "bg-black-900 text-white-A700",
    teal_800: "bg-teal-800 text-white-A700",
    orange_600: "bg-orange-600 text-white-A700",
  },
};
const sizes = {
  xl: "h-[70px] pl-5 pr-[35px] text-2xl",
  md: "h-[58px] px-[35px] text-lg",
  xs: "h-[39px] pl-[18px] pr-[23px] text-sm",
  lg: "h-[61px] pl-[26px] pr-[35px] text-lg",
  sm: "h-11",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  variant = "fill",
  size = "sm",
  color = "teal_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xl", "md", "xs", "lg", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["black_900", "teal_800", "orange_600"]),
};

export { Button };
