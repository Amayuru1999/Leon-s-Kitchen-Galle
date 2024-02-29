import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ field: { borderRadius: "10px" } });

const sizes = {
  sm: defineStyle({
    field: {
      fontSize: "20px",
      height: "65px",
      px: "22px",
    },
  }),
  xs: defineStyle({
    field: {
      fontSize: "15px",
      height: "58px",
      px: "30px",
    },
  }),
  md: defineStyle({
    field: {
      fontSize: "23px",
      height: "66px",
      px: "22px",
    },
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      blue_gray_100: {
        field: {
          bg: "blue_gray.100",
          color: "black.900_99",
        },
      },
      gray_200: {
        field: {
          bg: "gray.200",
          color: "green.900_01",
        },
      },
    };
    return colorCombinations[colorScheme] || colorCombinations["gray_200"];
  }),
};

const Input = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "md",
  },
});
export default Input;
