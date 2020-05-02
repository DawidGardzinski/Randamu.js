import { createGlobalStyle } from 'styled-components';
import { theme } from 'theme/mainTheme';

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        margin: 0;
        font-family: 'Nunito', sans-serif;
        background-color: ${theme.color.primary};
    }
`;

export default GlobalStyle;
