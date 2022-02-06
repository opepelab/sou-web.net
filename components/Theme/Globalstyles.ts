import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./ThemeType";

type Props = {
  theme: ThemeType;
};

export const GlobalStyles = createGlobalStyle<Props>`
{
    body{
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.weak};
    }
    h1{
        border-bottom: ${(props) => props.theme.h12};
    }
    h2{
        border-bottom: ${(props) => props.theme.h12};
    }
    .pinkLinks{
      color: ${(props) => props.theme.strong};
    }
    .scaleLinks:hover {
        border-bottom: ${(props) => props.theme.h12};
    }
    .dateST {
        color: ${(props) => props.theme.weak};
    }
    p:hover {
        border-bottom: ${(props) => props.theme.h12};
      }
    
    .blue {
        color: ${(props) => props.theme.pink};
    }
    a {
        color: ${(props) => props.theme.weak};
    }
    .Color a {
        color: ${(props) => props.theme.strong};
    }
    .bgg {
        background: ${(props) => props.theme.bgNav};
    }
    .Line button {
        // box-shadow: ${(props) => props.theme.shadow};
        background: ${(props) => props.theme.background};
    }
      .Line span {
        background-color: ${(props) => props.theme.strong};
    }
    .toggle {
        background: ${(props) => props.theme.black};
        color: ${(props) => props.theme.MainBG};
        // box-shadow: ${(props) => props.theme.shadow};
    }
}
`;

export default GlobalStyles;
