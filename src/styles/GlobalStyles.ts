import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset},
*,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        height: 100%;
        font-family: 'Noto Sans KR', sans-serif;
    }
    body {
      background-color: #D4E8FD;
    }
    a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
    }
    button, 
    input, 
    textarea, 
    select, 
    option {
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        border: 0;
    }
    button:focus, 
    input:focus, 
    textarea:focus, 
    select:focus{
        outline: none;
    }
`

export default GlobalStyle
