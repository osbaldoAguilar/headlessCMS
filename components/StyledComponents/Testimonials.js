import styled from "styled-components";

const StyleTestimonalContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    #testCard {
        background: #fff;
        border-radius: 10px;
        padding: 30px;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        /* margin-bottom: 10px; */
    }
    #testHeader {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

            font-size: 1.5rem;
            font-weight: 700

    }
    #testCard:nth-of-type(1){
        grid-column: 1/3;
        grid-row: 1;

        background: royalblue;
        color: #fff;
        background-image: url('/open.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: top -50px right 50px;

    }

    #testCard:nth-of-type(5) {
        grid-column: 2/4;
        grid-row: 2
    }

    #testCard:nth-of-type(2){
        grid-column: 4;
        grid-row: 1/3;
        background: royalblue;
        color: #fff;
        background-image: url('/close.svg');
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: bottom 5px right 5px;
    }






    /* .testCard:nth-of-type(2) {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row: 1;
    } */
    
    #testCard:nth-of-type(4) {
        grid-column: 1 / 2;
        grid-row: 2;
    }

    .testCard:nth-of-type(5) {
        grid-column: 4;
        grid-row: 1 / 3;
    }
    @media (max-width: 768px) {
    #testCard div {
        grid-template-columns: 1fr;
        width: 100%;
    }

    #testCard:nth-of-type(1) {
        grid-column: 1/5;
        grid-row: 1
    }
    #testCard:nth-of-type(5) {
        grid-column: 1/5;
        grid-row: 2
    }

    #testCard:nth-of-type(3) {
        grid-column: 1/5;
        grid-row: 3
    }
    #testCard:nth-of-type(4) {
        grid-column: 1/5;
        grid-row: 4;
    }

    #testCard:nth-of-type(2) {
        grid-column: 1/5;
        grid-row: 5;
        background-image: url('/close.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top -50px right 20px;
    }
}


`;

export default StyleTestimonalContainer