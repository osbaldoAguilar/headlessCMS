/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css'

import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from 'next/head';
import { Container } from '../components/StyledComponents/WrappingComponents';

const fonts = [
  // "'Bebas Neue', cursive",
  // "'Noto Serif', serif",
  // "'Rubik', sans-serif",
  // "'Titillium Web', sans-serif",
  "'Open Sans', sans-serif"

]
const changeFont = () => {
  const fontSelected = fonts[Math.floor(Math.random() * fonts.length)]
  console.log(fontSelected);
  return fontSelected
}
//  "'Bebas Neue', cursive";
//  "'Noto Serif', serif";
//  "'Rubik', sans-serif";
//  "'Titillium Web', sans-serif" 

const GlobalStyle = createGlobalStyle`
html{
  ${'' /* box-sizing: border-box;
  background: #F5F4F0;
  display:block;
  height: 100%;
  max-width: 640px;
  margin:0 auto;
  padding: 0; */}
}

body{
  height: 100%
}

a,p,h1,h2,h3,h4,h5,h6 {
  font-family: ${changeFont()};
}
article {
  ${'' /* display: block;
  max-width: 900px;
  margin:0 auto;
  width: 100vw;
  height: 100vh;*/}
  p,h2{
    ${'' /* margin:0 auto;
    display: block; */}
    max-width: 900px;
    color: white
   } 
   h2 {
     display: none;
     visibility: hidden
   }
    
}
${'' /* div {
  height: 100%
} */}
.wp-block-group__inner-container {
  display:flex;
  flex-direction: column-reverse
}
.wp-block-latest-posts__list {
  ${'' /* display: flex; */}
  display: none;
  justify-content: center;
  align-content: center;
  color: whitesmoke;
  font-size: 1rem;
  font-weight: 700;
  ${'' /* flex-direction: column; */}
  li {
    padding: 0 10px
  }
}
#mapDiv {
  display: block;
  max-width: 600px;
}

`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  const value = true
  return (
    <>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link crossOrigin={value.toString()} href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Open+Sans:wght@400;700&family=Rubik:ital,wght@0,400;0,600;0,800;1,400;1,600;1,800&family=Titillium+Web:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"></link>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;