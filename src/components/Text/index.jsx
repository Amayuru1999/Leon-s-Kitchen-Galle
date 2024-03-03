import React from "react";

const sizes = {
  xs: "text-[13px] font-normal leading-5",
  lg: "text-base font-normal leading-[21px]",
  s: "text-sm font-normal leading-[21px]",
  xl: "text-2xl font-normal leading-9",
  md: "text-[15px] font-normal leading-[23px]",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
