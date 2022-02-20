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
    a {
        color: ${(props) => props.theme.strong};
    }
    .SankakuBlack {
          border-color: ${(props) => props.theme.Sankaku};
    }
    .blue {
        color: ${(props) => props.theme.pink};
    }

      .Line span {
        background-color: ${(props) => props.theme.strong};
    }
    // @media screen and (min-width: 739.99px) {
    // .toggle {
    //     background: ${(props) => props.theme.background};
    //     box-shadow: ${(props) => props.theme.shadow};
    // }}
    // .toggleMenu {
    //     background: ${(props) => props.theme.background};
    // }
    .MenuList {
        background: ${(props) => props.theme.black};
  }
    .nav2 a {
        color: ${(props) => props.theme.strong};
    }
}
`;

export default GlobalStyles;
