import styled from "styled-components";
import { Props } from ".";
import BreakPoints from "../../Styles/BreakPoints";

const Container = styled.button<Props>`
    @keyframes Rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    transition: 0.6s;
    background-image:linear-gradient(70deg, ${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    position: ${props => props.position ?? 'relative'};
    color:${props => props.theme.color.icon};
    font-weight:bold;
    margin:${props => props.margin ?? '0px'};
    border:none;
    width:45px;
    height:45px;
    font-size: 1.8rem;
    box-shadow:${props => props.theme.utils.boxShadow};
    border-radius:50%;
    cursor:pointer;
    overflow:hidden;

    .rotate {
        animation: Rotate 1s ease-in infinite;
    }

    :hover{
        border: 0.5px solid ${props => props.theme.color.icon};
        transition: 0.6s;
        background-image:linear-gradient(70deg, ${props => props.theme.color.bg[1]}, ${props => props.theme.color.bg[0]});
        transform: scale(1.3);
        color:${props => props.color ?? props.theme.color.red};
    }

    @media(max-width:${BreakPoints.width[0]}){
        width:42px;
        height:42px;
        font-size : 1.5rem;
    }
`

export {
    Container
}