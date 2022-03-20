import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { flashless } from "chakra-ui-flashless";

const theme = extendTheme(
  flashless({
    styles: {
      global: (props: any) => ({
        body: {
          bg: mode("#fff", "#222")(props),
        },
        ".pinkLinks": {
          color: mode("#009999", "rgb(160, 240, 240)")(props),
        },
      }),
    },
  })
);

export default theme;
