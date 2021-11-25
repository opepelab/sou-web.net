import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./ThemeType";

type Props = {
  theme: ThemeType;
};

export const GlobalStyles = createGlobalStyle<Props>`
{
    body{
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    }
    .colorState{
        color: ${(props) => props.theme.links};
        border-bottom: ${(props) => props.theme.border};
    }
    h1{
        border-bottom: ${(props) => props.theme.h12};
    }
    h2{
        border-bottom: ${(props) => props.theme.h12};
    }
    a{
        color: ${(props) => props.theme.color};
        font-weight: ${(props) => props.theme.bold};
    }
    a.scale:hover {
        color: ${(props) => props.theme.links};
    }
    .pinkLinks{
        color: ${(props) => props.theme.color};
    }
    .MenuList [aria-expanded='true'] {
        background: ${(props) => props.theme.menu};
        color: ${(props) => props.theme.color};
    }
    .MenuList [aria-expanded='false'] {
        background: ${(props) => props.theme.menu};
        color: ${(props) => props.theme.color};
    }

}
`;

export default GlobalStyles;
