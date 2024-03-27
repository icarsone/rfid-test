import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-xl font-medium",
  s: "text-sm font-normal",
  xl: "text-2xl font-normal md:text-[22px]",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-400 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
