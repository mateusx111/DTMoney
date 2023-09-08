import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
  }

  body { 
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-900']};
  }

  body, input, textarea, button{
    font: 400 1rem Roboto, sans-serif;
  }
`
