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

export const theme = extendTheme({ styles });
export default theme;
