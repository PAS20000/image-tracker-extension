import styled from "styled-components";
import BreakPoints from "../../Styles/BreakPoints";

const Loading = styled.div`
    @keyframes Rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    transform: translate(40vh, 30vh);
    position: absolute;
    img {
        animation: Rotate 1s ease-in infinite;
    }
    h2 {
        margin: 20px 0px 0px 10px;
        color: ${props => props.theme.color.icon};
    }

    @media (min-width:${BreakPoints.width[1]}) {
        transform: translate(90vh, 30vh);
    }
`

export {
    Loading
}