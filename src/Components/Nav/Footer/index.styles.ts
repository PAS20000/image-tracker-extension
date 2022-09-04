import styled from "styled-components";
import BreakPoints from "../../../Styles/BreakPoints";

const Container = styled.div`
    position: fixed;
    width: 96%;
    height: 0px;
    transform: translate(0vh, -4vh);
    z-index: 7;

    @media(max-width:${BreakPoints.width[0]}){
        transform: translate(0vh, -5vh);
    }
    @media(min-height:${BreakPoints.height[0]}){
        transform: translate(0vh, 0vh);
        button {
            width:60px;
            height:60px;
            font-size:30px;
       }
    }
`

export {
    Container,
}