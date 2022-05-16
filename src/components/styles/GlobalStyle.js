import { createGlobalStyle } from 'styled-components'; // Import Global style from styled lib

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', 'sans-serif';
        background-color: #0b2434;
        position: relative;
    }

`;

// Default export
export default GlobalStyles;
