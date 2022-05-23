import styled from "styled-components";

const StyledServiceContainer = styled.div`
    width: 1366px;
    max-width: 100%;
    .mediaText {
            display: flex;
            justify-content: space-evenly;
            padding: 30px 0
            /* flex-direction: row-reverse */
    }
    .mediaText:nth-child(even) {
        flex-direction: row-reverse;
    }
    .divider {
        margin: 20px 0 0 0;
        width: 100vw;
        height: 80px;
        background-color: royalblue;
        color: white;
        font-weight: 700;
        
    }
    .divider:before{
        content: 'Professional Service';
    }
    
    .videoCover {
            display: flex;
            flex-direction: column-reverse;
            video {
                /* width: 1366px; */
                max-width: 100%;
                /* padding: 0 10px; */
                /* border: 25px solid royalblue; */
            }
            p{
                /* all: initial; */
                /* width: 1440px; */
                max-width: 100%;
                color: white;
                /* font-family: inherit;
                line-height: 1.5rem; */
                font-size: 20px;
                a {
                    background: white;
                    border-radius: 10px;
                    padding: 20px;
                    margin: 15px;
                    display: flex;
                    color: royalblue;
                    font-size: 1rem;
                }
            }
        }
    div> div {
        
        display: grid;
        grid-template-columns: repeat(2,auto);
        align-items: center;
        justify-items: flex-start;
        img{
            border: 10px solid royalblue;
            border-radius: 10px;
            width: 450px;
            height: auto;
        }
        div {
            /* background-color: wheat; */
            padding: 10px;
            margin: 10px;
            display: flex;
            width: 700px;
            font-size: 2.5rem;
            flex-direction: column;
            p:nth-of-type(1){
                white-space: nowrap;
                padding: 10px;
                font-size: 1.5rem;
            }
            p:nth-of-type(2){
                font-size: 16px
            
            }
        }
        
        .contactDiv {
            width: 80%
        }
        /* div:nth-child(even){
            /* display: none */

        /* img:nth-child(odd) {
            display: none;
        } */
    } 
    /* * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    margin: 10px minmax(auto);
    padding: 15px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
    /* grid-template-areas: 
    'title title title' */
    /* 'imgBr textBr textBr'
    'text text img'
    'img text text'
    'text video video' */
    



`

export default StyledServiceContainer