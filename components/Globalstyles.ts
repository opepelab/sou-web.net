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
    font-family: ${(props) => props.theme.font};
    transition: all 0.5s ease-in-out;
    }
    .bgg{
    background: ${(props) => props.theme.bgg};
    transition: all 0.5s ease-in-out;
    }
    .colorState{
    border-bottom: ${(props) => props.theme.border};
    }

    a{
    color: ${(props) => props.theme.color};
    transition: all 0.5s ease-in-out;
    }
    .MenuList [aria-expanded='true'] {
    background: ${(props) => props.theme.menu};
    color: ${(props) => props.theme.link};
    }

}
`;

export default GlobalStyles;

