import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    black_900: "bg-black-900 text-white-A700",
    yellow_700_cc: "bg-yellow-700_cc text-gray-900_02",
    amber_600_01: "bg-amber-600_01 text-white-A700",
    blue_gray_100: "bg-blue_gray-100 text-black-900_99",
  },
};
const shapes = { round: "rounded-[29px]" };
const sizes = {
  xs: "p-[9px]",
  sm: "pb-[3px] pt-[15px] px-[3px]",
  md: "p-4",
  lg: "pb-4 pt-[19px] px-4",
  xl: "pb-[22px] pt-[27px] sm:px-5 px-[22px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "lg",
      variant = "fill",
      color = "blue_gray_100",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "black_900",
    "yellow_700_cc",
    "amber_600_01",
    "blue_gray_100",
  ]),
};

export { Input };
