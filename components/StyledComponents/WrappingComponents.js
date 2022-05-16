import styled from "styled-components";
const Block = styled.div`
    p {
        display: block;
        margin: 0 auto;
    }
`
const BlockCentered = styled.div`
    display: flex;
    place-content: center
`
const RoundedCard = styled.div`
  display: flex;
  place-items: center;
  /* justify-content: center */
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
  /* justify-content: center */
  width: 480px;
  flex-direction: column;
  text-align: center;
  background-color:linear-gradient(to bottom right,  #02386e, #00498d, #0052a2, #000b18, #00172d,    );
;
  color: black;
  padding: 1rem;
  margin: 1rem;
  /* border-radius: 25px; */
  /* h3 {
    font-family: inherit;
    font-weight: 600;
    font-size: 2rem;
    color: royalblue;
    text-decoration: none;
    cursor: pointer;
  } */
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
    /* max-width: 1200px; */
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
 
const AboutCard = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
  background-color:linear-gradient(to bottom right,  #02386e, #00498d, #0052a2, #000b18, #00172d);
  color: black;
  padding: 1rem;
  /* margin: 1rem; */
  /* border-radius: 25px; */
  div> div, div>div>div {
    border: 5px solid whitesmoke;
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
    /* max-width: 1200px; */
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
const ServicesCard = styled.div`
  background-color:linear-gradient(to bottom right,  #02386e, #00498d, #0052a2, #000b18, #00172d,    );
  .wp-block-cover {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    padding: 20px
  }
  video {
    all: initial;
    max-height: 500px;
    /* max-width: 1200px */
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
      /* padding: 10px; */
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
  /* color: black;
  padding: 1rem;
  margin: 1rem; */
  /* border-radius: 25px; */
  /* h3 {
    font-family: inherit;
    font-weight: 600;
    font-size: 2rem;
    color: royalblue;
    text-decoration: none;
    cursor: pointer;
  } */
  img {
    max-width: 300px;
  }
  /* span {
    font-weight: 100;
    color: #606060;
    margin-top: -1.5rem;
    font-family: monospace;
  } */
  p {
    /* max-width: 1200px; */
    font-size: 1.15em;
    line-height: 1.58;
    font-weight: 400;
    letter-spacing: -0.003em;
  }
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

export { AboutCard, Block, BlockCentered, RoundedCard, ExtendedCard, ServicesCard, ButtonWrapper}