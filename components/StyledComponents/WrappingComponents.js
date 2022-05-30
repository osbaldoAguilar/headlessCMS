import styled from "styled-components";


export const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0px auto;
  /* padding: 0 20px; */
  /* width: 1400px; */
  max-width: 100%;
  /* padding: 0 20px; */
  /* margin: 0 auto; */
`

const Block = styled.div`
  p {
    display: block;
    margin: 0 auto;
  }
`
const BlockCentered = styled.div`
  display: flex;
  place-content: center;
  h4 {
    text-transform: uppercase;
    font-weight: 700;
    margin-left: 50px;
  }
  div h4{
    margin: 0
  }
`

const HomeWPBK = styled.div`
  a {
    all: initial
  };
  /* background-color: ${(props) => props.bg}; */
  a,
  h4{
    /* position: fixed; */
    margin: auto;
    /* width: 65%; */
    height: 150px;
    /* top: 141vh; */
    /* left: 30%; */
    text-align: center;
    padding: 25px 0 10px 0;
    background: royalblue;
    color: whitesmoke;
    font-family: inherit;
    font-weight: 700;
    font-size: 4rem;
  }
  h3 {
    font-size: 2.5rem;
    text-transform: uppercase
  }
  #mapP{
    background-color: inherit;
    padding: 20px;
    font-size: 2.5rem;
    height: 110px;
    /* width: 100%; */
    cursor: pointer;
    transition: all .25s ease-in;
    position: absolute;
    p {
      width: 80%
    }
  }
  #mapP:hover {
    text-decoration: underline;
    /* transform: scale(0.8);
    transition: transform 0.25s ease-out; */
  }
  .mapDIv{
      position: relative;

  }
  .paragraph {
    max-width: 1440px;
    padding: 20px;
  }
`
export const StyledBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    .btnsWrapper {
      display: inline-block;
      position: relative;
      background: transparent;
      border: none;
      color: inherit;
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--orange);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
      &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
    .btns-container-top {
      display: flex;
      justify-content: flex-end;
    }

`
const RoundedCard = styled.div`
  display: flex;
  place-items: center;
  width: 480px;
  flex-direction: column;
  text-align: center;
  background-color: #f5f4f0;
  color: black;
  padding: 1rem;
  margin: 1rem;
  border-radius: 25px;
  p {
    color: black;
  }
  img {
    max-width: 300px;
  }
  span {
    font-weight: 100;
    color: #606060;
    margin-top: -1.5rem;
    font-family: monospace;
  }
  p {
    font-size: 1.15em;
    line-height: 1.58;
    font-weight: 400;
    letter-spacing: -0.003em;
  }
  table {
      display: flex;
      place-items: center;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #f5f4f0;
    thead {
        font-size: 10px;
    }
    td,
    th {
        border-bottom: 1px solid #f5f4f0;
        border-right: 1px solid #f5f4f0;
        padding: 10px 5px;
        position: relative;
        &:last-child {
        border-right: none;
        width: 150px;
        button {
            width: 100%;
        }
        }
    }
    tr {
        &:hover {
        background: var(--offWhite);
        }
    }
  }
`;
const ExtendedCard = styled.div`
  display: flex;
  place-items: center;
  width: 480px;
  flex-direction: column;
  text-align: center;
  background-color:linear-gradient(to bottom right,  #02386e, #00498d, #0052a2, #000b18, #00172d,    );
;
  color: black;
  padding: 1rem;
  margin: 1rem;
  img {
    max-width: 300px;
  }
  span {
    font-weight: 100;
    color: #606060;
    margin-top: -1.5rem;
    font-family: monospace;
  }
  p {
    justify-items: center;
    font-size: 1.15em;
    line-height: 1.58;
    font-weight: 400;
    letter-spacing: -0.003em;
    width: max-content;
  }
  table {
      display: flex;
      place-items: center;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #f5f4f0;
    thead {
        font-size: 10px;
    }
    td,
    th {
        border-bottom: 1px solid #f5f4f0;
        border-right: 1px solid #f5f4f0;
        padding: 10px 5px;
        position: relative;
        &:last-child {
        border-right: none;
        width: 150px;
        button {
            width: 100%;
        }
        }
    }
    tr {
        &:hover {
        background: var(--offWhite);
        }
    }
  }
  
`;
const borderWidth = '3px';
const AboutCard = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    p{
      max-width: 1440px;
    }
    // .hours {
    //   text-align: center;
    //   img{
    //     text-align: center;
    //     display: block;
    //     max-width: 1440px;

    //   }
    // }
    .block {
      text-align: center;
    }
    .inline {
      text-align: center;
      display: block;
      max-width: 1440px;
      width: 100%
    }
   
