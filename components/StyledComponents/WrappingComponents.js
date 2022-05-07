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
  h3 {
    font-family: Roboto;
    font-weight: 600;
    font-size: 2rem;
    color: #2f4f4f;
    text-decoration: none;
    cursor: pointer;
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

export {Block, BlockCentered, RoundedCard, ButtonWrapper}