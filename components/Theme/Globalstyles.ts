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
      color: ${(props) => props.theme.PLink};
    }
    .dateST {
        color: ${(props) => props.theme.weak};
    }
    .Link-Color {
        color: ${(props) => props.theme.weak};
    }
    .blue {
        color: ${(props) => props.theme.pink};
    }
    @media screen and (max-width: 739.98px) {
      .Logo {
        color: ${(props) => props.theme.strong};
    }}
      .Line span {
        background-color: ${(props) => props.theme.strong};
    }
    @media screen and (min-width: 739.99px) {
    .toggle {
        background: ${(props) => props.theme.background};
        box-shadow: ${(props) => props.theme.shadow};
    }
    }
    .ToggleMB {
        background: ${(props) => props.theme.background};
        box-shadow: ${(props) => props.theme.shadow};
    }
}
`;

export default GlobalStyles;
