import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[5px]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    gray_100_01: "bg-gray-100_01 text-blue_gray-800",
    black_900_02: "bg-black-900_02 text-white-A700",
    orange_600: "bg-orange-600 text-white-A700",
  },
};
const sizes = {
  xs: "h-[37px] px-[18px] text-[15px]",
  lg: "h-[80px] pl-6 pr-[35px] text-xl",
  md: "h-[58px] px-[35px] text-lg",
  sm: "h-[44px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "sm",
  color = "gray_100_01",
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
  size: PropTypes.oneOf(["xs", "lg", "md", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_100_01", "black_900_02", "orange_600"]),
};

export { Button };
