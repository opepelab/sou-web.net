import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { flashless } from "chakra-ui-flashless";

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

// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: true,
// };

export const theme = extendTheme(flashless({ styles }));
export default theme;
