import styled from "styled-components";
import BreakPoints from "../../../Styles/BreakPoints";

const Title = styled.h1`
    color:${props => props.theme.color.icon};
    margin: 10px 10px 0px 10px;

    @media(min-height : ${BreakPoints.height[0]}){
        transform: translate(0vh, 0vh);
        button {
            width:60px;
            height:60px;
            font-size:30px;
       }
    }
`
export {
    Title
}