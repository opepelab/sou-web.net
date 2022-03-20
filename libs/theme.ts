import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#fff", "#222")(props),
    },
    ".pinkLinks": {
      color: mode("#009999", "rgb(160, 240, 240)")(props),
    },
  }),
};

const fonts = {
  heading: "Hind",
};

export const theme = extendTheme({ styles, fonts });
export default theme;
