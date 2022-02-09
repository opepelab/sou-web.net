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
    @media screen and (max-width: 739.98px) {
    .Color a {
        color: ${(props) => props.theme.weak};
    }
}

    // .Line button {
    //     box-shadow: ${(props) => props.theme.shadow};
    //     background: ${(props) => props.theme.background};
    // }
      .Line span {
        background-color: ${(props) => props.theme.strong};
    }
    .toggle {
        background: ${(props) => props.theme.background};
        box-shadow: ${(props) => props.theme.shadow};
    }
    .toggleMenu {
        background: ${(props) => props.theme.background};
    }
}
`;

export default GlobalStyles;
