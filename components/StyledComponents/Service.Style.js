import styled from "styled-components";

// hsl(210, 100%, 31%); mainblue

const StyledServiceContainer = styled.div`
    margin: 0 auto;
    // max-width: 1440px;
    .mediaText {
            // background: royalblue;
            display: flex;
            margin: 50px 0;
            // border-radius: 5px;
            flex-wrap: wrap;
            justify-content: space-evenly;
            // border: 5px solid royalblue;
            padding: 10px 5px
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
        margin: 20px, 
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
        margin: 20px 0;
        display: grid;
        grid-template-columns: repeat(2,auto);
        align-items: center;
        justify-items: flex-start;
        background: linear-gradient(to top left,    #000b18, #00172d,  #02386e,#00498d, #0052a2,   );
        max-width: 100%;
        img{
            border: 5px solid bluesteel;
            // -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
            // box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
            border-radius: 10px;
            width: 450px;
            height: auto;
        }
        div {
            
            border-radius: 5px;
            padding: 10px;
            margin: 10px;
            display: flex;
            width: 700px;
            font-size: 2.5rem;
            flex-direction: column;
            // -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
            // box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
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
    @media (max-width: 768px) {
        width: 90%;
        a {
            text-align: centerl
        }
        a,
        p{
            width: 90%
        }
        .mediaText {
            /* background-color: green; */
            display: flex;
            flex-direction: column;
            div {
                display: flex;
                flex-direction: column;
            }
        }
        .mediaText,
        .mediaText:nth-child(even) {
            /* background-color: green; */
            display: flex;
            flex-direction: column;
            div {
                display: flex;
                flex-direction: column;
            }
        }
    }



`

export default StyledServiceContainer