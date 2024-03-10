import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[30px]",
};
const variants = {
  fill: {
    blue_gray_100: "bg-blue_gray-100 text-black-900_99",
    amber_600: "bg-amber-600 text-white-A700",
  },
};
const sizes = {
  xs: "h-[58px] pl-[30px] pr-[35px] text-[15px]",
  sm: "h-[66px] pl-[17px] pr-[35px] text-base",
  md: "h-[66px] px-[35px] text-xl",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      variant = "fill",
      size = "sm",
      color = "amber_600",
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
          className={`${className} flex items-center justify-center ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_100", "amber_600"]),
};

export { Input };
