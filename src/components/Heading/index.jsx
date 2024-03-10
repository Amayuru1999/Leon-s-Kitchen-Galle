import React from "react";

const sizes = {
  s: "text-2xl font-bold",
  md: "text-[32px] font-semibold",
  xs: "text-lg font-bold leading-[27px]",
  lg: "text-[56px] font-bold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
