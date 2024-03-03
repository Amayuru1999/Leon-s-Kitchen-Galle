import React from "react";

const sizes = {
  "3xl": "text-[32px] font-semibold",
  "2xl": "text-2xl font-semibold",
  xl: "text-[22px] font-bold leading-[83px]",
  "5xl": "text-[44px] font-bold",
  "4xl": "text-4xl font-semibold leading-[54px]",
  s: "text-base font-semibold",
  md: "text-lg font-semibold leading-[27px]",
  "6xl": "text-6xl font-bold leading-[90px]",
  xs: "text-sm font-bold leading-[21px]",
  lg: "text-xl font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
