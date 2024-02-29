const baseStyle = {
  color: "black.900_01",
  fontFamily: "Inter",
};
const sizes = {
  s: {
    fontSize: "26px",
    fontWeight: 700,
  },
  md: {
    fontSize: "40px",
    fontWeight: 700,
  },
  xs: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "27px",
  },
  lg: {
    fontSize: "64px",
    fontWeight: 700,
  },
};
const defaultProps = {
  size: "s",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;