`;



// display: flex;
//   justify-content: center;
//   width: 100%;
//   flex-direction: column;
//   text-align: center;
//   background-color:linear-gradient(to bottom right,  #02386e, #00498d, #0052a2, #000b18, #00172d);
//   color: black;
//   padding: 1rem;
//   div> div, div>div>div {
//     border: 5px solid whitesmoke;
//   }

//   img {
//     max-width: 300px;
//   }
//   span {
//     font-weight: 100;
//     color: #606060;
//     margin-top: -1.5rem;
//     font-family: monospace;
//   }
//   p {
//     font-size: 1.15em;
//     line-height: 1.58;
//     font-weight: 400;
//     letter-spacing: -0.003em;
//   }
//   table {
//       display: flex;
//       place-items: center;
//     border-spacing: 0;
//     width: 100%;
//     border: 1px solid #f5f4f0;
//     thead {
//         font-size: 10px;
//     }
//     td,
//     th {
//         border-bottom: 1px solid #f5f4f0;
//         border-right: 1px solid #f5f4f0;
//         padding: 10px 5px;
//         position: relative;
//         &:last-child {
//         border-right: none;
//         width: 150px;
//         button {
//             width: 100%;
//         }
//         }
//     }
//     tr {
//         &:hover {
//         background: var(--offWhite);
//         }
//     }
//   }
const ServicesCard = styled.div`
  /* background-color:linear-gradient(to bottom right,  #02386e, #00498d, #0052a2, #000b18, #00172d);
  .wp-block-cover {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    padding: 20px
  }
  video {
    all: initial;
    max-height: 500px;
  }
  .contactBtn {
    right: 0;
    background: royalblue;
    margin: 10px;
    padding: 5px;
    border: 3px solid royalblue;
    border-radius: 10px;
  }
  .wp-block-media-text__media {
    outline: 15px solid whitesmoke;
    border-radius: 1px;
    margin: -25px;
  }
  .wp-block-media-text {
    display: flex;
    justify-content: space-around;
    place-items: baseline;
    padding: 20px
  }
  .wp-block-media-text:nth-child(even) {
    flex-direction: row
  }
  .wp-block-media-text:nth-child(odd) {
    flex-direction: row-reverse;
    text-align: right
  }
  .has-large-font-size {
    background: royalblue;
    font-size: 2rem;
    font-weight: 700;
    border-radius: 5px;
    padding: 10px
  }
  h3 {
    margin: 30px
  }
  img {
    max-width: 300px;
  }
  p {
    font-size: 1.15em;
    line-height: 1.58;
    font-weight: 400;
    letter-spacing: -0.003em;
  } */
`;

const ButtonWrapper = styled.button`
  padding: 0.8rem;
  margin-top: 0.4rem;
  font-size: 1.2rem;
  background-color: #a45dc3;
  border-radius: 1.5rem;
  width: fit-content;
  font-weight: 500;
  color: white;
  text-decoration: none;
  cursor: pointer;
  :hover {
    background-color: #9a4abc;
  }
`;

export { AboutCard, Block, HomeWPBK, BlockCentered, RoundedCard, ExtendedCard, ServicesCard, ButtonWrapper }