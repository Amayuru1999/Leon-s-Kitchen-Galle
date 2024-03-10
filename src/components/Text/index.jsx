import React from "react";

const sizes = {
  xs: "text-xs font-medium leading-5",
  lg: "text-lg font-medium",
  s: "text-[13px] font-normal leading-5",
  "2xl": "text-2xl font-medium",
  xl: "text-xl font-medium",
  md: "text-[15px] font-normal leading-[43px]",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-800 font-barlow ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
