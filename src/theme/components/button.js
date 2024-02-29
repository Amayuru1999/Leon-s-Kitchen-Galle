import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer" });

const sizes = {
  md: defineStyle({
    h: "66px",
    fontSize: "24px",
    px: "35px",
  }),
  sm: defineStyle({
    h: "58px",
    fontSize: "18px",
    px: "35px",
  }),
  xs: defineStyle({
    h: "44px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_900: {
        bg: "gray.900",
        color: "white.A700",
      },
      orange_600: {
        bg: "orange.600",
        color: "white.A700",
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_900"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Button;
