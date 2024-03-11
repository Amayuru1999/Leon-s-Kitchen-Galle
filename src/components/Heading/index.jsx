import React from "react";

const sizes = {
  s: "text-2xl font-bold",
  md: "text-4xl font-bold",
  xs: "text-xl font-bold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-red-400 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
