import React from 'react'
import  styles from '../StyledComponents/Grid.Style'
import styled from 'styled-components'


const StyledFooter = styled.div`
  footer> div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding 20px 0;
    a,p {
      color: #000;
      font-size: inherit;
      padding: 0 2.5px;
    }
  }
`;

function Footer() {
  return (
    <div id='footer' className={styles.Footer}>
      <StyledFooter>
        <footer>
          <div className='flex flex-row justify-around items-center'>
            <p>© 2022 Copyright:</p> 
            <a target="_blank" href="https://codethedream.org/" rel="noreferrer">Code The Dream</a>
            <p> & </p>
            <a target="_blank" href="https://www.tomatillodesign.com/" rel="noreferrer">Tomatillo Design</a>
          </div>
        </footer>
      </StyledFooter>
    </div>
  )
}

export default Footer