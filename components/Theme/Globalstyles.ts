import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './ThemeType'

type Props = {
    theme: ThemeType;
}

export const GlobalStyles = createGlobalStyle<Props>`
{
    body{
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        transition-duration: 0.4s;
    }
    .colorState{
        border-bottom: ${(props) => props.theme.border};
    }
    h1{
        border-bottom: ${(props) => props.theme.h1};
    }
    a{
        color: ${(props) => props.theme.color};
        font-weight: ${(props) => props.theme.bold};
    }
    .MenuList [aria-expanded='true'] {
        background: ${(props) => props.theme.menu};
        color: ${(props) => props.theme.color};
    }

}
`;

export default GlobalStyles;

