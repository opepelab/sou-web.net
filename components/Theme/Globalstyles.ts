import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./ThemeType";
import { memo } from "react";

type Props = {
  theme: ThemeType;
};

export const GlobalStyles = memo(createGlobalStyle<Props>`
{
    body{
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        transition-duration: 0.5s;
    }
    h1{
        border-bottom: ${(props) => props.theme.h12};
    }
    h2{
        border-bottom: ${(props) => props.theme.h12};
    }
    .pinkLinks{
        color: ${(props) => props.theme.links};
        font-weight: ${(props) => props.theme.weight};
    }
    p:hover {
        border-bottom: ${(props) => props.theme.h12};
      }
    .Humb {
        box-shadow: ${(props) => props.theme.shadow};
    }
    .toggle {
        background: ${(props) => props.theme.black};

    }
}
`);

export default GlobalStyles;
