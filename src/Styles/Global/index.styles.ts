import { createGlobalStyle } from "styled-components";
import BreakPoints from "../BreakPoints";

export default createGlobalStyle`
    *, html{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        scroll-behavior: smooth !important;
    }

    body{
        
        @media(max-width: ${BreakPoints.width[0]}){
            min-width: 600px !important;
            min-height: 600px !important;
        }

        font-size: 1rem;
        background: ${props => props.theme.color.bg[0]};
        color: white;
        font-family: 'Poppins', sans-serif;
        width: 100%;
        height: 100%;   
    }
`