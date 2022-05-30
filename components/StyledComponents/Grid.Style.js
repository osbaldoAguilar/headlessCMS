import styled from "styled-components";

const StyleGridContainer = styled.div`
    display: grid;
    grid-template-areas: 
    'nav'
    'wpcontent'
    'footer';
    #nav{
        grid-area: nav
        /* display: none */
    }
    #footer {
      grid-area:'footer';
      height: 20px;

        // display: nones
    }
    #wpcontent {
        grid-area: wpcontent
    }
`
export default StyleGridContainer